import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../Loading/Loading";
import Select from "react-select";

const AddCourse = () => {
	const options = [
		{ value: "Programming Fundamentals", label: "Programming Fundamentals" },
		{ value: "Sofware Development", label: "Sofware Development" },
		{ value: "Web Development", label: "Web Development" },
		{ value: "Artificial Intelligence", label: "Artificial Intelligence" },
		{ value: "Game Development", label: "Game Development" },
		{ value: "Machine Learning", label: "Machine Learning" },
	];
	const [category, setCategory] = React.useState();
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
	const [disableBtn, setDisableBtn] = useState(false);
	useEffect(() => {
		if (category === null || fileLink === null) {
			setDisableBtn(true);
		} else {
			setDisableBtn(false);
		}
	}, [category, fileLink]);

	const onSubmit = ({ title, courseFee, courseDuration, description }) => {
		const file = {
			title,
			category: category.value,
			courseFee,
			courseDuration,
			description,
			image: fileLink,
			owner: {
				email: user?.email,
				name: user?.displayName,
				photo: user?.photoURL,
			},
			data: [],
			enrolledStudents: [],
			reviews: [],
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
			<h1 className='text-center text-3xl uppercase font-semibold mt-14 text-red-500'>
				Add A Course in
			</h1>
			<h4 className='mb-5 text-lg text-red-600 font-bold'>Your Course List</h4>

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
											icon={faImage}
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
							htmlFor='Title'
							className='text-sm font-semibold text-gray-500 text-left'>
							Title
						</label>
						<input
							maxlength='25'
							id='Title'
							label='Title'
							name='Title'
							{...register("title", { required: true })}
							autoFocus
							className='m-0 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
						/>
					</div>

					<div className='flex flex-col space-y-1'>
						<label
							htmlFor='Category'
							className='text-sm font-semibold text-gray-500 text-left'>
							Category
						</label>
						<Select onChange={setCategory} options={options} />
					</div>
					<div className='flex flex-col space-y-1'>
						<label
							htmlFor='courseFee'
							className='text-sm font-semibold text-gray-500 text-left'>
							Course Fee
						</label>
						<input
							id='courseFee'
							label='Course Fee'
							name='courseFee'
							{...register("courseFee", { required: true })}
							autoFocus
							className='m-0 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
						/>
					</div>
					<div className='flex flex-col space-y-1'>
						<label
							htmlFor='courseDuration'
							className='text-sm font-semibold text-gray-500 text-left'>
							Course Duration
						</label>
						<input
							id='courseDuration'
							label='Course Duration'
							name='courseDuration'
							{...register("courseDuration", { required: true })}
							autoFocus
							className='m-0 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
						/>
					</div>
					<div className='flex flex-col space-y-1'>
						<label
							htmlFor='courseFee'
							className='text-sm font-semibold text-gray-500 text-left'>
							Description
						</label>
						<textarea
							rows='4'
							id='Description'
							label='Description'
							name='Description'
							{...register("description", { required: true })}
							autoFocus
							className='m-0 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
						/>
					</div>
					{disableBtn ? (
						<button
							disabled
							type='submit'
							className='m-0 w-full px-4 py-2 text-lg text-white transition-colors duration-300 bg-red-500 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-1'>
							Add New Course
						</button>
					) : (
						<button
							type='submit'
							className='m-0 w-full px-4 py-2 text-lg text-white transition-colors duration-300 bg-red-500 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-1'>
							Add New Course
						</button>
					)}
				</form>
			</div>
			<div>{submitting ? <Loading /> : ""}</div>
		</div>
	);
};

export default AddCourse;
