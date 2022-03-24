import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCourse } from "../../../Redux/edubuddySlice";

const AllCourses = () => {
	const dispatch = useDispatch();
	const courses = useSelector((state) => state.edu.courses);
	console.log(courses);

	useEffect(() => {
		const url = "https://fierce-caverns-90976.herokuapp.com/courses";
		axios.get(url).then((res) => {
			dispatch(addCourse(res.data));
		});
	}, [dispatch]);

	return (
		<div className='container mx-auto my-9  px-4 md:px-9 '>
			<h1 className='text-center text-3xl uppercase font-semibold mt-14 md:mb-9 mb-5 text-red-500'>
				Add content to course
			</h1>
			<div className='mx-auto grid grid-cols-12 gap-9'>
				{courses &&
					courses?.map((item) => (
						<div className='md:col-span-4 col-span-12'>
							<Link to={`/dashboard/allcourses/${item?._id}`}>
								<div
									className='border  rounded-lg card mx-auto duration-300  bg-white'
									style={{ maxWidth: "400px" }}>
									<div className='overflow-hidden'>
										<img
											className='object-fill h-36 w-96 card-image rounded-t-lg'
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

export default AllCourses;
