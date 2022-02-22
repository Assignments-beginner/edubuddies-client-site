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
	const comments = [
		{
			photo:
				"https://shivaaythemes.in/educater-html/assets/images/client-1.jpg",
			name: "Fenton G.",
			role: "Student",
			comment:
				"There was a lot of good stuff in this class and very helpful in getting more acclimated to Seaborn and Matplotlib. My only issue was the class is dated and using python 2 and there were a lot of methods and attributes that are not used anymore.",
		},
		{
			photo:
				"https://shivaaythemes.in/educater-html/assets/images/client-2.jpg",
			name: "Jerry H.",
			role: "Student",
			comment:
				"As you get to the visualisation part of this course you will find it very often that the codes the lecturer used is no longer valid. I end up going to Seaborn's website for updated codes. Sometime I figured out, sometime I dont.",
		},
		{
			photo:
				"https://shivaaythemes.in/educater-html/assets/images/client-3.jpg",
			name: "Scott E.",
			role: "Student",
			comment:
				"Jose is the gold standard on udemy for anything related to Python. However, I am not giving this course a 5-star rating because I believe he should either update its content for Python 3 rather than Python 2 or discontinue offering the course",
		},
		{
			photo:
				"https://shivaaythemes.in/educater-html/assets/images/client-2.jpg",
			name: "Julie K.",
			role: "Student",
			comment:
				"SO OUTDATED. This course is so old and none of the pages he navigates towards are accurate. In addition he does no installation examples or terminal examples on a Mac. I was so frustrated I couldn't follow along! What a waste!",
		},
	];
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
					<div className='text-md my-5 text-justify text-p '>
						Coding Faculty creates high quality technology training content. We
						aim to teach technology the right way but at the same time putting
						emphasis on each of our students. We are a growing team of
						professional trainers who love our work but overall helping our
						students reach their maximum potential in their career.
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
						{comments?.map((comment, key) => (
							<SwiperSlide
								key={key}
								className='rounded-lg'
								style={{ boxShadow: "-2px 5px 12px -2px rgba(0,0,0,0.21)" }}>
								<div
									className='text-left  rounded-lg p-5'
									style={{ backgroundColor: "white" }}>
									<div className='mb-5'>{comment?.comment}</div>
									<div className='flex justify-between'>
										<div className='flex items-center'>
											<div className='border-2 p-2 border-blue-500 rounded-lg mr-4'>
												<img
													width='150px'
													height='300px'
													className=' rounded-lg'
													src={comment?.photo}
													alt=''
												/>
											</div>

											<div className='w-full'>
												<div className='text-3xl font-medium'>
													{comment?.name}
												</div>
												<div className='text-xl text-blue-500'>
													{comment?.role}
												</div>
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
