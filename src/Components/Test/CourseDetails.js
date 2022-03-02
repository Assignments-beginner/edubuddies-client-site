import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BlobServiceClient } from "@azure/storage-blob";
import "./test.css";
const CourseDetails = () => {
	const blobSasUrl =
		"https://teamssyaan.blob.core.windows.net/?sv=2020-08-04&ss=b&srt=sco&sp=rwdlacitfx&se=2022-02-24T21:53:40Z&st=2022-02-24T13:53:40Z&spr=https&sig=Wx4uO7vu7go5D14GCYxzYer7ylMIhQQL7OkfNED4vCM%3D";
	const blobServiceClient = new BlobServiceClient(blobSasUrl);

	const [form, setForm] = useState({
		title: "",
		file: null,
	});
	const [lectureURL, setLectureURL] = useState("");
	const { id } = useParams();
	const courses = useSelector((state) => state.edu.courses);

	const singleCourse = courses && courses.find((item) => item._id === id);
	console.log(singleCourse);

	// upload file
	const uploadFiless = async () => {
		console.log(form.file);
		try {
			console.log("uploadding");
			console.log(form.file.name);
			const containerClient = blobServiceClient.getContainerClient("courses");
			const blockBlobClient = containerClient.getBlockBlobClient(
				form.file.name,
			);
			const rest = await blockBlobClient.uploadBrowserData(form.file);
			console.log(rest);
			const resURL = rest?._response?.request?.url;
			setLectureURL(resURL.split("?")[0]);
			console.log("Done");
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleChange = (e) => {
		const value = e.target.name === "file" ? e.target.files[0] : e.target.value;
		setForm({
			...form,
			[e.target.name]: value,
		});
	};

	const updateFile = (e) => {
		e.preventDefault();
		const data = { title: form.title, lectureURL: lectureURL };
		console.log(data);
		axios
			.patch(
				`https://fierce-caverns-90976.herokuapp.com/updateCourseContent/${id}`,
				data,
			)
			.then((res) => console.log(res.data));
	};

	return (
		<div>
			<h1 className='text-4xl'>Details Pages</h1>
			<h1>{id}</h1>
			<form onSubmit={updateFile}>
				<input
					onChange={handleChange}
					type='text'
					name='title'
					placeholder='Title'
				/>{" "}
				<br />
				<br />
				<input
					onChange={handleChange}
					type='file'
					name='file'
					// accept="video/mp4"
					placeholder='Upload A Video'
				/>{" "}
				<br /> <br />
				<input type='submit' />
			</form>
			<button onClick={() => uploadFiless()}>Click here to Upload File</button>
		</div>
	);
};

export default CourseDetails;
