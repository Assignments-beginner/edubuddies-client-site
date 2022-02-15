import React from "react";

const AddReview = () => {
	return (
		<div className='container mx-auto my-24 '>
			<div className='text-2xl font-black text-red-600 md:text-left text-center'>
				WRITE COMMENT
			</div>
			<h1 className='md:text-5xl text-4xl font-semibold mt-3 mb-7 text-gray-800  md:text-left text-center'>
				Leave A Reply
			</h1>
			<div className='mx-auto grid grid-cols-12 gap-5'>
				<input
					className='md:col-span-6 col-span-12 bg-gray-100 rounded-lg  text-base leading-none text-gray-800 p-5 border border-black focus:outline-none focus:border-gray-500'
					type='text'
					placeholder='Your Name'
				/>
				<input
					className='md:col-span-6 col-span-12 bg-gray-100 rounded-lg  text-base leading-none text-gray-800 p-5 border border-black  focus:outline-none focus:border-gray-500'
					type='email'
					placeholder='Your Email'
				/>
				<textarea
					className='md:col-span-12 col-span-12 bg-gray-100 rounded-lg  text-base leading-none text-gray-800 p-5 border border-black  focus:outline-none focus:border-gray-500'
					type='text'
					multiline
					rows='7'
					placeholder='Your Review'
				/>
				<button className='md:col-span-4 col-span-6 rounded-lg   hover:bg-red-600 bg-red-600 text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'>
					subscribe
				</button>
			</div>
		</div>
	);
};

export default AddReview;
