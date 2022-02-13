import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarAlt,
	faComment,
	faUser,
	faStar,
} from "@fortawesome/free-solid-svg-icons";

const SingleBlog = () => {
	const blog = {
		blogName: "The Top Technical Skills All Employees Need in 2022",
		publisher: "John Doe",
		photo: "https://shivaaythemes.in/educater-html/assets/images/blog-1.jpg",
		comments: "50",
		star: "5.00",
		date: "19/01/20",
	};

	return (
		<div className='container '>
			<div className=' mx-auto duration-300'>
				<div className=' overflow-hidden rounded-lg'>
					<img
						style={{ width: "100%" }}
						className='w-full card-image rounded-lg'
						src={blog?.photo}
						alt=''
					/>
				</div>
				<div className='px-4 py-2 card-content'>
					<div className='grid grid-cols-12 pt-2 text-left gap-3'>
						<div className='md:col-span-3 col-span-6 text-stone-500 text-md'>
							<div>
								<FontAwesomeIcon className='mr-1 text-blue-500' icon={faUser} />
								<span>{blog?.publisher}</span>
							</div>
						</div>
						<div className='md:col-span-3 col-span-6 text-stone-500 text-md'>
							<div>
								<FontAwesomeIcon
									className='mr-1 text-blue-500'
									icon={faCalendarAlt}
								/>
								<span>{blog?.date}</span>
							</div>
						</div>
						<div className='md:col-span-3 col-span-6 text-stone-500 text-md'>
							<div>
								<FontAwesomeIcon
									className='mr-1 text-blue-500'
									icon={faComment}
								/>
								<span>{blog?.comments} Comments</span>
							</div>
						</div>
						<div className='md:col-span-3 col-span-6 text-stone-500 text-md'>
							<div>
								<FontAwesomeIcon className='mr-1 text-blue-500' icon={faStar} />
								<span>
									{blog?.star} ({blog?.comments})
								</span>
							</div>
						</div>
					</div>
					<h1 className='text-2xl font-bold mt-7  text-stone-700 cursor-pointer text-left'>
						{blog?.blogName}
					</h1>
					<h2 className='text-md text-left my-3'>
						Donec sit amet eros non massa vehicula porta. Nulla facilisi.
						Suspendisse ac aliquet nisi, lacinia mattis magna. Praesent quis
						consectetur neque, sed viverra neque. Mauris ultrices massa purus,
						fermentum ornare magna gravida vitae. Nulla sit amet est a enim
						porta gravida. Integer consectetur diam vitae imperdiet iaculis. In
						faucibus, sem sit amet tincidunt egestas, magna ligula interdum leo,
						quis lacinia mauris odio nec lectus.
						<br />
						<br />
						Donec sit amet eros non massa vehicula porta. Nulla facilisi.
						Suspendisse ac aliquet nisi, lacinia mattis magna. Praesent quis
						consectetur neque, sed viverra neque. Mauris ultrices massa purus,
						fermentum ornare magna gravida vitae. Nulla sit amet est a enim
						porta gravida. Integer consectetur diam vitae imperdiet iaculis. In
						faucibus, sem sit amet tincidunt egestas, magna ligula interdum leo,
						quis lacinia mauris odio nec lectus.
					</h2>
				</div>
			</div>
		</div>
	);
};

export default SingleBlog;
