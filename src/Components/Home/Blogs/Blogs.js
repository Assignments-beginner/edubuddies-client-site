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
import axios from "axios";
import { Link } from "react-router-dom";
import publisherImg from "../../../Images/user-demo.png";

SwiperCore.use([Autoplay, Pagination]);

const Blogs = () => {
	const [blogs, setBlogs] = React.useState();
	React.useEffect(() => {
		axios
			.get(`https://fierce-caverns-90976.herokuapp.com/blogs`)
			.then((res) => {
				setBlogs(res.data);
			});
	}, []);
	console.log(blogs);

	return (
		<div className='container mx-auto my-24  px-4 md:px-11'>
			<h1 className='text-center text-3xl uppercase font-semibold mt-9 md:mb-9 mb-5 text-red-500'>
				Latest Blog & News
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
							<Link key={key} to={`/singleblog/${blog?._id}`}>
								<div className='shadow-lg border rounded-lg mx-auto duration-300 bg-white'>
									<div className='overflow-hidden'>
										<img
											className='w-full h-56 rounded-t-lg'
											src={blog?.photo}
											alt=''
										/>
									</div>
									<div className='px-4 pb-4 card-content'>
										<h1 className='text-lg font-bold my-5 text-stone-700 hover:text-red-500 duration-300 cursor-pointer text-left'>
											{blog?.blogName}
										</h1>
										<div className='flex items-center mb-6'>
											<img
												className='w-8 h-8 rounded-full mr-2'
												src={publisherImg}
												alt=''
											/>
											<p className='text-gray-900 leading-none text-sm'>
												<span className='text-gray-400'>By</span>{" "}
												<strong>{blog?.publisher}</strong>
											</p>
										</div>
										<hr className='border' />
										<div className='flex justify-evenly pt-2 '>
											<div className='flex text-stone-500 text-sm'>
												<div className='text-base'>
													<FontAwesomeIcon
														className='mr-2 text-red-500'
														icon={faCalendarAlt}
													/>
													<span>
														{new Date(blog?.date)
															.toLocaleString("en-GB")
															.split(",")[0] || "N/A"}
													</span>
												</div>
											</div>
											<div className='border-l-2 '></div>
											<div className='flex text-stone-500 text-sm'>
												<div className='text-base'>
													<FontAwesomeIcon
														className='mr-2 text-red-500'
														icon={faComment}
													/>
													<span>{blog?.reviews?.length || 0} Comments</span>
												</div>
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

export default Blogs;
