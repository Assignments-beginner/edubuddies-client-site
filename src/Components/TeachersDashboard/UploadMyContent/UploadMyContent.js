import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BlobServiceClient } from "@azure/storage-blob";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faFileVideo } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loading from "../../Loading/Loading";
import Select from "react-select";

const UploadMyContent = () => {
	const options = [
		{ value: "Milestone 1", label: "Milestone 1" },
		{ value: "Milestone 2", label: "Milestone 2" },
		{ value: "Milestone 3", label: "Milestone 3" },
		{ value: "Milestone 4", label: "Milestone 4" },
		{ value: "Milestone 5", label: "Milestone 5" },
		{ value: "Milestone 6", label: "Milestone 6" },
		{ value: "Milestone 7", label: "Milestone 7" },
	];
	const [milestones, setMilestones] = React.useState();
	console.log(milestones);
	const blobSasUrl =
		"https://teamssyaan.blob.core.windows.net/?sv=2020-08-04&ss=b&srt=sco&sp=rwdlacitfx&se=2023-02-25T20:29:15Z&st=2022-02-25T12:29:15Z&spr=https&sig=mcUX%2BdkbPthIMk5pCI3k9DwUGbry6IJKOlgxwSLBokA%3D";
	const blobServiceClient = new BlobServiceClient(blobSasUrl);

	const [form, setForm] = useState({
		title: "",
		file: null,
	});
	const { id } = useParams();
	console.log(id);
	const courses = useSelector((state) => state.edu.courses);

	const singleCourse = courses && courses.find((item) => item._id === id);

	// upload file
	const uploadFiless = async () => {
		setLoading(true);
		try {
			const containerClient = blobServiceClient.getContainerClient("courses");
			const blockBlobClient = containerClient.getBlockBlobClient(
				form.file.name,
			);
			const rest = await blockBlobClient.uploadBrowserData(form.file);
			setLoading(false);
			const resURL = rest?._response?.request?.url;
			setFileLink(resURL.split("?")[0]);
		} catch (error) {}
	};
	const [localFile, setLocalFile] = useState();
	const handleChange = (e) => {
		setLocalFile(e.target.value);
		const value = e.target.name === "file" ? e.target.files[0] : e.target.value;
		setForm({
			...form,
			[e.target.name]: value,
		});
	};

	const [fileLink, setFileLink] = useState(null);
	const [loading, setLoading] = useState(false);

	const [submitting, setSubmitting] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = ({ title }) => {
		const file = {
			title,
			milestone: milestones?.value,
			lectureURL: fileLink,
		};
		setSubmitting(true);
		axios
			.put(
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
	const [disableBtn, setDisableBtn] = useState(false);
	useEffect(() => {
		if (milestones === null || fileLink === null) {
			setDisableBtn(true);
		} else {
			setDisableBtn(false);
		}
	}, [fileLink, milestones]);

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
										{!localFile ? (
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
										) : (
											<label className='w-64 flex flex-col items-center px-4 py-6 bg-gray-700 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer '>
												<FontAwesomeIcon
													icon={faFileVideo}
													className='text-5xl rounded-full bg-gray-700 text-white p-1'
												/>
											</label>
										)}

										{localFile && (
											<button
												className='m-0 w-full px-4 py-2 text-lg text-white transition-colors duration-300 bg-red-500 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-1'
												onClick={() => uploadFiless()}>
												Click here to Upload File
											</button>
										)}
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
					</div>{" "}
					<div className='flex flex-col space-y-1'>
						<label
							htmlFor='Title'
							className='text-sm font-semibold text-gray-500 text-left'>
							Select Milestone
						</label>
						<Select onChange={setMilestones} options={options} />
					</div>
					<div className='flex flex-col space-y-1'>
						<label
							htmlFor='Title'
							className='text-sm font-semibold text-gray-500 text-left'>
							Content Title
						</label>
						<input
							id='Title'
							label='Title'
							name='Title'
							{...register("title", { required: true })}
							autoFocus
							className='m-0 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
						/>
					</div>
					{disableBtn ? (
						<button
							disabled
							type='submit'
							className='m-0 w-full px-4 py-2 text-lg text-white transition-colors duration-300 bg-red-500 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-1'>
							Add New Content
						</button>
					) : (
						<button
							type='submit'
							className='m-0 w-full px-4 py-2 text-lg text-white transition-colors duration-300 bg-red-500 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-1'>
							Add New Content
						</button>
					)}
				</form>
			</div>
			<div>{submitting ? <Loading /> : ""}</div>
		</div>
	);
};

export default UploadMyContent;
