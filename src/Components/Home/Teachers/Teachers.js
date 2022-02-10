/* import React from "react";
import img1 from "../../../Images/Teachers/team1.jpg";
import img2 from "../../../Images/Teachers/team2.jpg";
import img3 from "../../../Images/Teachers/team3.jpg";
import "./Teachers.css";

const Teachers = () => {
	return (
		<div className='teachers'>
			<div className='team-area'>
				<div className='text-5xl font-black mt-5 mb-8 text-blue-700'>
					Our Beloved Teachers
					<br />
					<span className='text-sm text-black'>
						You don't have to struggle alone, you've got our assistance and
						help.
					</span>
				</div>

				<div className='team-box'>
					<div className='box'>
						<div className='teachers-box'>
							<img src={img2} alt='' />
						</div>
						<div>
							<h2 className='mt-4'>Kelly Franklin</h2>
							<span>Senior Developer</span>
							<ul>
								<li>
									<a href='/#'>
										{" "}
										<i className='fab fa-facebook'></i>
									</a>
								</li>
								<li>
									<a href='/#'>
										{" "}
										<i className='fab fa-twitter'></i>{" "}
									</a>
								</li>
								<li>
									<a href='/#'>
										{" "}
										<i className='fab fa-linkedin'></i>{" "}
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='box'>
						<div className='teachers-box'>
							<img src={img1} alt='' />
						</div>
						<div>
							<h2 className='mt-4'>Rakib Siddique</h2>
							<span>Software Engineer</span>
							<ul>
								<li>
									<a href='/#'>
										{" "}
										<i className='fab fa-facebook'></i>
									</a>
								</li>
								<li>
									<a href='/#'>
										{" "}
										<i className='fab fa-twitter'></i>{" "}
									</a>
								</li>
								<li>
									<a href='/#'>
										{" "}
										<i className='fab fa-linkedin'></i>{" "}
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='box'>
						<div className='teachers-box'>
							<img src={img3} alt='' />
						</div>
						<div>
							<h2 className='mt-4'>J.K Alice</h2>
							<span>Web Developer</span>
							<ul>
								<li>
									<a href='/#'>
										{" "}
										<i className='fab fa-facebook'></i>
									</a>
								</li>
								<li>
									<a href='/#'>
										{" "}
										<i className='fab fa-twitter'></i>{" "}
									</a>
								</li>
								<li>
									<a href='/#'>
										{" "}
										<i className='fab fa-linkedin'></i>{" "}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teachers;
 */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination]);

const Teachers = () => {
	return (
		<div className='container mx-auto my-14'>
			<h1 className='text-4xl font-semibold mt-9 mb-4 text-blue-500'>
				Our Expert Instructor
			</h1>
			<div
				className='px-6 w-full py-7 pagination'
				style={{ overflow: "hidden" }}>
				<Swiper
					loop={true}
					autoplay={{ delay: 4000 }}
					grabCursor={true}
					slidesPerView={3}
					spaceBetween={30}
					modules={[Pagination]}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						300: {
							slidesPerView: 1,
						},
						550: {
							slidesPerView: 3,
						},
						900: {
							slidesPerView: 4,
						},
					}}
					className='mySwiper'>
					{Array.from({ length: 5 }).map((_, idx) => (
						<SwiperSlide>
							<div className='border border-blue-500 rounded-lg card duration-300'>
								<div className='flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg card'>
									<div className='inline-flex shadow-lg border border-gray-200 rounded overflow-hidden w-full'>
										<img
											src='https://shivaaythemes.in/educater-html/assets/images/instructor-3.jpg'
											alt=''
											className='h-full w-full card-image rounded'
										/>
									</div>

									<h2 className='mt-4 font-bold text-xl'>John Doe</h2>
									<h6 className='mt-2 text-sm font-medium'>Instructor</h6>
									<ul className='flex flex-row mt-4 space-x-2'>
										<li>
											<a
												href='/'
												className='flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800 hover:text-white hover:bg-blue-800 hover:border-blue-800  duration-300'>
												<FontAwesomeIcon icon={faFacebookF} />
											</a>
										</li>
										<li>
											<a
												href='/'
												className='flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800 hover:text-white hover:bg-sky-500 hover:border-sky-500  duration-300'>
												<FontAwesomeIcon icon={faTwitter} />
											</a>
										</li>
										<li>
											<a
												href='/'
												className='flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800 hover:text-white hover:bg-black hover:border-black  duration-300'>
												<FontAwesomeIcon icon={faGithub} />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Teachers;
