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
	return (
		<div className='container mx-auto my-14'>
			<h1 className='text-4xl font-semibold mt-9 mb-4 text-blue-500'>
				POPULAR COURSES
			</h1>
			<div
				className='px-6 w-full py-7 pagination'
				style={{ overflow: "hidden" }}>
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
						1020: {
							slidesPerView: 5,
						},
					}}
					className='mySwiper'>
					{Array.from({ length: 5 }).map((_, idx) => (
						<SwiperSlide>
							<div
								className='border border-blue-500 rounded-lg card duration-300'
								style={{ maxWidth: "350px" }}>
								<div className=' overflow-hidden'>
									<img
										className='w-full card-image rounded-t-lg'
										src='https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/06/course-6-400x300.jpg'
										alt=''
									/>
								</div>
								<div className='px-4 pb-4 card-content'>
									<img
										className='w-20 rounded-full mx-auto -mt-9 border-4 border-white relative z-10'
										alt=''
										src='https://eduma.thimpress.com/demo-1/wp-content/uploads/learn-press-profile/7/9c081444f942cc8fe0ddf55631b584e2.jpg'
									/>
									<h6 className='text-base text-stone-500 mt-2 hover:underline duration-300 cursor-pointer'>
										John Doe
									</h6>
									<h1 className='text-lg font-bold mt-1 mb-3 text-stone-700 hover:text-blue-400 duration-300 cursor-pointer'>
										Learn Complete Web Development
									</h1>
									<hr className='border border-blue-500' />
									<div className='flex justify-between pt-2'>
										<div className='flex text-stone-500 text-sm'>
											<div className='mr-3 text-base'>
												<FontAwesomeIcon icon={faUsers} /> <span>50</span>
											</div>
											<div className='text-base'>
												<FontAwesomeIcon icon={faComment} /> <span>50</span>
											</div>
										</div>
										<div>
											<h6 className='text-base font-bold text-red-500'>500$</h6>
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
