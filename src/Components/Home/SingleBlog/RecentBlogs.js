import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
	const [blogs, setBlogs] = React.useState();
	React.useEffect(() => {
		axios
			.get(`https://fierce-caverns-90976.herokuapp.com/blogs`)
			.then((res) => {
				setBlogs(res.data.reverse().slice(0, 4));
			});
	}, []);
	return (
		<div
			className='container '
			style={{
				position: "sticky",
				top: 95,
			}}>
			<div className='border border-black-100 my-2 block md:hidden'></div>
			<h1 className='md:text-3xl text-2xl font-semibold pb-2 text-red-500'>
				Recent Blogs
			</h1>
			<div className='w-full pagination'>
				{blogs?.map((blog, key) => (
					<Link key={key} to={`/singleblog/${blog?._id}`}>
						<div className='grid grid-cols-5 gap-4 mx-auto my-4 align-center '>
							<div className='col-span-2'>
								<img
									style={{ maxWidth: "130px" }}
									className='w-full card-image rounded-lg border border-red-500'
									src={blog?.photo}
									alt=''
								/>
							</div>
							<div className='col-span-3'>
								<h1 className='text-md font-bold text-stone-700 hover:text-red-500 duration-300 cursor-pointer text-left'>
									{blog?.blogName}
								</h1>
								<div>
									<div className=' text-stone-500 text-sm mt-2'>
										<div className='text-left'>
											<FontAwesomeIcon
												className='mr-1 text-red-500'
												icon={faCalendarAlt}
											/>
											<span>
												{new Date(blog?.date)
													.toLocaleString("en-GB")
													.split(",")[0] || "N/A"}
											</span>
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

export default RecentBlogs;
