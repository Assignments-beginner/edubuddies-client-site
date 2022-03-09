import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarAlt,
	faComment,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "dompurify";

const SingleBlog = ({ blog }) => {
	const createMarkup = (html) => {
		return {
			__html: DOMPurify.sanitize(html),
		};
	};
	return (
		<div className='container mb-9'>
			<div className=' mx-auto duration-300'>
				<div className=' overflow-hidden rounded-lg'>
					<img
						style={{ width: "100%" }}
						className='w-full card-image rounded-lg'
						src={blog?.photo}
						alt=''
					/>
				</div>
				<div className=' py-2 card-content'>
					<div className='border border-black-100 my-2'></div>
					<div className='flex justify-around pt-2 text-left gap-3'>
						<div className=' text-stone-500 text-lg'>
							<div>
								<FontAwesomeIcon className='mr-2 text-red-500' icon={faUser} />
								<span>{blog?.publisher}</span>
							</div>
						</div>
						<div className=' text-stone-500 text-lg '>
							<div>
								<FontAwesomeIcon
									className='mr-2 text-red-500'
									icon={faCalendarAlt}
								/>
								<span>
									{new Date(blog?.date).toLocaleString("en-GB").split(",")[0] ||
										"N/A"}
								</span>
							</div>
						</div>
						<div className=' text-stone-500 text-lg'>
							<div>
								<FontAwesomeIcon
									className='mr-2 text-red-500'
									icon={faComment}
								/>
								<span>{blog?.reviews?.length || 0} Comments</span>
							</div>
						</div>
					</div>
					<div className='border border-black-100 my-2'></div>
					<h1 className='md:text-4xl text-3xl  font-bold md:my-7 my-4  text-stone-700 cursor-pointer text-left'>
						{blog?.blogName}
					</h1>
					<div className='text-md text-left my-3'>
						<div
							className='preview'
							dangerouslySetInnerHTML={createMarkup(blog?.blogDetails)}></div>
					</div>
				</div>
			</div>
			<div className='border border-black-100 my-2'></div>
		</div>
	);
};

export default SingleBlog;
