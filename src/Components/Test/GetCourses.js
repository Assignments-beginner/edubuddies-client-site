import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCourse } from "../../Redux/edubuddySlice";

const GetCourses = () => {
	const dispatch = useDispatch();
	const courses = useSelector((state) => state.edu.courses);
	console.log(courses);

	useEffect(() => {
		const url = "https://fierce-caverns-90976.herokuapp.com/courses";
		axios.get(url).then((res) => {
			dispatch(addCourse(res.data));
		});
	}, []);
	return (
		<div>
			<h1>All Courses List </h1>
			<div>
				{courses &&
					courses.map((item) => (
						<Link to={`/courseDetail/${item._id}`}>
							<div>
								<img width='250px' height='250px' src={item.image} alt='' />

								<h1>{item.title}</h1>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default GetCourses;
