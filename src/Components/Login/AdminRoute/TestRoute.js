import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const TestRoute = () => {
	const [admin, setAdmin] = useState(false);
	const [student, setStudent] = useState(false);
	const [isLoad, setIsLoad] = useState(true);
	const { user } = useAuth();
	useEffect(() => {
		setIsLoad(true);
		const loadFUncion = async () => {
			await fetch(
				`https://fierce-caverns-90976.herokuapp.com/getUserRole/${user.email}`,
			)
				.then((res) => res.json())
				.then((data) => {
					const restData = data[0].role;
					if (restData === "Admin") {
						setAdmin(true);
					} else if (restData === "Student") {
						setStudent(true);
					}
				})
				.finally(setIsLoad(false));
		};
		loadFUncion();
	}, [user.email]);

	return {
		admin,
		isLoad,
		student,
	};
};

export default TestRoute;
