import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import "./Newsletter.css";

const Newsletter = () => {
	return (
		<div className='container mx-auto my-14'>
			<div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center w-3/4 mx-auto '>
				<div>
					<FontAwesomeIcon
						className='text-9xl text-blue-700'
						icon={faEnvelopeOpenText}
					/>
				</div>
				<div>
					<div class='w-full'>
						<h1 class='text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-blue-700 mb-4 text-center xl:text-left md:mt-0 mt-4'>
							Subscribe
						</h1>
						<p class='text-base leading-normal text-gray-600 text-center xl:text-left'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
							impedit excepturi enim quasi ut ipsam!
						</p>
						<div class='flex items-stretch pt-5'>
							<input
								class='bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500'
								type='email'
								placeholder='Your Email'
							/>
							<button class='w-32 rounded-l-none hover:bg-blue-600 bg-blue-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700'>
								subscribe
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* 			<div class='p-6 md:w-1/2 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row'>
				<div class='xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center'>
					<FontAwesomeIcon
						className='text-9xl text-right text-blue-500'
						icon={faEnvelopeOpenText}
					/>
				</div>
				<div class='w-full xl:w-1/2 xl:py-28'>
					<h1 class='text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4'>
						Subscribe
					</h1>
					<p class='text-base leading-normal text-gray-600 text-center xl:text-left'>
						Whether article spirits new her covered hastily sitting her. Money
						witty books nor son add.
					</p>
					<div class='flex items-stretch mt-12'>
						<input
							class='bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500'
							type='email'
							placeholder='Your Email'
						/>
						<button class='w-32 rounded-l-none hover:bg-blue-600 bg-blue-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700'>
							subscribe
						</button>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Newsletter;
