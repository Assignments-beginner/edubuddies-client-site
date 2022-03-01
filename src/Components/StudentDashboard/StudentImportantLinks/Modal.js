import React from "react";
import { useForm } from "react-hook-form";

const Modal = ({ setShowModal }) => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div>
			<div className='my-2 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-3'>
					<div className='relative w-auto my-6 mx-auto max-w-3xl'>
						<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
							<div className=' p-5 border-b border-solid border-red-500 rounded-t'>
								<h3 className='text-3xl font-semibold text-center text-red-500'>
									Update Importance Links
								</h3>
							</div>

							<div className='relative p-6 grid grid-cols-1 md:grid-cols-2 gap-3'>
								<div className='flex flex-col space-y-1'>
									<label
										for='cvLink'
										className='text-sm font-semibold text-red-500 text-left mt-2'>
										CV Link
									</label>
									<input
										type='text'
										id='cvLink'
										name='cvLink'
										{...register("cvLink", { required: true })}
										autofocus
										className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
									/>
								</div>
								<div className='flex flex-col space-y-1'>
									<label
										for='githubLink'
										className='text-sm font-semibold text-red-500 text-left mt-2'>
										Github Profile
									</label>
									<input
										type='text'
										id='githubLink'
										name='githubLink'
										{...register("githubLink", { required: true })}
										autofocus
										className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
									/>
								</div>
								<div className='flex flex-col space-y-1'>
									<label
										for='portfolio'
										className='text-sm font-semibold text-red-500 text-left mt-2'>
										Portfolio
									</label>
									<input
										type='text'
										id='portfolio'
										name='portfolio'
										{...register("portfolio", { required: true })}
										autofocus
										className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
									/>
								</div>
								<div className='flex flex-col space-y-1'>
									<label
										for='linkedinProfile'
										className='text-sm font-semibold text-red-500 text-left mt-2'>
										LinkedIn Profile
									</label>
									<input
										type='text'
										id='linkedinProfile'
										name='linkedinProfile'
										{...register("linkedinProfile", { required: true })}
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
