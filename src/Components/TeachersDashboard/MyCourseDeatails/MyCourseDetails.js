import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyCourseDetails = () => {
	const { courseId } = useParams();
	const [courseDetails, setcourseDetails] = useState({});
	useEffect(() => {
		fetch(
			`https://fierce-caverns-90976.herokuapp.com/CourseDetails/${courseId}`,
		)
			.then((res) => res.json())
			.then((data) => setcourseDetails(data));
	}, [courseId]);

	return (
		<div>
			<h1 className='text-3xl text-red-600 mt-4 mb-10 font-bold'>
				Details Of Your Course
			</h1>
			<div className='lg:w-2/5 md:w-full sm:w-full mx-auto border rounded-md shadow-xl'>
				<img
					className='mx-auto rounded-md'
					src={courseDetails?.image}
					alt='Course Bannar'
				/>
				<div className='text-left px-5 pb-10 border-t-2 border-red-500'>
					<h2 className='text-2xl mt-4 font-bold'>
						{courseDetails?.title} By{" "}
						<span className='text-red-500'>{courseDetails?.owner?.name}</span>
					</h2>
					<h2 className='text-xl mt-4'>
						<span className='font-bold'>Email: </span>
						{courseDetails?.owner?.email}
					</h2>
					<h4 className='text-xl mt-4'>
						<span className='font-bold'>Category: </span>
						{courseDetails?.category}
					</h4>
					<h4 className='text-xl mt-4'>
						<span className='font-bold'>Duration: </span>
						{courseDetails?.courseDuration} Month
					</h4>
					<h4 className='text-xl mt-4'>
						<span className='font-bold'>Course Fee: </span>
						{courseDetails?.courseFee}
					</h4>
					<button className='border border-red-500 py-2 px-6 rounded-md mt-4 bg-red-500 text-white hover:text-red-500 hover:bg-transparent duration-300'>
						Edit Course
					</button>
				</div>
			</div>
		</div>
	);
};

export default MyCourseDetails;
