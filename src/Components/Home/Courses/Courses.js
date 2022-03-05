import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUsers } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addCourse } from "../../../Redux/edubuddySlice";
import demoUser from "../../../Images/user-demo.png";

SwiperCore.use([Autoplay, Pagination]);

const Courses = () => {
	const courses = useSelector((state) => state?.edu?.courses);
	const dispatch = useDispatch();

	useEffect(() => {
		const url = "https://fierce-caverns-90976.herokuapp.com/courses";
		axios.get(url).then((res) => {
			dispatch(addCourse(res?.data));
		});
	}, [dispatch]);
	console.log(courses);

	return (
		<div className='container mx-auto px-4 md:px-11  '>
			<h1 className='text-center text-3xl uppercase font-semibold mt-14 md:mb-9 mb-5 text-red-500'>
				Popular Courses
			</h1>
			<div className='w-full pagination' style={{ overflow: "hidden" }}>
				<Swiper
					loop={true}
					autoplay={{ delay: 3000 }}
					grabCursor={true}
					slidesPerView={3}
					spaceBetween={30}
					modules={[Pagination]}
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
					{courses?.map((course, key) => (
						<SwiperSlide key={key}>
							<Link to={`/singlecourse/${course._id}`}>
								<div className='border rounded-lg card duration-300  bg-white'>
									<div className=' overflow-hidden rounded-t-lg'>
										<img
											style={{ height: "150px" }}
											className='w-full card-image rounded-t-lg'
											src={course?.image}
											alt=''
										/>
									</div>
									<div className='px-4 pb-4 card-content'>
										<img
											className='w-20 rounded-full mx-auto -mt-9 border-4 border-white relative z-10'
											alt=''
											src={course?.owner?.photo || demoUser}
										/>
										<h6 className='text-base text-stone-500 mt-2 hover:underline duration-300 cursor-pointer'>
											{course?.owner?.name}
										</h6>
										<h1 className='text-lg font-bold mt-1 mb-3 text-stone-700 hover:text-red-500 duration-300 cursor-pointer'>
											{course?.title}
										</h1>
										<hr className='border ' />
										<div className='flex justify-between pt-2'>
											<div className='flex text-stone-500 text-sm'>
												<div className='mr-3 text-base'>
													<FontAwesomeIcon icon={faUsers} className='mr-2 ' />
													<span>{course?.totalStudents || 0}</span>
												</div>
												<div className='text-base'>
													<FontAwesomeIcon icon={faComment} className='mr-2 ' />
													<span>{course?.comments || 0}</span>
												</div>
											</div>
											<div>
												<h6 className='text-base font-bold text-red-500'>
													<span className='mr-1'>{course?.courseFee}</span>$
												</h6>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Courses;
