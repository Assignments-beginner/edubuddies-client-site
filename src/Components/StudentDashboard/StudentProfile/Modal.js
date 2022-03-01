import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Dashboard/Loading";

const Modal = ({ setShowModal }) => {
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
	const { register, handleSubmit } = useForm();
	const onSubmit = ({ fullname, phone }) => {
		const data = {
			fullname,
			phone,
			photoURL: fileLink,
		};
		console.log(data);
	};
	return (
		<div>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
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
													<label class='w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer '>
														<FontAwesomeIcon
															icon={faCloudArrowUp}
															className='text-2xl rounded-full bg-gray-700 text-white p-3'
														/>
														<span class='mt-2 text-base leading-normal'>
															Select a photo
														</span>
														<input
															type='file'
															class='hidden'
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
										<span class='mt-2 text-base text-red-500 leading-normal'>
											Profile Photo
										</span>
									</div>
								</div>
								<div className='flex flex-col space-y-1'>
									<label
										for='fullname'
										className='text-sm font-semibold text-red-500 text-left mt-2'>
										Full Name
									</label>
									<input
										type='fullname'
										id='fullname'
										name='fullname'
										{...register("fullname", { required: true })}
										autofocus
										className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
									/>
								</div>
								<div className='flex flex-col space-y-1'>
									<label
										for='phone'
										className='text-sm font-semibold text-red-500 text-left mt-2'>
										Phone
									</label>
									<input
										type='phone'
										id='phone'
										name='phone'
										{...register("phone", { required: true })}
										autofocus
										className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
									/>
								</div>
							</div>
							<div className='flex items-center justify-end p-6 border-t border-solid border-red-500 rounded-b'>
								<button
									className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
									type='button'
									onClick={() => setShowModal(false)}>
									Close
								</button>
								<button
									className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
									type='submit'>
									Save Changes
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;
