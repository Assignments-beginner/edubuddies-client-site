import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Teachers.css";

const Teachers = () => {
	const [teachers, setTeachers] = useState([]);
	useEffect(() => {
		fetch("https://fierce-caverns-90976.herokuapp.com/teachers")
			.then((res) => res.json())
			.then((data) => setTeachers(data));
	}, []);
	console.log("teachers", teachers);

	return (
		<div className='teachers mb-20'>
			<div className='team-area'>
				<div className='text-red-500 text-center text-3xl uppercase font-black mt-5 mb-8'>
					Our Instructors
					<p className='text-sm text-black px-6 pt-3'>
						You don't have to struggle alone, you've got our assistance and
						help.
					</p>
				</div>
				<div className='grid gap-6 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 mx-auto'>
					{teachers?.slice(0, 3).map((teacher, key) => (
						<div className='box pb-6'>
							<div className='teachers-box'>
								<img src={teacher?.photoURL} alt={teacher?.displayName} />
							</div>
							<div>
								<h2 className='mt-4'>{teacher?.displayName}</h2>
								<span>{teacher?.designation}</span>
								<ul>
									<li>
										<a
											target='_blank'
											rel='noopener noreferrer'
											href={teacher?.facebook}>
											<FontAwesomeIcon
												className='text-gray-700 text-3xl mx-2'
												icon={faFacebook}
											/>
										</a>
									</li>
									<li>
										<a
											target='_blank'
											rel='noopener noreferrer'
											href={teacher?.twitter}>
											<FontAwesomeIcon
												className='text-gray-700 text-3xl mx-2'
												icon={faTwitter}
											/>
										</a>
									</li>
									<li>
										<a
											target='_blank'
											rel='noopener noreferrer'
											href={teacher?.linkedin}>
											<FontAwesomeIcon
												className='text-gray-700 text-3xl mx-2'
												icon={faLinkedin}
											/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					))}
					{/* 
					<div className='box pb-6'>
						<div className='teachers-box'>
							<img
								src='https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcG9ydHJhaXR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
								alt=''
							/>
						</div>
						<div>
							<h2 className='mt-4'>Rakib Siddique</h2>
							<span>Senior Developer</span>
							<ul>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://img.freepik.com/free-photo/pile-3d-facebook-logos_1379-875.jpg?w=740'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faFacebook}
										/>
									</a>
								</li>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://img.freepik.com/free-photo/pile-3d-twitter-logos_1379-879.jpg?w=740'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faTwitter}
										/>
									</a>
								</li>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.luanwise.co.uk/wp-content/uploads/2021/12/Linkedin-1200x500.jpeg'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faLinkedin}
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='box pb-6'>
						<div className='teachers-box'>
							<img
								src='https://images.unsplash.com/photo-1513690277738-c9bc7eb2a992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHx3b21lbiUyMHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								alt=''
							/>
						</div>
						<div>
							<h2 className='mt-4'>Kelly Franklin</h2>
							<span>Software Engineer</span>
							<ul>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://img.freepik.com/free-photo/pile-3d-facebook-logos_1379-875.jpg?w=740'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faFacebook}
										/>
									</a>
								</li>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://img.freepik.com/free-photo/pile-3d-twitter-logos_1379-879.jpg?w=740'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faTwitter}
										/>
									</a>
								</li>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.luanwise.co.uk/wp-content/uploads/2021/12/Linkedin-1200x500.jpeg'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faLinkedin}
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='box pb-6'>
						<div className='teachers-box'>
							<img
								src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHx3b21lbiUyMHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								alt=''
							/>
						</div>
						<div>
							<h2 className='mt-4'>Josh Mathew</h2>
							<span>Web Developer</span>
							<ul>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://img.freepik.com/free-photo/pile-3d-facebook-logos_1379-875.jpg?w=740'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faFacebook}
										/>
									</a>
								</li>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://img.freepik.com/free-photo/pile-3d-twitter-logos_1379-879.jpg?w=740'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faTwitter}
										/>
									</a>
								</li>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.luanwise.co.uk/wp-content/uploads/2021/12/Linkedin-1200x500.jpeg'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faLinkedin}
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>*/}
				</div>
			</div>
		</div>
	);
};

export default Teachers;
