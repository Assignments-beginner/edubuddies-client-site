import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BlobServiceClient } from "@azure/storage-blob";
import "../AddNewCourse/AddNewCourse.css";
import Loading from "../Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FileTest = () => {
	const blobSasUrl =
		"https://teamssyaan.blob.core.windows.net/?sv=2020-08-04&ss=b&srt=sco&sp=rwdlacitfx&se=2023-02-25T20:29:15Z&st=2022-02-25T12:29:15Z&spr=https&sig=mcUX%2BdkbPthIMk5pCI3k9DwUGbry6IJKOlgxwSLBokA%3D";
	const blobServiceClient = new BlobServiceClient(blobSasUrl);

	const [form, setForm] = useState({
		title: "",
		file: null,
	});
	const { id } = useParams();
	const courses = useSelector((state) => state.edu.courses);

	const singleCourse = courses && courses.find((item) => item._id === id);
	console.log(singleCourse);

	// upload file
	const uploadFiless = async () => {
		setLoading(true);
		console.log(form.file);
		try {
			console.log("uploadding");
			console.log(form.file.name);
			const containerClient = blobServiceClient.getContainerClient("courses");
			const blockBlobClient = containerClient.getBlockBlobClient(
				form.file.name,
			);
			console.log(form.file);
			const rest = await blockBlobClient.uploadBrowserData(form.file);
			console.log(rest);
			setLoading(false);
			const resURL = rest?._response?.request?.url;
			console.log(resURL);
			setFileLink(resURL.split("?")[0]);
			console.log("Done");
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleChange = (e) => {
		const value = e.target.name === "file" ? e.target.files[0] : e.target.value;
		console.log(e.target.files[0]);
		setForm({
			...form,
			[e.target.name]: value,
		});
	};

	const [fileLink, setFileLink] = useState(null);
	const [loading, setLoading] = useState(false);
	console.log(fileLink);

	const [submitting, setSubmitting] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = ({ title }) => {
		const file = {
			title,
			lectureURL: fileLink,
		};
		setSubmitting(true);
		axios
			.patch(
				`https://fierce-caverns-90976.herokuapp.com/updateCourseContent/${id}`,
				file,
			)
			.then(function(response) {
				Swal.fire({
					icon: "success",
					title: "Your File Successfully Added",
					showConfirmButton: true,
					timer: 2500,
				});
				setSubmitting(false);
				setFileLink(null);
				reset();
			})
			.catch(function(error) {
				console.log("error", error);
				console.log(error);
			});
	};

	return (
		<div className='container mx-auto px-4 md:px-11  '>
			<h1 className='text-center text-3xl uppercase font-semibold mt-14 mb-5 text-red-500'>
				Add New Content To
			</h1>
			<h1 className='text-3xl'>{singleCourse?.title}</h1>
			<div className='md:w-2/4 mx-auto w-full bg-white p-5 drop-shadow-xl '>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-3'>
					<div className='flex flex-col space-y-1 mx-auto'>
						{!loading ? (
							<>
								{!fileLink ? (
									<>
										<label className='w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer '>
											<FontAwesomeIcon
												icon={faCloudArrowUp}
												className='text-2xl rounded-full bg-gray-700 text-white p-3'
											/>
											<span className='mt-2 text-base leading-normal'>
												Select a Video
											</span>
											<input
												onChange={handleChange}
												type='file'
												name='file'
												className='hidden'
												// accept="video/mp4"
												placeholder='Upload A Video'
											/>
										</label>
										<button
											className='m-0 w-full px-4 py-2 text-lg text-white transition-colors duration-300 bg-red-500 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-1'
											onClick={() => uploadFiless()}>
											{" "}
											Click here to Upload File
										</button>
									</>
								) : (
									<video width='230px' height='130px' controls>
										<source src={fileLink} type='video/mp4' />
										Your browser does not support the video tag.
									</video>
								)}
							</>
						) : (
							<Loading />
						)}
					</div>
					<div className='flex flex-col space-y-1'>
						<label
							for='Title'
							className='text-sm font-semibold text-gray-500 text-left'>
							Content Title
						</label>
						<input
							id='Title'
							label='Title'
							name='Title'
							{...register("title", { required: true })}
							autofocus
							className='m-0 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
						/>
					</div>
					<button
						type='submit'
						className='m-0 w-full px-4 py-2 text-lg text-white transition-colors duration-300 bg-red-500 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-1'>
						Add New Content
					</button>
				</form>
			</div>
			<div>{submitting ? <Loading /> : ""}</div>
		</div>
	);
};

export default FileTest;
