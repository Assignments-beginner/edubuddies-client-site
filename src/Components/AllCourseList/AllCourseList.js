import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
	faUser,
	faBookmark,
	faClock,
	faStar as faRegularStar,
} from "@fortawesome/free-regular-svg-icons";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addCourse } from "../../Redux/edubuddySlice";
import demoUser from "../../Images/user-demo.png";

const AllCourseList = () => {
	const courses = useSelector((state) => state?.edu?.courses);
	const dispatch = useDispatch();

	useEffect(() => {
		const url = "https://fierce-caverns-90976.herokuapp.com/courses";
		axios.get(url).then((res) => {
			dispatch(addCourse(res?.data));
		});
	}, [dispatch]);
	console.log(courses);

	return (
		<div className='container mb-14 mx-auto px-4 md:px-11'>
			<h1 className='text-center text-3xl uppercase font-semibold mt-10 md:mb-9 mb-5 text-red-500'>
				All Courses
			</h1>
			<div className='grid gap-6 grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3'>
				{courses.map((course, key) => (
					<div className='border rounded-lg card duration-300 bg-white'>
						<div className='overflow-hidden rounded-t-lg'>
							<img
								className='w-full h-40 card-image rounded-t-lg'
								src={course?.image}
								alt=''
							/>
							{/* <button
                className="
                    top-4 
                    right-4 
                    absolute 
                    px-1.5
                    pt-1.5
                    bg-white"
              >
                <FontAwesomeIcon
                  className="text-red-500 text-xl"
                  icon={faBookmark}
                />
              </button> */}
							<div className='bg-slate-900 top-4 left-4 absolute px-2 rounded'>
								<span className='text-white text-xs'>{course?.category}</span>
							</div>
						</div>
						{/* Course Details Body  */}
						<div className='px-4 pb-4'>
							<div className='py-6 flex flex-col items-start'>
								<Rating
									initialRating='3.5'
									readonly
									emptySymbol={
										<FontAwesomeIcon
											className='text-yellow-300 text-md'
											icon={faRegularStar}
										/>
									}
									fullSymbol={
										<FontAwesomeIcon
											className='text-yellow-300 text-md'
											icon={faStar}
										/>
									}
								/>
								<Link to={`/singlecourse/${course._id}`}>
									<h1
										style={{ fontSize: "1.15rem" }}
										className=' mt-1 mb-3 text-stone-700 hover:text-red-500 duration-300 cursor-pointer'>
										{course?.title}
									</h1>
								</Link>
								{/* Course Instructor  */}
								<div className='flex items-center'>
									<img
										className='w-8 h-8 rounded-full mr-2'
										src={course?.owner?.photo || demoUser}
										alt=''
									/>
									<p className='text-gray-900 leading-none text-sm'>
										<span className='text-gray-400'>By</span>{" "}
										{course?.owner?.name}
									</p>
								</div>
							</div>
							<hr />
							<div className='flex items-center justify-between pt-3'>
								<div className='flex text-stone-500 text-sm'>
									{/* Duration   */}
									<div className='flex items-center mr-4'>
										<FontAwesomeIcon
											icon={faClock}
											className='mr-1 font-thin text-xl text-gray-400'
										/>
										<span className='text-sm text-gray-400'>
											{course?.courseDuration || 0} hrs
										</span>
									</div>
									{/* Students  */}
									<div className='flex items-center'>
										<FontAwesomeIcon
											icon={faUser}
											className='mr-1 font-thin text-lg text-gray-400'
										/>
										<span className='text-sm text-gray-400'>
											{course?.totalStudents || 1024}
										</span>
									</div>
								</div>
								{/* Fee */}
								<div>
									<h6 className='text-2xl text-red-500'>
										{course?.courseFee} $
									</h6>
								</div>
							</div>
							{/* End of Bottom Bar  */}
						</div>
						{/* End of Course Details Body  */}
					</div>
				))}
			</div>
		</div>
	);
};

export default AllCourseList;
