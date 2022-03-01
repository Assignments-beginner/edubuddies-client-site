import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faLocationDot,
	faRightFromBracket,
	faGraduationCap,
    faCode,
    faUpRightFromSquare,
	faBell,
	faBars,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Dashboard/Dashboard.css";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const StudentDashboard = () => {
	const { user } = useAuth();
	const [isActive, setActive] = useState("block");
	const handleToggle = () => {
		setActive(!isActive);
	};

	return (
		<div className='dashboard' style={{ minHeight: "70vh" }}>
			<div className='relative min-h-screen md:flex '>
				<aside
					/* onClick={handleToggle} */
					style={{ position: "sticky", top: 0, zIndex: 999 }}
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
								<div style={{ position: "fixed", top: 0, right: 0 }}>
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
								<div style={{ position: "fixed", top: "2rem" }}>
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
									<ul className='space-y-5'>
										<li>
											<NavLink
												to='profile'
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
												to='skillset'
												className='li text-lg rounded-lg  text-white '>
												<FontAwesomeIcon
													className='ml-2 mr-1  text-red-500 icon'
													icon={faCode}
												/>
												<span className='mx-3'>Skill Set</span>
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
									</ul>
								</div>
								<div style={{ position: "fixed", bottom: "4rem" }}>
									<Link
										to=''
										className='logout text-lg rounded-lg  text-white '>
										<FontAwesomeIcon
											className='mx-2 text-red-500 icon '
											icon={faRightFromBracket}
										/>
										<span className='mx-3'>Log Out</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</aside>
				<div className='flex-1 mx-auto'>
					<div
						className='py-3 bg-white border-b-2 flex items-center justify-between px-8'
						style={{ position: "sticky", top: 0 }}>
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

							<h2 className='uppercase text-xl hidden md:block'>
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
									style={{ fontSize: "14px" }}
									className='text-black uppercase'>
									{user.displayName}
								</span>
								<Link to='/userProfile' className='text-sm text-red-500'>
									View Profile
								</Link>
							</div>
							<img
								className='user-img h-14 w-14 rounded-full ml-2'
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
