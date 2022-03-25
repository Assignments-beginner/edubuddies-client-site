import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
	faUser,
	faBookmark,
	faClock,
	faStar as faRegularStar,
} from "@fortawesome/free-regular-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import demoUser from "../../../../Images/user-demo.png";
import "../ProgrammingCourses/ProgrammingCourses.css";

const ProgrammingCourses = () => {
	const [courses, setCourses] = useState([]);

	const programCategory = "Programming Language";

	useEffect(() => {
		fetch(
			`https://fierce-caverns-90976.herokuapp.com/ProgrammingCourses?particularCategory=${programCategory}`,
		)
			.then((res) => res.json())
			.then((data) => setCourses(data));
		// .then((data) => console.log(data))
	}, [programCategory]);

	return (
		<div className='mt-8 mb-16'>
			<h1 className='font-bold text-3xl text-slate-900 uppercase'>
				Programming <span className='text-red-500'>Fundamentals</span>
			</h1>
			<div className='ProgramFun'>
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={"auto"}
					initialSlide={1}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination]}
					className='mySwiper'>
					{courses.map((courses, key) => (
						<SwiperSlide key={key}>
							<div className='border rounded-lg bg-white'>
								<div className='overflow-hidden rounded-t-lg'>
									<img
										className='w-full h-40 rounded-t-lg'
										src={courses?.image}
										alt=''
									/>
									{/* <button
                    className="
                    top-4 
                    right-4 
                    absolute 
                    px-1.5
                    pt-1.5
                    bg-white"
                  >
                    <FontAwesomeIcon
                      className="text-red-500 text-xl"
                      icon={faBookmark}
                    />
                  </button> */}
									<div className='bg-slate-900 top-4 left-4 absolute px-2 rounded'>
										<span className='text-white text-xs'>
											{courses?.category}
										</span>
									</div>
								</div>
								{/* Course Details Body  */}
								<div className='px-4 pb-4'>
									<div className='py-6 flex flex-col items-start'>
										<Rating
											initialRating='3.5'
											readonly
											emptySymbol={
												<FontAwesomeIcon
													className='text-yellow-300 text-md'
													icon={faRegularStar}
												/>
											}
											fullSymbol={
												<FontAwesomeIcon
													className='text-yellow-300 text-md'
													icon={faStar}
												/>
											}
										/>
										<Link to={`/singlecourse/${courses._id}`}>
											<h1
												style={{ fontSize: "1.15rem" }}
												className=' mt-1 mb-3 text-stone-700 hover:text-red-500 duration-300 cursor-pointer'>
												{courses?.title}
											</h1>
										</Link>
										{/* Course Instructor  */}
										<div className='flex items-center'>
											<div className='w-8 h-8'>
												<img
													className='rounded-full mr-2'
													src={courses?.owner?.photo || demoUser}
													alt=''
												/>
											</div>
											<p className='text-gray-900 w-full leading-none text-sm'>
												by {courses?.owner?.name}
											</p>
										</div>
									</div>
									<hr />
									<div className='flex items-center justify-between pt-3'>
										<div className='flex text-stone-500 text-sm'>
											{/* Duration   */}
											<div className='flex items-center mr-4'>
												<FontAwesomeIcon
													icon={faClock}
													className='mr-1 font-thin text-xl text-gray-400'
												/>
												<span className='text-sm text-gray-400'>
													{courses?.courseDuration || 0} hrs
												</span>
											</div>
											{/* Students  */}
											<div className='flex items-center'>
												<FontAwesomeIcon
													icon={faUser}
													className='mr-1 font-thin text-lg text-gray-400'
												/>
												<span className='text-sm text-gray-400'>
													{courses?.totalStudents || 1024}
												</span>
											</div>
										</div>
										{/* Fee */}
										<div>
											<h6 className='text-2xl text-red-500'>
												{courses?.courseFee}
											</h6>
										</div>
									</div>
									{/* End of Bottom Bar  */}
								</div>
								{/* End of Course Details Body  */}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default ProgrammingCourses;
