import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { EffectCube, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.css";

SwiperCore.use([Autoplay, Pagination]);

const Testimonial = () => {
	return (
		<div className='container mx-auto my-14'>
			<div
				className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'
				style={{ alignItems: "center" }}>
				<div className='text-left px-6 w-full'>
					<div className='text-2xl font-black my-5 text-blue-700'>
						Testimonial
					</div>
					<div className='text-5xl font-black my-5 '>
						What Our Client Says About Us
					</div>
					<div className='text-xl my-5 text-justify text-p '>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
						laudantium vel quas nihil ad non hic doloribus esse. Delectus minima
						architecto recusandae modi accusamus aspernatur numquam odio
						expedita minus illo.
					</div>
				</div>
				<div
					className='px-6 w-full py-7 pagination'
					style={{ overflow: "hidden" }}>
					<Swiper
						loop={true}
						grabCursor={true}
						effect={"cube"}
						cubeEffect={{
							shadow: false,
							slideShadows: false,
							shadowOffset: 20,
							shadowScale: 0.94,
						}}
						modules={[EffectCube, Pagination]}
						autoplay={{ delay: 3000 }}
						pagination={{
							clickable: true,
						}}
						className='mySwiper'>
						{Array.from({ length: 4 }).map((_, idx) => (
							<SwiperSlide
								className='rounded-lg'
								style={{ boxShadow: "-2px 5px 12px -2px rgba(0,0,0,0.21)" }}>
								<div
									className='text-left  rounded-lg p-5'
									style={{ backgroundColor: "white" }}>
									<div className='mb-5'>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Culpa laudantium vel quas nihil ad non hic doloribus esse.
										Delectus minima architecto recusandae modi accusamus
										aspernatur numquam odio expedita minus illo.
									</div>
									<div className='flex justify-between'>
										<div className='flex items-center'>
											<div className='border-2 p-2 border-blue-500 rounded-lg mr-4'>
												<img
													width='150px'
													height='300px'
													className=' rounded-lg'
													src='https://shivaaythemes.in/educater-html/assets/images/client-3.jpg'
													alt=''
												/>
											</div>

											<div className='w-full'>
												<div className='text-3xl font-medium'>John Doe</div>
												<div className='text-xl text-blue-500'>Student</div>
											</div>
										</div>
										<FontAwesomeIcon
											className='text-9xl text-right text-blue-500 opacity-50 faQuoteRight'
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
