import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const SupportSessionModal = ({ setSupportSessionModal }) => {
	const { user } = useAuth();
	const { register, handleSubmit, reset } = useForm();
	const [submitting, setSubmitting] = useState(false);
	const onSubmit = ({
		url,
		name,
		startTimeHour,
		startTimeMin,
		startTimeAmPm,
		endTimeHour,
		endTimeMin,
		endTimeAmPm,
	}) => {
		const data = {
			name,
			url,
			startTime: `${startTimeHour}:${startTimeMin} ${startTimeAmPm}`,
			endTime: `${endTimeHour}:${endTimeMin} ${endTimeAmPm}`,
			needSupport: [],
			status: "Pending",
		};
		setSubmitting(true);
		axios
			.post(`https://fierce-caverns-90976.herokuapp.com/supportsession`, data)
			.then(function(response) {
				Swal.fire({
					icon: "success",
					title: "Your Support Session Successfully Added",
					showConfirmButton: false,
					timer: 1500,
				});
				setSupportSessionModal(false);
				setSubmitting(false);
			})
			.catch(function(error) {
				console.log("error", error);
				console.log(error);
			});
		console.log(data);
	};
	return (
		<div
			style={{ zIndex: 999 }}
			className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modals'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col space-y-3'>
				<div className='relative w-auto my-6 mx-auto max-w-3xl'>
					<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						<div className=' p-5 border-b border-solid border-red-500 rounded-t'>
							<h3 className='text-3xl font-semibold text-center text-red-500'>
								Add New Support Session
							</h3>
						</div>
						<div className='relative p-6 grid grid-cols-1 gap-3'>
							<div className='flex flex-col space-y-1'>
								<div className='flex flex-col space-y-1'>
									<label
										for='name'
										className='text-sm font-semibold tracking-widest text-left mt-2'>
										Support Session Name
									</label>
									<input
										type='text'
										id='name'
										name='name'
										{...register("name", { required: true })}
										autofocus
										className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
									/>
								</div>
								<div className='flex flex-col space-y-1'>
									<label
										for='url'
										className='text-sm font-semibold tracking-widest text-left mt-2'>
										Support Session URL
									</label>
									<input
										type='text'
										id='url'
										name='url'
										{...register("url", { required: true })}
										autofocus
										className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
									/>
								</div>
								<div className='flex flex-col space-y-1'>
									<label
										for='url'
										className='text-sm font-semibold tracking-widest text-left mt-2'>
										Support Session Time
									</label>
									<div class='flex justify-between'>
										<div class='p-5 w-40 bg-white rounded-lg shadow-xl'>
											<div className='my-2 font-bold'>Start Time</div>
											<div class='flex'>
												<select
													name='startTimeHour'
													{...register("startTimeHour", { required: true })}
													class='text-center bg-transparent text-xl appearance-none outline-none'>
													{Array.from({ length: 13 }).map((_, idx) => (
														<option value={idx}>{idx}</option>
													))}
												</select>
												<span class='text-xl mr-3'>:</span>
												<select
													{...register("startTimeMin", { required: true })}
													name='startTimeMin'
													class='bg-transparent text-xl appearance-none outline-none mr-4'>
													<option value={0}>00</option>
													<option value={30}>30</option>
												</select>
												<select
													{...register("startTimeAmPm", { required: true })}
													name='startTimeAmPm'
													class='bg-transparent text-xl appearance-none outline-none'>
													<option value='AM'>AM</option>
													<option value='PM'>PM</option>
												</select>
											</div>
										</div>
										<div class=' p-5 w-40 bg-white rounded-lg shadow-xl'>
											<div className='my-2 font-bold'>End Time</div>
											<div class='flex'>
												<select
													{...register("endTimeHour", { required: true })}
													name='endTimeHour'
													class='text-center bg-transparent text-xl appearance-none outline-none'>
													{Array.from({ length: 13 }).map((_, idx) => (
														<option value={idx}>{idx}</option>
													))}
												</select>
												<span class='text-xl mr-3'>:</span>
												<select
													{...register("endTimeMin", { required: true })}
													name='endTimeMin'
													class='bg-transparent text-xl appearance-none outline-none mr-4'>
													<option value={0}>00</option>
													<option value={30}>30</option>
												</select>
												<select
													{...register("endTimeAmPm", { required: true })}
													name='endTimeAmPm'
													class='bg-transparent text-xl appearance-none outline-none'>
													<option value='AM'>AM</option>
													<option value='PM'>PM</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='flex items-center justify-end p-6 border-t border-solid border-red-500 rounded-b mt-2'>
								<button
									className='text-red-500 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-transparent hover:border-red-500 rounded'
									type='button'
									onClick={() => setSupportSessionModal(false)}>
									Close
								</button>
								<button
									className='bg-red-500 text-white hover:bg-transparent hover:text-red-500 border border-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
									type='submit'>
									Add New Support Session
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SupportSessionModal;
