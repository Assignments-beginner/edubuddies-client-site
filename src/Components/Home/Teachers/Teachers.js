import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination]);

const Teachers = () => {
	const teachers = [
		{
			name: "Kelly Franklin",
			photo:
				"https://shivaaythemes.in/educater-html/assets/images/instructor-1.jpg",
			role: "Instructor",
			fb: "",
			twitter: "",
			linkedin: "",
		},
		{
			name: "Indigo Voilet",
			photo:
				"https://shivaaythemes.in/educater-html/assets/images/instructor-2.jpg",
			role: "Instructor",
			fb: "",
			twitter: "",
			linkedin: "",
		},
		{
			name: "Jason Response",
			photo:
				"https://shivaaythemes.in/educater-html/assets/images/instructor-3.jpg",
			role: "Instructor",
			fb: "",
			twitter: "",
			linkedin: "",
		},
	];
	return (
		<div className='container mx-auto my-14'>
			<h1 className='text-4xl font-semibold mt-9 mb-4 text-blue-500'>
				Our Expert Instructor
			</h1>
			<div
				className='px-6 w-3/5 py-7 pagination mx-auto'
				style={{ overflow: "hidden" }}>
				<Swiper
					loop={true}
					autoplay={{ delay: 4000 }}
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
					}}
					className='mySwiper'>
					{teachers?.map((teacher, key) => (
						<SwiperSlide key={key}>
							<div
								className='border rounded-lg card duration-300'
								style={{ maxWidth: "270px" }}>
								<div className='flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg card'>
									<div className='inline-flex shadow-lg border border-gray-200 rounded overflow-hidden w-full'>
										<img
											src={teacher?.photo}
											alt=''
											className='h-full w-full card-image rounded'
										/>
									</div>

									<h2 className='mt-4 font-bold text-xl hover:text-blue-400 duration-300 '>
										{teacher?.name}
									</h2>
									<h6 className='mt-2 text-sm font-medium'>{teacher?.role}</h6>
									<ul className='flex flex-row mt-4 space-x-2'>
										<li>
											<a
												href={teacher?.fb}
												className='flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800 hover:text-white hover:bg-blue-800 hover:border-blue-800  duration-300'>
												<FontAwesomeIcon icon={faFacebookF} />
											</a>
										</li>
										<li>
											<a
												href={teacher?.twitter}
												className='flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800 hover:text-white hover:bg-sky-500 hover:border-sky-500  duration-300'>
												<FontAwesomeIcon icon={faTwitter} />
											</a>
										</li>
										<li>
											<a
												href={teacher?.linkedin}
												className='flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800 hover:text-white hover:bg-blue-600 hover:border-blue-600  duration-300'>
												<FontAwesomeIcon icon={faLinkedinIn} />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Teachers;
