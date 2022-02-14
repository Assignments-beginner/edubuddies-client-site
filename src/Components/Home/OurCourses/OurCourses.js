import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./OurCourses.css";

const OurCourses = () => {
	return (
		<div className='container mx-auto my-24  px-4 md:px-11  '>
			<h1 className='md:text-5xl text-4xl font-semibold mt-9 md:mb-9 mb-5 text-blue-700'>
				Explore Popular Courses
			</h1>
			<div className='w-full'>
				<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto md:gap-5 gap-4'>
					{Array.from({ length: 6 }).map((_, idx) => (
						<div className='flex border-2 p-5 align-middle justify-center OurCourses hover:cursor-pointer duration-300 rounded-lg  bg-white'>
							<div className='mr-3 '>
								<FontAwesomeIcon
									className='text-blue-500 icon'
									style={{ fontSize: "60px" }}
									icon={faDatabase}
								/>
							</div>
							<div className=' text-left'>
								<div className='md:text-2xl text-xl font-bold mb-1'>
									Learn Data Science
								</div>
								<div className='text-base'>Data is Everything</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OurCourses;
