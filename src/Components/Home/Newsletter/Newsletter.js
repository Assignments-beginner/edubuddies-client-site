import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
	return (
		<div className='container mx-auto my-14 border-2 py-11'>
			<div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center w-4/5 mx-auto'>
				<div>
					<FontAwesomeIcon
						className='text-blue-700'
						style={{ fontSize: "200px" }}
						icon={faEnvelopeOpenText}
					/>
				</div>
				<div>
					<div className='w-full'>
						<h1 className='text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-blue-700 mb-4 text-center xl:text-left md:mt-0 mt-4'>
							Subscribe
						</h1>
						<p className='text-base leading-normal text-gray-600 text-center xl:text-left'>
							Subscribe now and receive weekly newsletter with educational
							materials, new courses, interesting posts, popular books and much
							more!
						</p>
						<div className='flex items-stretch pt-5 '>
							<input
								className='bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border focus:outline-none focus:border-gray-500'
								type='email'
								placeholder='Your Email'
							/>
							<button className='w-32 rounded-l-none hover:bg-blue-600 bg-blue-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700'>
								subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
