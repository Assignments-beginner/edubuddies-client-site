import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadStudent } from "../../../Redux/edubuddySlice";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Testimonial from "../Testimonial/Testimonial";
import Teachers from "../Teachers/Teachers";
import Blogs from "../Blogs/Blogs";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
	const dispath = useDispatch();

	const allStudent = useSelector((state) => state.edu.student);
	console.log(allStudent);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => {
				dispath(loadStudent(data));
			});
	}, [dispath]);

	return (
		<div>
			{/* All Home Component Call From Here */}
			<Banner />
			<Courses />
			<Testimonial />
			<Blogs />
			<Teachers />
			<Newsletter />
		</div>
	);
};

export default Home;
