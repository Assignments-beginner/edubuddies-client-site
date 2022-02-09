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
			<h1 className='text-4xl font-semibold mt-9 mb-4'>POPULAR COURSES</h1>
			<Swiper
				loop={true}
				autoplay={{ delay: 3000 }}
				grabCursor={true}
				slidesPerView={3}
				spaceBetween={30}
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
							className='border-2 rounded-lg card mx-auto'
							style={{ maxWidth: "350px" }}>
							<img
								className='w-full card-image'
								src='https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/06/course-6-400x300.jpg'
								alt=''
							/>
							<div className='px-4 pb-4 card-content'>
								<img
									className='w-20 rounded-full mx-auto -mt-9'
									alt=''
									src='https://eduma.thimpress.com/demo-1/wp-content/uploads/learn-press-profile/7/9c081444f942cc8fe0ddf55631b584e2.jpg'
								/>
								<h6 className='text-stone-500 mt-2 hover:underline duration-300 cursor-pointer'>
									John Doe
								</h6>
								<h1 className='font-bold my-3 text-stone-700 hover:text-yellow-400 duration-300 cursor-pointer'>
									Learn Complete Web Development
								</h1>
								<hr />
								<div className='flex justify-between pt-2'>
									<div className='flex text-stone-500 text-sm'>
										<div className='mr-4 '>
											<FontAwesomeIcon icon={faUsers} /> <span>50</span>
										</div>
										<div>
											<FontAwesomeIcon icon={faComment} /> <span>50</span>
										</div>
									</div>
									<div>
										<h6 className='text-sm font-bold text-red-500'>500$</h6>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Courses;
