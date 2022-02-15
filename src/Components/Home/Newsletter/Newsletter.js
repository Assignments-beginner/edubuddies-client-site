import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
	return (
		<div className='container mx-auto my-24  px-4 md:px-11  '>
			<div className='md:w-2/4 w-full text-center mx-auto'>
				<div>
					<FontAwesomeIcon
						className='text-red-500 my-0 md:my-3'
						style={{ fontSize: "100px" }}
						icon={faEnvelopeOpenText}
					/>
				</div>
				<h1 className='text-3xl md:text-4xl xl:text-5xl font-bold leading-10 text-red-500 my-2 md:mb-4'>
					Subscribe
				</h1>
				<p className='leading-normal text-gray-600'>
					Subscribe now and receive weekly newsletter with educational
					materials, new courses, interesting posts, popular books and much
					more!
				</p>
				<div className='flex items-stretch pt-5'>
					<input
						className='bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-900 p-5 w-4/5 border focus:outline-none border-red-300 focus:border-red-500'
						type='email'
						placeholder='Your Email'
					/>
					<button className='w-32 rounded-l-none hover:bg-red-700 bg-red-500 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
						subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
