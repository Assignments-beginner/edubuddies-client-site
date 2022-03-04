import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faComment } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

const AllBlogsPage = () => {
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
		<div className='container mx-auto py-4 md:py-11  '>
			<h1 className='text-center text-3xl uppercase font-semibold md:mb-9 mb-5 text-red-500'>
				Latest Blog & News
			</h1>
			<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto md:gap-5 gap-4'>
				{blogs?.map((blog, key) => (
					<Link key={key} to={`/singleblog/${blog?._id}`}>
						<div
							className='border  rounded-lg card mx-auto duration-300  bg-white'
							style={{ maxWidth: "400px" }}>
							<div className='overflow-hidden'>
								<img
									className='w-full card-image rounded-t-lg'
									src={blog?.photo}
									alt=''
								/>
							</div>
							<div className='px-4 pb-4 card-content'>
								<h1 className='text-lg font-bold my-5 text-stone-700 hover:text-red-500 duration-300 cursor-pointer text-left'>
									{blog?.blogName}
								</h1>
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
				))}
			</div>
		</div>
	);
};

export default AllBlogsPage;
