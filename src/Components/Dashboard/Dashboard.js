import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faBook,
	faBlog,
	faCertificate,
	faBell,
	faBars,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
	const { user } = useAuth();
	const [isActive, setActive] = useState("block");
	const handleToggle = () => {
		setActive(!isActive);
	};

	return (
		<div className=' dashboard' style={{ minHeight: "70vh" }}>
			<div className='relative min-h-screen md:flex '>
				<div class='bg-gray-800 text-gray-100 flex justify-between md:hidden'>
					<a href='/' class='block p-4 text-white font-bold'>
						Better Dev
					</a>

					<button
						className={`flex bg-red-500 rounded-lg p-1 justify-start m-2 ${
							isActive ? "block" : null
						}`}
						onClick={handleToggle}>
						<FontAwesomeIcon
							className='mx-2 text-2xl text-white icon text-left'
							icon={isActive ? faXmark : faBars}
						/>
					</button>
				</div>

				<aside
					/* onClick={handleToggle} */
					className={`md:relative absolute delay-500  ${
						isActive ? "block right" : "left"
					}`}
					aria-label='Sidebar'>
					<div className='py-4 overflow-y-auto rounded-r-lg bg-gray-200 text-left flex justify-center'>
						<ul className='space-y-3'>
							<li className='rounded-lg flex justify-center hover:bg-gray-200'>
								<img
									className='border-2 border-red-500 '
									style={{ width: "70px", height: "70px", borderRadius: "50%" }}
									src={user?.photoURL}
									alt={user?.displayName}
								/>
							</li>
							<li className='rounded-lg'>
								<Link to='' className='text-lg text-gray-900'>
									<FontAwesomeIcon
										className='mx-2 text-red-500 icon'
										icon={faUser}
									/>
									<span className='mx-3'>Profile</span>
								</Link>
							</li>
							<li className='rounded-lg'>
								<NavLink to='addCourses' className='text-lg text-gray-900 '>
									<FontAwesomeIcon
										className='mx-2 text-red-500 icon'
										icon={faBook}
									/>
									<span className='mx-3'>Add Courses</span>
								</NavLink>
							</li>
							<li className='rounded-lg'>
								<Link to='blogs' className='text-lg text-gray-900 '>
									<FontAwesomeIcon
										className='mx-2 text-red-500 icon'
										icon={faBlog}
									/>
									<span className='mx-3'>Blogs</span>
								</Link>
							</li>
							<li className='rounded-lg'>
								<Link to='' className='text-lg text-gray-900 '>
									<FontAwesomeIcon
										className='mx-2 text-red-500 icon'
										icon={faCertificate}
									/>
									<span className='mx-3'>Certificate</span>
								</Link>
							</li>
							<li className='rounded-lg'>
								<Link to='' className='text-lg text-gray-900 '>
									<FontAwesomeIcon
										className='mx-2 text-red-500 icon'
										icon={faBell}
									/>
									<span className='mx-3'>Notices</span>
								</Link>
							</li>
						</ul>
					</div>
				</aside>
				<div className='flex-1 mx-auto'>
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
