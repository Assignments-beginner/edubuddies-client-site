import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChalkboardUser,
	faRightFromBracket,
	faTrash,
	faFolder,
	faUserGraduate,
	faGraduationCap,
	faPlayCircle,
	faBell,
	faBars,
	faXmark,
	faPen,
	faFolderPlus,
	faHeadset,
} from "@fortawesome/free-solid-svg-icons";

import { Link, Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const TeachersDashboard = () => {
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
									Teacher
								</span>
							</div>
						</li>
						<li>
							<NavLink
								to='/teachersDashboard/'
								className='li text-md rounded-lg text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faChalkboardUser}
								/>
								<span className='mx-3'>Dashboard</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to='profile'
								className='li text-md rounded-lg text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faChalkboardUser}
								/>
								<span className='mx-3'>My Profile</span>
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
								<span className='mx-3'>Support Session</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to='allTeachers'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faUserGraduate}
								/>
								<span className='mx-3'>All Teachers</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to='bestPerformer'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faGraduationCap}
								/>
								<span className='mx-3'>Top Teacher</span>
							</NavLink>
						</li>
						<li>
							<Link
								to='postblog'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faFolder}
								/>
								<span className='mx-3'>Post Blog</span>
							</Link>
						</li>
						<li>
							<NavLink
								to='myCourse'
								className='litext-md rounded-lg text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faFolder}
								/>
								<span className='mx-3'>My Courses</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to='addCourse'
								className='litext-md rounded-lg text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faFolderPlus}
								/>
								<span className='mx-3'>Add Course</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to='addContent'
								className='litext-md rounded-lg text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faPlayCircle}
								/>
								<span className='mx-3'>Add Content</span>
							</NavLink>
						</li>
						<li>
							<Link
								to='updateCourse'
								className='li text-md rounded-lg  text-white'>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faPen}
								/>
								<span className='mx-3'>Update Course</span>
							</Link>
						</li>
						<li>
							<NavLink
								to='removeCourse'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faTrash}
								/>
								<span className='mx-3'>Remove Course</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to='postNotice'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faChalkboardUser}
								/>
								<span className='mx-3'>Post Notice</span>
							</NavLink>
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
export default TeachersDashboard;
