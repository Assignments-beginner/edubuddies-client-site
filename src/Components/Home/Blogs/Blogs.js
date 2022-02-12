import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faComment } from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Blogs.css";

SwiperCore.use([Autoplay, Pagination]);

const Blogs = () => {
	const blogs = [
		{
			blogName: "The Top Technical Skills All Employees Need in 2022",
			photo: "https://shivaaythemes.in/educater-html/assets/images/blog-1.jpg",
			comments: "50",
			date: "19/01/20",
		},
		{
			blogName: "The Tactical Skills All Employees Need in 2022",
			photo: "https://shivaaythemes.in/educater-html/assets/images/blog-2.jpg",
			comments: "70",
			date: "02/12/21",
		},
		{
			blogName: "The Great Reevaluation: Unlearning Work Myths About Wellness",
			photo: "https://shivaaythemes.in/educater-html/assets/images/blog-3.jpg",
			comments: "40",
			date: "05/07/21",
		},
		{
			blogName: "The 6 Best Cybersecurity Certifications to Launch Your Career",
			photo: "https://shivaaythemes.in/educater-html/assets/images/blog-2.jpg",
			comments: "100",
			date: "10/02/22",
		},
	];
	return (
		<div className='container mx-auto my-14  px-3 md:px-6  '>
			<h1 className='md:text-6xl text-4xl font-semibold mt-9 md:mb-9 mb-5 text-blue-700'>
				Latest Blog & News
			</h1>
			<div className='w-full pagination' style={{ overflow: "hidden" }}>
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
							slidesPerView: 2,
						},
						900: {
							slidesPerView: 2,
						},
						1020: {
							slidesPerView: 3,
						},
					}}
					className='mySwiper'>
					{blogs?.map((blog, key) => (
						<SwiperSlide key={key}>
							<div
								className='border  rounded-lg card mx-auto duration-300  bg-white'
								style={{ maxWidth: "400px" }}>
								<div className=' overflow-hidden'>
									<img
										className='w-full card-image rounded-t-lg'
										src={blog?.photo}
										alt=''
									/>
								</div>
								<div className='px-4 pb-4 card-content'>
									<h1 className='text-lg font-bold my-5 text-stone-700 hover:text-blue-400 duration-300 cursor-pointer text-left'>
										{blog?.blogName}
									</h1>
									<hr className='border' />
									<div className='flex justify-evenly pt-2 '>
										<div className='flex text-stone-500 text-sm'>
											<div className='text-base'>
												<FontAwesomeIcon
													className='mr-1 text-blue-500'
													icon={faCalendarAlt}
												/>
												<span>{blog?.date}</span>
											</div>
										</div>
										<div className='border-l-2 '></div>
										<div className='flex text-stone-500 text-sm'>
											<div className='text-base'>
												<FontAwesomeIcon
													className='mr-1 text-blue-500'
													icon={faComment}
												/>
												<span>{blog?.comments} Comments</span>
											</div>
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

export default Blogs;
