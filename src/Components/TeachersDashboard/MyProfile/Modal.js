import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Loading/Loading";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ setShowModal }) => {
	const [fileLink, setFileLink] = useState(null);
	const [loading, setLoading] = useState(false);
	const { user } = useAuth();
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

	const [details, setDetails] = useState();
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			displayName: "",
			designation: "",
			phone: "",
			age: "",
			gender: "",
			address: "",
			about: "",
			experinece: "",
			skills: "",
			language: "",
			type: "",
			facebook: "",
			twitter: "",
			linkedin: "",
		},
	});

	React.useEffect(() => {
		axios
			.get(
				`https://fierce-caverns-90976.herokuapp.com/singleTeacher?email=${user?.email}`,
			)
			.then((res) => {
				reset(res?.data);
				setDetails(res?.data);
			});
	}, [reset, user?.email]);
	const [submitting, setSubmitting] = useState(false);
	const onSubmit = (data) => {
		const datas = { ...data, photoURL: fileLink || details?.photoURL };
		setSubmitting(true);
		axios
			.put(
				`https://fierce-caverns-90976.herokuapp.com/teacherAbout?email=${user?.email}`,
				datas,
			)
			.then(function(response) {
				Swal.fire({
					icon: "success",
					title: "Your Profile Successfully Updated",
					showConfirmButton: false,
					timer: 1500,
				});
				setShowModal(false);
				setSubmitting(false);
			})
			.catch(function(error) {
				console.log("error", error);
				console.log(error);
			});
		console.log(datas);
	};
	return (
		<div>
			<div className='justify-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modals'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-3'>
					<div className='relative w-auto my-6 mx-auto max-w-3xl'>
						<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
							<div className=' p-5 border-b border-solid border-red-500 rounded-t'>
								<h3 className='text-3xl font-semibold text-center text-red-500'>
									Update Profile
								</h3>
							</div>
							<div className='relative p-6 flex-auto'>
								<div className='flex flex-col space-y-1'>
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
													<img
														src={fileLink}
														alt=''
														width='230px'
														height='130px'
													/>
												)}
											</>
										) : (
											<Loading />
										)}
										<span className='mt-2 text-base text-red-500 leading-normal'>
											Profile Photo
										</span>
									</div>
								</div>

								<div className='relative p-6 grid grid-cols-1 gap-3'>
									<div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
										<div className='flex flex-col space-y-1'>
											<label
												for='displayName'
												className='text-sm font-semibold tracking-widest text-left mt-2'>
												Full Name
											</label>
											<input
												type='text'
												id='displayName'
												name='displayName'
												{...register("displayName", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>
										<div className='flex flex-col space-y-1'>
											<label
												for='designation'
												className='text-sm font-semibold tracking-widest text-left mt-2'>
												Designation
											</label>
											<input
												type='text'
												id='designation'
												name='designation'
												{...register("designation", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>{" "}
										<div className='flex flex-col space-y-1'>
											<label
												for='phone'
												className='text-sm font-semibold tracking-widest text-left mt-2'>
												Phone
											</label>
											<input
												type='text'
												id='phone'
												name='phone'
												{...register("phone", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>{" "}
										<div className='flex flex-col space-y-1'>
											<label
												for='age'
												className='text-sm font-semibold tracking-widest text-left mt-2'>
												Age
											</label>
											<input
												type='text'
												id='age'
												name='age'
												{...register("age", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>{" "}
										<div className='flex flex-col space-y-1'>
											<label
												for='gender'
												className='text-sm font-semibold tracking-widest text-left mt-2'>
												Gender
											</label>
											<input
												type='text'
												id='gender'
												name='gender'
												{...register("gender", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>{" "}
										<div className='flex flex-col space-y-1'>
											<label
												for='address'
												className='text-sm font-semibold tracking-widest text-left mt-2'>
												Address
											</label>
											<input
												type='text'
												id='address'
												name='address'
												{...register("address", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>
										<div className='flex flex-col space-y-1'>
											<label
												for='experinece'
												className='text-sm font-semibold tracking-widest  text-left mt-2'>
												Experinece
											</label>
											<input
												type='text'
												id='experinece'
												name='experinece'
												{...register("experinece", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>
										<div className='flex flex-col space-y-1'>
											<label
												for='skills'
												className='text-sm font-semibold tracking-widest  text-left mt-2'>
												skills
											</label>
											<input
												type='text'
												id='skills'
												name='skills'
												{...register("skills", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>
										<div className='flex flex-col space-y-1'>
											<label
												for='language'
												className='text-sm font-semibold tracking-widest  text-left mt-2'>
												Language
											</label>
											<input
												type='text'
												id='language'
												name='language'
												{...register("language", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>
										<div className='flex flex-col space-y-1'>
											<label
												for='type'
												className='text-sm font-semibold tracking-widest  text-left mt-2'>
												Job Type
											</label>
											<input
												type='text'
												id='type'
												name='type'
												{...register("type", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>
										<div className='flex flex-col space-y-1'>
											<label
												for='operationDone'
												className='text-sm font-semibold tracking-widest  text-left mt-2'>
												Operation Done
											</label>
											<input
												type='text'
												id='operationDone'
												name='operationDone'
												{...register("operationDone", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>
										<div className='flex flex-col space-y-1'>
											<label
												for='facebook'
												className='text-sm font-semibold tracking-widest  text-left mt-2'>
												Facebook
											</label>
											<input
												type='text'
												id='facebook'
												name='facebook'
												{...register("facebook", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>
										<div className='flex flex-col space-y-1'>
											<label
												for='twitter'
												className='text-sm font-semibold tracking-widest  text-left mt-2'>
												Twitter
											</label>
											<input
												type='text'
												id='twitter'
												name='twitter'
												{...register("twitter", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>
										<div className='flex flex-col space-y-1'>
											<label
												for='linkedin'
												className='text-sm font-semibold tracking-widest  text-left mt-2'>
												Linkedin
											</label>
											<input
												type='text'
												id='linkedin'
												name='linkedin'
												{...register("linkedin", { required: true })}
												autofocus
												className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
											/>
										</div>
									</div>{" "}
									<div className='flex flex-col space-y-1'>
										<label
											for='about'
											className='text-sm font-semibold tracking-widest  text-left mt-2'>
											About
										</label>
										<textarea
											rows='4'
											type='text'
											id='about'
											name='about'
											{...register("about", { required: true })}
											autofocus
											className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
										/>
									</div>
									<div className='flex items-center justify-end p-6 border-t border-solid border-red-500 rounded-b'>
										<button
											className='text-red-500 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-transparent hover:border-red-500 rounded'
											type='button'
											onClick={() => setShowModal(false)}>
											Close
										</button>
										<button
											className='bg-red-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-red-500 hover:text-red-500 hover:bg-transparent'
											type='submit'>
											Save Changes
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			{/* {(!data || submitting) && <LoadingOverlay />} */}
		</div>
	);
};

export default Modal;
