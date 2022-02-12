import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./OurCourses.css";

const OurCourses = () => {
	return (
		<div className='container mx-auto my-14 py-11'>
			<h1 className='text-4xl font-semibold mt-9 mb-4 text-blue-700'>
				Explore Popular Courses
			</h1>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-4/5 mx-auto gap-4'>
				{Array.from({ length: 6 }).map((_, idx) => (
					<div className='flex border-2 p-5 align-middle justify-center OurCourses hover:cursor-pointer duration-300 rounded-md'>
						<div className='mr-3 '>
							<FontAwesomeIcon
								className='text-blue-500 icon'
								style={{ fontSize: "60px" }}
								icon={faDatabase}
							/>
						</div>
						<div className=' text-left'>
							<div className='text-2xl font-bold mb-1'>Learn Data Science</div>
							<div className='text-base'>Data is Everything</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurCourses;
