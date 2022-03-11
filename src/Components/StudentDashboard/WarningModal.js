import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import LoadingOverlay from "../Loading/LoadingOverlay";

const WarningModal = ({ setShowModal, submitting, setSubmitting }) => {
	const { user } = useAuth();
	const ok = () => {
		setSubmitting(true);
		axios
			.put(`http://localhost:5000/warning?email=${user?.email}`)
			.then(function(response) {
				Swal.fire({
					icon: "success",
					title: "Please update your profile",
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
	};
	return (
		<div>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
				<div className='w-full grid place-items-center h-screen bg-black bg-opacity-40 z-50'>
					<div className='flex flex-col space-y-3 '>
						<div className='relative w-auto my-6 mx-auto max-w-3xl'>
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								<div className=' p-5  rounded-t'>
									<h4 className='text-2xl font-semibold text-center text-red-500'>
										Welcome {user?.displayName}
									</h4>
								</div>
								<div className='relative p-6 flex-auto'>
									<div className='flex flex-col space-y-1'>
										<button
											onClick={ok}
											className='bg-red-500 text-white font-bold uppercase text-sm  py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-red-500 hover:text-red-500 hover:bg-transparent'>
											Continue
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* 			{(submitting || user) && <LoadingOverlay />} */}
		</div>
	);
};

export default WarningModal;
