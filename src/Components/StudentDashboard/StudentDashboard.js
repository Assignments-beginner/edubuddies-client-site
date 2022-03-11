import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faLocationDot,
	faRightFromBracket,
	faGraduationCap,
	faUpRightFromSquare,
	faBell,
	faBars,
	faXmark,
	faLightbulb,
	faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import WarningModal from "./WarningModal";
import Swal from "sweetalert2";

const StudentDashboard = () => {
	const { user, logOut } = useAuth();
	const [isActive, setActive] = useState("block");
	const handleToggle = () => {
		setActive(!isActive);
	};
	/* 	const [showModal, setShowModal] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();	React.useEffect(() => {
		axios
			.get(
				`https://fierce-caverns-90976.herokuapp.com/allusers?email=${user?.email}`,
			)
			.then((res) => {
				setData(res.data);
			});
	}, [user?.email, submitting]);
	 	useEffect(() => {
		const profile = {
			skillset: data?.skillset || [],
		};
		Swal.fire({
			icon: "success",
			title: "Welcome",
			confirmButtonText: "Ok",
			allowOutsideClick: false,
			allowEscapeKey: false,
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.put(`http://localhost:5000/warning?email=${user?.email}`, profile)
					.then(function(response) {
						Swal.fire({
							icon: "success",
							title: "Have a nice journy",
							showConfirmButton: false,
							timer: 1500,
						});
					})
					.catch(function(error) {
						console.log("error", error);
						console.log(error);
					});
			}
		});
	}, [data?.skillset, user?.email]); */

	return (
		<div className='dashboard' style={{ minHeight: "70vh" }}>
			{/* 		{showModal || !data?.skillset ? (
				<>
					<WarningModal
						setShowModal={setShowModal}
						submitting={submitting}
						setSubmitting={setSubmitting}
					/>
				</>
			) : null} */}
			<div className='relative min-h-screen md:flex '>
				<aside
					/* onClick={handleToggle} */
					style={{
						position: "sticky",
						top: 0,
						zIndex: 999,
						minWidth: "250px",
					}}
					aria-label='Sidebar'>
					<div
						className={`md:relative absolute delay-500  ${
							isActive ? "block right" : "left"
						}`}>
						<div
							className='py-36 overflow-y-auto bg-gray-900 text-left '
							style={{
								minHeight: "100vh",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<div className='flex justify-center'>
								<div
									style={{
										position: "fixed",
										top: 0,
										right: 0,
									}}>
									<div className='block md:hidden'>
										<button
											className={`flex  rounded-lg p-1 justify-start m-2 ${
												isActive ? "block" : null
											}`}
											onClick={handleToggle}>
											<FontAwesomeIcon
												className='mx-2 text-2xl text-white icon text-left'
												icon={isActive ? faXmark : faBars}
											/>
										</button>
									</div>
								</div>
								<div
									style={{
										position: "fixed",
										top: "2rem",
									}}>
									<div className='flex flex-col items-center'>
										<Link to='/home'>
											<img
												className='w-34 h-16'
												src='https://i.ibb.co/HzzW0Xv/logo.png'
												alt=''
											/>
										</Link>
										<span className='text-slate-100 text-sm uppercase'>
											Dashboard
										</span>
									</div>
								</div>
								<div>
									<ul
										className='space-y-5'
										style={{
											maxHeight: "60vh",
											overflow: "hidden",
											overflowY: "scroll",
										}}>
										<li>
											<NavLink
												to='supportsession'
												className='li text-lg rounded-lg  text-white '>
												<FontAwesomeIcon
													className='mx-2 text-red-500 icon'
													icon={faHeadset}
												/>
												<span className='mx-3'>Support Sessions</span>
											</NavLink>
										</li>
										<li>
											<NavLink
												to=''
												className='li text-lg rounded-lg  text-white '>
												<FontAwesomeIcon
													className='mx-2 text-red-500 icon'
													icon={faUser}
												/>
												<span className='mx-3'>Profile</span>
											</NavLink>
										</li>
										<li>
											<NavLink
												to='address'
												className='li text-lg rounded-lg  text-white '>
												<FontAwesomeIcon
													className='mx-2 text-red-500 icon'
													icon={faLocationDot}
												/>
												<span className='mx-3'>Address</span>
											</NavLink>
										</li>
										<li>
											<NavLink
												to='education'
												className='li text-lg rounded-lg  text-white '>
												<FontAwesomeIcon
													className='ml-2 mr-1 text-red-500 icon'
													icon={faGraduationCap}
												/>
												<span className='mx-3'>Education</span>
											</NavLink>
										</li>
										<li>
											<NavLink
												to='importantlinks'
												className='li text-lg rounded-lg  text-white '>
												<FontAwesomeIcon
													className='mx-2 text-red-500 icon'
													icon={faUpRightFromSquare}
												/>
												<span className='mx-3'>Important Links</span>
											</NavLink>
										</li>
										<li>
											<NavLink
												to='skills'
												className='li text-lg rounded-lg  text-white '>
												<FontAwesomeIcon
													className='mx-2 text-red-500 icon'
													icon={faLightbulb}
												/>
												<span className='mx-3'>Skills</span>
											</NavLink>
										</li>
										<li>
											<Link
												to='postblog'
												className='li text-lg rounded-lg  text-white '>
												<FontAwesomeIcon
													className='mx-2 text-red-500 icon'
													icon={faLightbulb}
												/>
												<span className='mx-3'>Post Blog</span>
											</Link>
										</li>
									</ul>
								</div>
								<div
									style={{
										position: "fixed",
										bottom: "4rem",
									}}>
									<div
										onClick={logOut}
										className='logout text-lg rounded-lg  text-white '>
										<FontAwesomeIcon
											className='mx-2 text-red-500 icon '
											icon={faRightFromBracket}
										/>
										<span className='mx-3'>Log Out</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</aside>
				<div className='flex-1 mx-auto'>
					<div
						className='py-1 bg-white border-b-2 flex items-center justify-between px-8'
						style={{
							position: "sticky",
							top: 0,
						}}>
						<div className='flex items-center'>
							<div className='block md:hidden'>
								<button
									className={`flex bg-red-500 rounded-lg p-1 justify-start ${
										isActive ? "block" : null
									}`}
									onClick={handleToggle}>
									<FontAwesomeIcon
										className='mx-2 text-2xl text-white icon text-left'
										icon={isActive ? faXmark : faBars}
									/>
								</button>
							</div>

							<h2 className='uppercase text-md hidden md:block'>
								Welcome, {user.displayName}
							</h2>
							<Link to=''>
								<FontAwesomeIcon
									className='mx-6 mt-1 text-red-500 icon text-xl'
									icon={faBell}
								/>
							</Link>
						</div>
						<div className='flex items-center profile-imgName'>
							<div className='flex flex-col items-end'>
								<span
									style={{ fontSize: "13px" }}
									className='text-black uppercase'>
									{user.displayName}
								</span>
								<Link to='/userProfile' className='text-sm text-red-500'>
									View Profile
								</Link>
							</div>
							<img
								className='user-img h-11 w-11 rounded-full ml-2'
								src={user.photoURL}
								alt=''
							/>
						</div>
					</div>
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default StudentDashboard;
