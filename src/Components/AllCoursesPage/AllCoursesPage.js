import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUsers } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const AllCoursesPage = () => {
	const courses = [
		{
			courseName: "Become product manager learn skills.",
			coursePhoto:
				"https://shivaaythemes.in/educater-html/assets/images/course-1.jpg",
			instructorName: "Allen Walker",
			instructorPhoto:
				"https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-2-100x100.jpg",
			totalStudents: "500",
			comments: "45",
			price: "100",
		},
		{
			courseName: "Fashion and luxury fashion in a changing.",
			coursePhoto:
				"https://shivaaythemes.in/educater-html/assets/images/course-2.jpg",
			instructorName: "Domaic Toreddo",
			instructorPhoto:
				"https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-8-100x100.jpg",
			totalStudents: "454",
			comments: "24",
			price: "120",
		},
		{
			courseName: "Learning to write as a professional.",
			coursePhoto:
				"https://shivaaythemes.in/educater-html/assets/images/course-3.jpg",
			instructorName: "Peter Parker",
			instructorPhoto:
				"https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-3-100x100.jpg",
			totalStudents: "574",
			comments: "24",
			price: "54",
		},
		{
			courseName: "Improving accessibility of Your markdown.",
			coursePhoto:
				"https://shivaaythemes.in/educater-html/assets/images/course-4.jpg",
			instructorName: "Steve Rogers",
			instructorPhoto:
				"https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-5-100x100.jpg",
			totalStudents: "354",
			comments: "43",
			price: "45",
		},
	];
	return (
		<div className='container mx-auto py-4 md:py-11  '>
			<h1 className='text-center text-3xl uppercase font-semibold md:mb-9 mb-5 text-red-500'>
				Popular Courses
			</h1>
			<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto md:gap-5 gap-4'>
				{courses?.map((course, key) => (
					<Link to=''>
						<div className='border rounded-lg card duration-300  bg-white'>
							<div className=' overflow-hidden rounded-t-lg'>
								<img
									className='w-full card-image rounded-t-lg'
									src={course?.coursePhoto}
									alt=''
								/>
							</div>
							<div className='px-4 pb-4 card-content'>
								<img
									className='w-20 rounded-full mx-auto -mt-9 border-4 border-white relative z-10'
									alt=''
									src={course?.instructorPhoto}
								/>
								<h6 className='text-base text-stone-500 mt-2 hover:underline duration-300 cursor-pointer'>
									{course?.instructorName}
								</h6>
								<h1 className='text-lg font-bold mt-1 mb-3 text-stone-700 hover:text-red-500 duration-300 cursor-pointer'>
									{course?.courseName}
								</h1>
								<hr className='border ' />
								<div className='flex justify-between pt-2'>
									<div className='flex text-stone-500 text-sm'>
										<div className='mr-3 text-base'>
											<FontAwesomeIcon icon={faUsers} className='mr-2 ' />
											<span>{course?.totalStudents}</span>
										</div>
										<div className='text-base'>
											<FontAwesomeIcon icon={faComment} className='mr-2 ' />
											<span>{course?.comments}</span>
										</div>
									</div>
									<div>
										<h6 className='text-base font-bold text-red-500'>
											<span className='mr-1'>{course?.price}</span>$
										</h6>
									</div>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default AllCoursesPage;
