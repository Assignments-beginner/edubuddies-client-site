import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { addCourse } from "../../../Redux/edubuddySlice";

const MyCourses = () => {
	const { user } = useAuth();
	const dispatch = useDispatch();
	const courses = useSelector((state) => state.edu.courses);
	const [course, setCourse] = useState();

	useEffect(() => {
		const url = `https://fierce-caverns-90976.herokuapp.com/getCourse/${user?.email}`;
		axios.get(url).then((res) => {
			setCourse(res.data);
		});
	}, [user?.email]);

	return (
		<div className='container mx-auto mt-4 px-4 md:px-11  '>
			<h1 className='text-center text-3xl uppercase font-semibold md:mb-9 mb-5 text-red-500'>
				My Courses
			</h1>
			<div className='mx-auto grid grid-cols-12 gap-9'>
				{course &&
					course?.map((item, key) => (
						<div className='md:col-span-4 col-span-12' key={key}>
							<Link to={`/teachersDashboard/CourseDetails/${item?._id}`}>
								<div
									className='border rounded-lg card mx-auto duration-300 bg-white'
									style={{ maxWidth: "400px" }}>
									<div className='overflow-hidden'>
										<img
											className='object-fill h-52 w-full card-image rounded-t-lg'
											src={item?.image}
											alt={item?.title}
										/>
									</div>
									<div className='px-4 card-content'>
										<h1 className='text-lg font-bold my-4 text-stone-700 hover:text-red-500 duration-300 cursor-pointer text-center'>
											{item?.title}
										</h1>
									</div>
								</div>
							</Link>
						</div>
					))}
			</div>
		</div>
	);
};

export default MyCourses;
