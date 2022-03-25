import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faRightFromBracket,
	faBell,
	faBars,
	faXmark,
	faRecycle,
	faChalkboardUser,
	faUserGraduate,
	faUserShield,
	faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
	const { user, logOut } = useAuth();
	const [isActive, setActive] = useState("block");
	const handleToggle = () => {
		setActive(!isActive);
	};

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
										className='w-34 h-16'
										src='https://i.ibb.co/mbrPZ39/edu-buddies.png'
										alt=''
									/>
								</Link>
								<span className='text-slate-100 text-sm uppercase'>Admin</span>
							</div>
						</li>
						<li>
							<Link to='' className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faUserGraduate}
								/>
								<span className='mx-3'>Course List</span>
							</Link>
						</li>
						<li>
							<Link
								to='admin/teacherList'
								className='li text-md rounded-lg text-white'>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faChalkboardUser}
								/>
								<span className='mx-3'>Teacher List</span>
							</Link>
						</li>
						<li>
							<Link
								to='admin/makeAdmin'
								className='li text-md rounded-lg text-white'>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faUserShield}
								/>
								<span className='mx-3'>Change Role</span>
							</Link>
						</li>
						<li>
							<Link to='promo' className='li text-md rounded-lg  text-white'>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faUserShield}
								/>
								<span className='mx-3'>Promo</span>
							</Link>
						</li>
						<li>
							<Link
								to='newsletterlist'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faUserShield}
								/>
								<span className='mx-3'>Subscribers</span>
							</Link>
						</li>
						<li>
							<Link
								to='postnewsletter'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faUserShield}
								/>
								<span className='mx-3'>Send Newsletter</span>
							</Link>
						</li>
						<li>
							<Link
								to='postblog'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faUserShield}
								/>
								<span className='mx-3'>Post Blog</span>
							</Link>
						</li>
						<li>
							<Link
								to='bloglist'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faUserShield}
								/>
								<span className='mx-3'>All Blogs</span>
							</Link>
						</li>
						<li>
							<Link to='mails' className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faUserShield}
								/>
								<span className='mx-3'>Mails</span>
							</Link>
						</li>
						<li>
							<Link
								to='allusers'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faUserShield}
								/>
								<span className='mx-3'>All Users</span>
							</Link>
						</li>
						<li>
							<Link
								to='autoemailsend'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faUserShield}
								/>
								<span className='mx-3'>Send Emaill</span>
							</Link>
						</li>
						<li>
							<Link
								to='admin/RecycleBin'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faRecycle}
								/>
								<span className='mx-3'>Recycle Bin</span>
							</Link>
						</li>
						<li>
							<Link
								to='admin/history'
								className='li text-md rounded-lg  text-white '>
								<FontAwesomeIcon
									className='mx-2 text-red-500 icon'
									icon={faRecycle}
								/>
								<span className='mx-3'>History</span>
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

export default Dashboard;
