import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const RecentBlogs = () => {
	const blogs = [
		{
			blogName: "The Top Technical Skills All Employees Need in 2022",
			photo: "https://shivaaythemes.in/educater-html/assets/images/blog-1.jpg",
			comments: "50",
			date: "19/01/20",
		},
		{
			blogName: "The Tactical Skills All Employees Need in 2022",
			photo: "https://shivaaythemes.in/educater-html/assets/images/blog-2.jpg",
			comments: "70",
			date: "02/12/21",
		},
		{
			blogName: "The Great Reevaluation: Unlearning Work Myths About Wellness",
			photo: "https://shivaaythemes.in/educater-html/assets/images/blog-3.jpg",
			comments: "40",
			date: "05/07/21",
		},
		{
			blogName: "The 6 Best Cybersecurity Certifications to Launch Your Career",
			photo: "https://shivaaythemes.in/educater-html/assets/images/blog-2.jpg",
			comments: "100",
			date: "10/02/22",
		},
	];
	return (
		<div
			className='container '
			style={{
				position: "sticky",
				top: 95,
			}}>
			<h1 className='md:text-3xl text-2xl font-semibold pb-4 text-blue-700'>
				Recent Blogs
			</h1>
			<div className='w-full pagination'>
				{blogs?.map((blog, key) => (
					<div
						key={key}
						className='grid grid-cols-5 gap-4 mx-auto my-4 align-center '>
						<div className='col-span-2'>
							<img
								style={{ maxWidth: "130px" }}
								className='w-full card-image rounded-lg'
								src={blog?.photo}
								alt=''
							/>
						</div>
						<div className='col-span-3'>
							<h1 className='text-md font-bold text-stone-700 hover:text-blue-400 duration-300 cursor-pointer text-left'>
								{blog?.blogName}
							</h1>
							<div>
								<div className=' text-stone-500 text-sm mt-2'>
									<div className='text-left'>
										<FontAwesomeIcon
											className='mr-1 text-blue-500'
											icon={faCalendarAlt}
										/>
										<span>{blog?.date}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentBlogs;
