import { useEffect, useState } from "react";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	getIdToken,
	sendEmailVerification,
} from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";
import axios from "axios";
import Swal from "sweetalert2";

initializeAuth();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const [isLoading, setIsloading] = useState(true);
	const [admin, setAdmin] = useState(false);
	const [token, setToken] = useState("");
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = (navigate, location) => {
		setIsloading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result?.user;
				saveOrReplaceUserToDb(
					user?.email,
					user?.displayName,
					user?.photoURL,
					navigate,
					location,
				);
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
			})
			.finally(() => setIsloading(false));
	};
	const resetPassword = (auth, email, navigate, location) => {
		sendPasswordResetEmail(auth, email)
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Please Check Your Email Inbox",
					showConfirmButton: false,
					timer: 2000,
				}).then(function() {
					const destination = location?.state?.from || "/";
					navigate(destination);
				});
			})
			.catch((error) => {
				const errorMessage = error.message;
				Swal.fire({
					icon: "error",
					title: errorMessage,
					showConfirmButton: false,
					timer: 2000,
				});
				setError(errorMessage);
			})
			.finally(() => setIsloading(false));
	};

	const createNewUserUsingEmailPassword = (
		auth,
		email,
		password,
		displayName,
		navigate,
		location,
	) => {
		setIsloading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((res) => {
				sendEmailVerification(auth.currentUser);
				setUser(res.user);
				saveUserToDb(email, displayName, navigate, location);
			})
			.catch((error) => {
				const errorMessage = error.message;
				Swal.fire({
					icon: "error",
					title: errorMessage,
					showConfirmButton: false,
					timer: 2000,
				});
				setError(errorMessage);
			})
			.finally(() => setIsloading(false));
	};

	const signInWithEmailPassword = (
		auth,
		email,
		password,
		navigate,
		location,
	) => {
		setIsloading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Login Successfull",
					showConfirmButton: false,
					timer: 2000,
				}).then(function() {
					const destination = location?.state?.from || "/";
					navigate(destination);
				});
			})

			.catch((error) => {
				const errorMessage = error.message;
				Swal.fire({
					icon: "error",
					title: errorMessage,
					showConfirmButton: false,
					timer: 2000,
				});
				setError(errorMessage);
			})
			.finally(() => setIsloading(false));
	};

	const saveUserToDb = (email, displayName, navigate, location) => {
		const save = {
			email,
			displayName,
			photoURL: "https://teamssyaan.blob.core.windows.net/images/user.png",
		};
		axios
			.post(`https://fierce-caverns-90976.herokuapp.com/signup`, save)
			.then(function(response) {
				Swal.fire({
					icon: "success",
					title: "Please Check Your Email Inbox to Verify New Account",
					showConfirmButton: true,
					timer: 3000,
				}).then(function() {
					const destination = location?.state?.from || "/login";
					navigate(destination);
				});
			})
			.catch(function(error) {
				Swal.fire({
					icon: "error",
					title: error,
					showConfirmButton: false,
					timer: 3000,
				});
				console.log(error);
			});
	};
	const saveOrReplaceUserToDb = (
		email,
		displayName,
		photoURL,
		navigate,
		location,
	) => {
		const save = { email, displayName, photoURL };
		axios
			.put(`https://fierce-caverns-90976.herokuapp.com/login`, save)
			.then(function(response) {
				Swal.fire({
					icon: "success",
					title: "Login Successfull",
					showConfirmButton: false,
					timer: 2000,
				}).then(function() {
					const destination = location?.state?.from || "/";
					navigate(destination);
				});
			})
			.catch(function(error) {
				Swal.fire({
					icon: "error",
					title: error,
					showConfirmButton: false,
					timer: 2000,
				});
				console.log(error);
			});
	};

	/*------ to findout user is admin or not---------- */
	useEffect(() => {
		fetch(`https://fierce-caverns-90976.herokuapp.com/users/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setAdmin(data?.admin));
	}, [user?.email]);

	const logOut = () => {
		console.log("fro header");
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {})
			.finally(() => setIsloading(false));
	};
	useEffect(() => {
		const unSubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setError("");
				getIdToken(user).then((idToken) => setToken(idToken));
			} else {
				setUser({});
			}
			setIsloading(false);
		});
		return () => unSubscribed;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth]);
	return {
		auth,
		user,
		error,
		signInUsingGoogle,
		createNewUserUsingEmailPassword,
		signInWithEmailPassword,
		logOut,
		isLoading,
		resetPassword,
		admin,
		token,
	};
};

export default useFirebase;
