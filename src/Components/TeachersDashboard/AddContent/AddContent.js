import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCourse } from "../../../Redux/edubuddySlice";

const AddContent = () => {
	const dispatch = useDispatch();
	const courses = useSelector((state) => state.edu.courses);

	useEffect(() => {
		const url = "https://fierce-caverns-90976.herokuapp.com/courses";
		axios.get(url).then((res) => {
			dispatch(addCourse(res.data));
		});
	}, [dispatch]);
	/* 	const [courses, setCourses] = React.useState(); 
	React.useEffect(() => {
		axios.get(`https://fierce-caverns-90976.herokuapp.com/promo`).then((res) => {
			setCourses(res.data);
		});
	}, []); */

	return (
		<div className='container mx-auto my-9  px-4 md:px-11  '>
			<h1 className='text-center text-3xl uppercase font-semibold mt-14 text-red-500'>
				Add content to course
			</h1>
			<p className=' mt-2 mb-7 text-gray-500'>
				Choose Any Of Your Course For Add New Content
			</p>
			<div className='mx-auto grid grid-cols-12 gap-9'>
				{courses &&
					courses?.map((item, key) => (
						<div className='md:col-span-4 col-span-12' key={key}>
							<Link to={`/teachersDashboard/addContent/${item?._id}`}>
								<div
									className='border  rounded-lg card mx-auto duration-300  bg-white'
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

export default AddContent;
