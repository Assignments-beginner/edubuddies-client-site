import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUsers } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination]);

const Courses = () => {
	const courses = [
		{
			courseName: "Become product manager learn skills.",
			coursePhoto:
				"https://shivaaythemes.in/educater-html/assets/images/course-1.jpg",
			instructorName: "Allen Walker",
			instructorPhoto:
				"https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-2-100x100.jpg",
			totalStudents: "500",
			comments: "45",
			price: "100",
		},
		{
			courseName: "Fashion and luxury fashion in a changing.",
			coursePhoto:
				"https://shivaaythemes.in/educater-html/assets/images/course-2.jpg",
			instructorName: "Domaic Toreddo",
			instructorPhoto:
				"https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-8-100x100.jpg",
			totalStudents: "454",
			comments: "24",
			price: "120",
		},
		{
			courseName: "Learning to write as a professional.",
			coursePhoto:
				"https://shivaaythemes.in/educater-html/assets/images/course-3.jpg",
			instructorName: "Peter Parker",
			instructorPhoto:
				"https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-3-100x100.jpg",
			totalStudents: "574",
			comments: "24",
			price: "54",
		},
		{
			courseName: "Improving accessibility of Your markdown.",
			coursePhoto:
				"https://shivaaythemes.in/educater-html/assets/images/course-4.jpg",
			instructorName: "Steve Rogers",
			instructorPhoto:
				"https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-5-100x100.jpg",
			totalStudents: "354",
			comments: "43",
			price: "45",
		},
	];

	return (
		<div className='container mx-auto my-14  px-3 md:px-6  '>
			<h1 className='md:text-6xl text-4xl font-semibold mt-9 md:mb-9 mb-5 text-blue-700'>
				Popular Courses
			</h1>
			<div className='w-full pb-7 pagination' style={{ overflow: "hidden" }}>
				<Swiper
					loop={true}
					autoplay={{ delay: 3000 }}
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
					{courses?.map((course, key) => (
						<SwiperSlide key={key}>
							<div
								className='border rounded-lg card duration-300  bg-white'
								style={{ maxWidth: "350px" }}>
								<div className=' overflow-hidden rounded-t-lg'>
									<img
										className='w-full card-image rounded-t-lg'
										src={course?.coursePhoto}
										alt=''
									/>
								</div>
								<div className='px-4 pb-4 card-content'>
									<img
										className='w-20 rounded-full mx-auto -mt-9 border-4 border-white relative z-10'
										alt=''
										src={course?.instructorPhoto}
									/>
									<h6 className='text-base text-stone-500 mt-2 hover:underline duration-300 cursor-pointer'>
										{course?.instructorName}
									</h6>
									<h1 className='text-lg font-bold mt-1 mb-3 text-stone-700 hover:text-blue-400 duration-300 cursor-pointer'>
										{course?.courseName}
									</h1>
									<hr className='border ' />
									<div className='flex justify-between pt-2'>
										<div className='flex text-stone-500 text-sm'>
											<div className='mr-3 text-base'>
												<FontAwesomeIcon icon={faUsers} className='mr-1' />
												<span>{course?.totalStudents}</span>
											</div>
											<div className='text-base'>
												<FontAwesomeIcon icon={faComment} className='mr-1' />
												<span>{course?.comments}</span>
											</div>
										</div>
										<div>
											<h6 className='text-base font-bold text-red-500'>
												<span className='mr-1'>{course?.price}</span>$
											</h6>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Courses;
