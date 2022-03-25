import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faLocationDot,
	faGraduationCap,
	faUpRightFromSquare,
	faBell,
	faBars,
	faLightbulb,
	faHeadset,
	faRightFromBracket,
	faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const StudentDashboard = () => {
	const { user, logOut } = useAuth();
	return (
		<div style={{ maxHeight: "100vh" }}>
			<div
				className='py-1 bg-white border-b-2 flex items-center justify-between px-8'
				style={{ height: "3.5rem" }}>
				<div className='flex items-center'>
					<div className='block lg:hidden mr-3'>
						<label for='my-drawer-2' className='drawer-button lg:hidden'>
							<FontAwesomeIcon
								for='my-drawer-2'
								className='p-3 bg-red-500 text-white rounded-lg'
								icon={faBars}
							/>
						</label>
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
						<span style={{ fontSize: "13px" }} className='text-black uppercase'>
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
			<div
				className='h-screen drawer drawer-mobile w-full'
				style={{ height: "calc(100vh - 3.5rem)" }}>
				<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
				<div className='drawer-content flex flex-col items-center'>
					<Outlet></Outlet>
				</div>
				<div className='drawer-side'>
					<label for='my-drawer-2' className='drawer-overlay'></label>
					<ul className='menu p-4 overflow-y-auto w-80 '>
						<li className='topDashboard'>
							<div className='flex flex-col items-center'>
								<Link to='/home'>
									<img
										className='w-38 h-20'
										src='https://i.ibb.co/mbrPZ39/edu-buddies.png'
										alt=''
									/>
								</Link>
								<span className='text-slate-100 text-sm uppercase'>
									Student
								</span>
							</div>
						</li>
						<li>
							<NavLink
								to='/studentdashboard/'
								className='li text-md rounded-lg  text-white'>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faUser}
								/>
								<span className='mx-3'>Profile</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/studentdashboard/myCourse/'
								className='li text-md rounded-lg  text-white'>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faCirclePlay}
								/>
								<span className='mx-3'>My Courses</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to='supportsession'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faHeadset}
								/>
								<span className='mx-3'>Support Sessions</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to='address'
								className='li text-md rounded-lg  text-white '>
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
								className='li text-md rounded-lg  text-white '>
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
								className='li text-md rounded-lg  text-white '>
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
								className='li text-md rounded-lg  text-white '>
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
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faLightbulb}
								/>
								<span className='mx-3'>Post Blog</span>
							</Link>
						</li>
						<li>
							<div
								onClick={logOut}
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon '
									icon={faRightFromBracket}
								/>
								<span className='mx-3'>Log Out</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default StudentDashboard;
