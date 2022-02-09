import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faComment } from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {
	return (
		<div className='container mx-auto my-14'>
			<div className='text-5xl font-black my-5 text-blue-700'>
				Latest Blog & News
			</div>
			<div
				className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'
				style={{ alignItems: "center" }}>
				{Array.from({ length: 3 }).map((_, idx) => (
					<div
						className='border border-blue-500 rounded-lg card mx-auto'
						style={{ maxWidth: "400px" }}>
						<img
							className='w-full card-image rounded-t-lg '
							src='https://shivaaythemes.in/educater-html/assets/images/blog-2.jpg'
							alt=''
						/>
						<div className='px-4 pb-4 card-content'>
							<h1 className='text-lg font-bold my-5 text-stone-700 hover:text-blue-400 duration-300 cursor-pointer text-left'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Eligendi, quae.
							</h1>
							<hr className='border border-blue-500' />
							<div className='flex justify-evenly pt-2 '>
								<div className='flex text-stone-500 text-sm'>
									<div className='text-base'>
										<FontAwesomeIcon
											className='mr-1 text-blue-500'
											icon={faCalendarAlt}
										/>
										<span>{new Date().toLocaleString()}</span>
									</div>
								</div>
								<div className='border-l-2 border-blue-500'></div>
								<div className='flex text-stone-500 text-sm'>
									<div className='text-base'>
										<FontAwesomeIcon
											className='mr-1 text-blue-500'
											icon={faComment}
										/>
										<span>50 Comments</span>
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

export default Blogs;
