import React, { useState } from "react";
import axios from "axios";
/* import { BlobServiceClient } from "@azure/storage-blob"; */
import "./AddNewCourse.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../Loading/Loading";

const AddNewCourse = () => {
	/*	const blobSasUrl =
		"https://teamssyaan.blob.core.windows.net/?sv=2020-08-04&ss=b&srt=sco&sp=rwdlacitfx&se=2022-02-24T21:53:40Z&st=2022-02-24T13:53:40Z&spr=https&sig=Wx4uO7vu7go5D14GCYxzYer7ylMIhQQL7OkfNED4vCM%3D";
	const blobServiceClient = new BlobServiceClient(blobSasUrl);

 	const [form, setForm] = useState({
		title: "",
		description: "",
		file: null,
		image: "",
		price: 0,
		category: "",
	});
	const handleChange = (e) => {
		const value = e.target.name === "file" ? e.target.files[0] : e.target.value;
		setForm({
			...form,
			[e.target.name]: value,
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		console.log(form);
		form.owner = { email: "nizamcse.seu@gmail.com", name: "Nizam Uddin" };
		form.data = [];
		form.enrolledStudents = [];
		axios.post("https://fierce-caverns-90976.herokuapp.com/addCourse", form).then((res) => {
			console.log(res.data);
		});
	};
		const showFileDialog = () => {
		uploadFiless();
	};

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
			console.log(resURL.split("?")[0]);
			console.log("Done");
		} catch (error) {
			console.log(error.message);
		}
	}; */

	const { user } = useAuth();
	console.log(user);
	const [fileLink, setFileLink] = useState(null);
	const [loading, setLoading] = useState(false);
	const uploadFile = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "testupload");
		setLoading(true);
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dqdug0ows/image/upload",
			{
				method: "POST",
				body: data,
			},
		);
		const file = await res.json();
		setFileLink(file.secure_url);
		setLoading(false);
	};

	const [submitting, setSubmitting] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = ({
		title,
		category,
		courseFee,
		courseDuration,
		description,
	}) => {
		const file = {
			title,
			category,
			courseFee,
			courseDuration,
			description,
			image: fileLink,
			owner: { email: user?.email, name: user?.displayName },
			/* owner: { email: "nizamcse.seu@gmail.com", name: "Nizam Uddin" }, */
			data: [],
			enrolledStudents: [],
			courseStatus: "Pending",
		};
		setSubmitting(true);
		axios
			.post(`https://fierce-caverns-90976.herokuapp.com/addCourse`, file)
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
				Add New Course
			</h1>

			<div className='md:w-2/4 mx-auto w-full bg-white p-5 drop-shadow-xl '>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-3'>
					<div className='flex flex-col space-y-1 mx-auto'>
						{!loading ? (
							<>
								{!fileLink ? (
									<label className='w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer '>
										<FontAwesomeIcon
											icon={faCloudArrowUp}
											className='text-2xl rounded-full bg-gray-700 text-white p-3'
										/>
										<span className='mt-2 text-base leading-normal'>
											Select a photo
										</span>
										<input
											type='file'
											className='hidden'
											onChange={uploadFile}
										/>
									</label>
								) : (
									<img src={fileLink} alt='' width='230px' height='130px' />
								)}
							</>
						) : (
							<Loading />
						)}
						<span className='mt-2 text-base leading-normal'>Course Banner</span>
					</div>
					<div className='flex flex-col space-y-1'>
						<label
							for='Title'
							className='text-sm font-semibold text-gray-500 text-left'>
							Title
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

					<div className='flex flex-col space-y-1'>
						<label
							for='Category'
							className='text-sm font-semibold text-gray-500 text-left'>
							Category
						</label>
						<input
							id='Category'
							label='Category'
							name='Category'
							{...register("category", { required: true })}
							autofocus
							className='m-0 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
						/>
					</div>
					<div className='flex flex-col space-y-1'>
						<label
							for='courseFee'
							className='text-sm font-semibold text-gray-500 text-left'>
							Course Fee
						</label>
						<input
							id='courseFee'
							label='Course Fee'
							name='courseFee'
							{...register("courseFee", { required: true })}
							autofocus
							className='m-0 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
						/>
					</div>
					<div className='flex flex-col space-y-1'>
						<label
							for='courseDuration'
							className='text-sm font-semibold text-gray-500 text-left'>
							Course Duration
						</label>
						<input
							id='courseDuration'
							label='Course Duration'
							name='courseDuration'
							{...register("courseDuration", { required: true })}
							autofocus
							className='m-0 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
						/>
					</div>
					<div className='flex flex-col space-y-1'>
						<label
							for='courseFee'
							className='text-sm font-semibold text-gray-500 text-left'>
							Description
						</label>
						<input
							id='Description'
							label='Description'
							name='Description'
							{...register("description", { required: true })}
							autofocus
							className='m-0 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
						/>
					</div>
					<button
						type='submit'
						className='m-0 w-full px-4 py-2 text-lg text-white transition-colors duration-300 bg-red-500 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-1'>
						Add New Course
					</button>
				</form>
			</div>
			<div>{submitting ? <Loading /> : ""}</div>
		</div>
	);
};

export default AddNewCourse;
