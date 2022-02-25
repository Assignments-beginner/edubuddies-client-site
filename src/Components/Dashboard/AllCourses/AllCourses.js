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
		const url = "http://localhost:5000/courses";
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
						<Link to={`/dashboard/allcourses/${item._id}`}>
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

export default AllCourses;
