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
		<div className='dashboard' style={{ minHeight: "70vh" }}>
			<div className='relative min-h-screen md:flex '>
				<aside
					/* onClick={handleToggle} */
					style={{ position: "sticky", top: 0, zIndex: 999, minWidth: "250px" }}
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
									<ul
										className='space-y-5'
										style={{
											maxHeight: "60vh",
											overflow: "hidden",
											overflowY: "scroll",
										}}>
										<li>
											<Link
												to=''
												className='li text-lg rounded-lg  text-white '>
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
												className='li text-lg rounded-lg text-white'>
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
												className='li text-lg rounded-lg text-white'>
												<FontAwesomeIcon
													className='mx-2 text-red-500 icon'
													icon={faUserShield}
												/>
												<span className='mx-3'>Change Role</span>
											</Link>
										</li>
										<li>
											<Link
												to='promo'
												className='li text-lg rounded-lg  text-white'>
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
												className='li text-lg rounded-lg  text-white '>
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
												className='li text-lg rounded-lg  text-white '>
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
												className='li text-lg rounded-lg  text-white '>
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
												className='li text-lg rounded-lg  text-white '>
												<FontAwesomeIcon
													className='mx-2 text-red-500 icon'
													icon={faUserShield}
												/>
												<span className='mx-3'>All Blogs</span>
											</Link>
										</li>
										<li>
											<Link
												to='mails'
												className='li text-lg rounded-lg  text-white '>
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
												className='li text-lg rounded-lg  text-white '>
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
												className='li text-lg rounded-lg  text-white '>
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
												className='li text-lg rounded-lg  text-white '>
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
												className='li text-lg rounded-lg  text-white '>
												<FontAwesomeIcon
													className='mx-2 text-red-500 icon'
													icon={faRecycle}
												/>
												<span className='mx-3'>History</span>
											</Link>
										</li>
									</ul>
								</div>
								<div style={{ position: "fixed", bottom: "4rem" }}>
									<div
										onClick={logOut}
										className='logout text-lg rounded-lg  text-white cursor-pointer'>
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

export default Dashboard;
