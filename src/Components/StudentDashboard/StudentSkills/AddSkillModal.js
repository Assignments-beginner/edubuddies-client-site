import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import LoadingOverlay from "../../Loading/LoadingOverlay";

const AddSkillModal = ({ setShowAddSkillModal }) => {
	const { user } = useAuth();
	const { register, handleSubmit, reset } = useForm();
	const [submitting, setSubmitting] = useState(false);
	const onSubmit = (data) => {
		setSubmitting(true);
		axios
			.put(
				`https://fierce-caverns-90976.herokuapp.com/skillset?email=${user?.email}`,
				data,
			)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Your Skillset Successfully Updated",
					showConfirmButton: false,
					timer: 1500,
				});
				setShowAddSkillModal(false);
				setSubmitting(false);
			})
			.catch(function (error) {
				console.log("error", error);
				console.log(error);
			});
		console.log(data);
	};
	return (
		<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col space-y-3'>
				<div className='relative w-auto my-6 mx-auto max-w-3xl'>
					<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						<div className=' p-5 border-b border-solid border-red-500 rounded-t'>
							<h3 className='text-3xl font-semibold text-center text-red-500'>
								Add New Skill
							</h3>
						</div>
						<div className='relative p-6 grid grid-cols-1 gap-3'>
							<div className='flex flex-col space-y-1'>
								<div className='flex flex-col space-y-1'>
									<label
										for='skill'
										className='text-sm font-semibold text-red-500 text-left mt-2'>
										Skill Name
									</label>
									<input
										type='text'
										id='skill'
										name='skill'
										{...register("skill", { required: true })}
										autofocus
										className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
									/>
								</div>
								<div className='flex flex-col space-y-1'>
									<label
										for='expYear'
										className='text-sm font-semibold text-red-500 text-left mt-2'>
										Experiance Year
									</label>
									<input
										type='text'
										id='expYear'
										name='expYear'
										{...register("expYear", { required: true })}
										autofocus
										className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
									/>
								</div>
								<div className='flex flex-col space-y-1'>
									<label
										for='projects'
										className='text-sm font-semibold text-red-500 text-left mt-2'>
										Projects Links
									</label>
									<input
										type='text'
										id='projects'
										name='projects'
										{...register("projects", { required: true })}
										autofocus
										className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
									/>
								</div>
							</div>
							<div className='flex items-center justify-end p-6 border-t border-solid border-red-500 rounded-b mt-2'>
								<button
									className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
									type='button'
									onClick={() => setShowAddSkillModal(false)}>
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
				</div>
			</form>
			{/* {(!data || submitting) && <LoadingOverlay />} */}
		</div>
	);
};

export default AddSkillModal;
