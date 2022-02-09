import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination]);

const Testimonial = () => {
	return (
		<div className='container mx-auto my-2'>
			<div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
				<div className='text-left'>
					<div className='text-2xl font-black my-5 text-blue-700'>
						Testimonial
					</div>
					<div className='text-5xl font-black  my-5'>
						What Our Client Says About Us
					</div>
					<div className='text-xl  my-5'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
						laudantium vel quas nihil ad non hic doloribus esse. Delectus minima
						architecto recusandae modi accusamus aspernatur numquam odio
						expedita minus illo.
					</div>
				</div>
				<div>
					<Swiper
						loop={true}
						autoplay={{ delay: 2000 }}
						grabCursor={true}
						pagination={{
							clickable: true,
						}}
						className='mySwiper'>
						{Array.from({ length: 4 }).map((_, idx) => (
							<SwiperSlide>
								<div
									className='text-left border-2 rounded-lg p-5'
									style={{ maxWidth: "500px" }}>
									<div className='mb-5'>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Culpa laudantium vel quas nihil ad non hic doloribus esse.
										Delectus minima architecto recusandae modi accusamus
										aspernatur numquam odio expedita minus illo.
									</div>
									<div className='flex justify-between'>
										<div className='flex items-center'>
											<img
												width='200px'
												height='350px'
												className='border-2 p-3 border-orange-500 rounded-lg mr-3'
												src='https://shivaaythemes.in/educater-html/assets/images/client-3.jpg'
												alt=''
											/>
											<div className='w-full'>
												<div className='text-3xl font-medium'>John Doe</div>
												<div className='text-xl text-orange-500'>Student</div>
											</div>
										</div>
										<FontAwesomeIcon
											className='text-9xl text-right text-orange-500 opacity-50'
											icon={faQuoteRight}
										/>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
