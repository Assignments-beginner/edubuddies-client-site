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
import axios from "axios";

SwiperCore.use([Autoplay, Pagination]);

const Testimonial = () => {
	const [files, setFiles] = React.useState();
	React.useEffect(() => {
		axios
			.get(`https://fierce-caverns-90976.herokuapp.com/courses`)
			.then((res) => {
				setFiles(res.data);
			});
	}, []);
	const findReviewObject = files?.filter(
		(course) => course?.reviews?.length > 0,
	);
	const separateAllReview = findReviewObject?.map((d) => d?.reviews);
	const addAllInarray = separateAllReview?.flat();

	return (
		<div className='container mx-auto my-32 px-4 md:px-11'>
			<div className=' w-full'>
				<div
					className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6'
					style={{ alignItems: "center" }}>
					<div className='text-left w-full'>
						<div className='md:text-4xl text-3xl font-semibold  text-red-500 uppercase'>
							Testimonial
						</div>
						<h1 className='md:text-5xl text-4xl font-black md:mb-7 mb-5 mt-3 text-gray-800'>
							What Our Students Says About Us
						</h1>
						<div className='text-md my-5 text-justify text-p '>
							Coding Faculty creates high quality technology training content.
							We aim to teach technology the right way but at the same time
							putting emphasis on each of our students. We are a growing team of
							professional trainers who love our work but overall helping our
							students reach their maximum potential in their career.
						</div>
					</div>
					<div
						className='w-full md:px-4 px-0 pb-7 pagination'
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
							{addAllInarray?.map((comment, key) => (
								<SwiperSlide
									key={key}
									className='rounded-lg bg-white'
									style={{ boxShadow: "-2px 5px 12px -2px rgba(0,0,0,0.21)" }}>
									<div
										className='text-left  rounded-lg p-5'
										style={{ backgroundColor: "white" }}>
										<div className='mb-5'>
											<p className='text-sm'>{comment?.review}</p>
										</div>
										<div className='flex justify-between'>
											<div className='flex items-center'>
												<div className='border-2 p-2 border-red-500 rounded-lg mr-4'>
													<img
														width='150px'
														height='300px'
														className=' rounded-lg'
														src={comment?.photo}
														alt=''
													/>
												</div>

												<div className='w-full'>
													<div className='text-xl font-bold text-gray-800'>
														{comment?.reviewer}
													</div>
													<div className='text-md text-red-500'>
														{comment?.role || "Student"}
													</div>
												</div>
											</div>
											<FontAwesomeIcon
												className='text-9xl text-right text-red-500 opacity-50 faQuoteRight'
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
		</div>
	);
};

export default Testimonial;
