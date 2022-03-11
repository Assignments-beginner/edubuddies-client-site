import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const JoinSupportSessionModal = ({
	setJoinSupportSessionModal,
	id,
	setSupportRoom,
}) => {
	const [join, setJoin] = React.useState(false);
	const { user } = useAuth();
	const [submitting, setSubmitting] = React.useState(false);
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = ({ problem }) => {
		const data = {
			problem,
			email: user?.email,
			name: user?.displayName,
			status: "Pending",
		};
		setSubmitting(true);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: `Yes, Join Now!`,
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.put(
						`https://fierce-caverns-90976.herokuapp.com/joinsupportsession/${id}`,
						data,
					)
					.then(function(response) {
						Swal.fire({
							icon: "success",
							title: "You successfully requested",
							showConfirmButton: false,
							timer: 1500,
						});
						setSubmitting(false);
						setJoin(true);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		});
	};
	const [singlesupportsession, setSinglesupportsession] = React.useState();
	console.log("singlesupportsession", singlesupportsession);
	React.useEffect(() => {
		axios
			.get(
				`https://fierce-caverns-90976.herokuapp.com/singlesupportsession/${id}`,
			)
			.then((res) => {
				setSinglesupportsession(res.data);
			});
	}, [id, submitting]);
	const [total, setTotal] = React.useState();
	const [serial, setSerial] = React.useState();
	const remainingArray = singlesupportsession?.needSupport?.filter((j) =>
		j?.status?.includes("Pending"),
	);
	console.log("remainingArray", remainingArray);
	React.useEffect(() => {
		setTotal(remainingArray?.length);
		setSerial(remainingArray?.map((e) => e.email).indexOf(user?.email) + 1);
	}, [remainingArray, user?.email, submitting, join]);

	const setSupportRoomandClose = (url) => {
		setSupportRoom(url);
		setJoinSupportSessionModal(false);
	};
	return (
		<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col space-y-3'>
				<div className='relative w-auto my-6 mx-auto max-w-3xl'>
					<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						<div className='p-5 border-b border-solid border-red-500 rounded-t'>
							<h3 className='text-3xl font-semibold text-center text-red-500'>
								Request to Join Support Session
							</h3>
						</div>
						<div className='relative p-6 grid grid-cols-1 gap-3'>
							{!join && !serial ? (
								<div className='flex flex-col space-y-1'>
									<div className='flex flex-col space-y-1'>
										<label
											for='url'
											className='text-sm font-semibold tracking-widest text-left mt-2'>
											Describe your problem
										</label>
										<textarea
											rows='5'
											type='text'
											id='problem'
											name='problem'
											{...register("problem", { required: true })}
											autofocus
											className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
										/>
									</div>
								</div>
							) : (
								<div className='mx-auto mb-4'>
									<div className='text-sm tracking-widest font-bold'>
										Total Students :{" "}
										<span className='font-bold text-xl text-red-500'>
											{total}
										</span>
									</div>

									<div className='text-sm tracking-widest font-bold'>
										Your Serial :{" "}
										<span className='font-bold text-xl text-red-500'>
											{serial}
										</span>
									</div>
									<div className='text-sm tracking-widest font-bold'>
										Waiting time :{" "}
										<span className='font-bold text-xl text-red-500'>
											{serial * 5 - 5}
										</span>{" "}
										minutes
									</div>

									<div className='mt-4'>
										{/* 	<a
											href={`https://meet.google.com/${singlesupportsession?.url}`}
											target='_blank'
											className='border border-red-500 bg-red-500 hover:bg-transparent duration-300 text-white font-bold py-2 w-[130px] mx-auto rounded-lg cursor-pointer hover:text-red-500 '
											rel='noreferrer'>
											Join Now
											<FontAwesomeIcon
												className='ml-3 faArrowRightLong'
												icon={faArrowRightLong}
											/>
										</a> */}
										<div
											onClick={() =>
												setSupportRoomandClose(singlesupportsession?.url)
											}
											className='border border-red-500 bg-red-500 hover:bg-transparent duration-300 text-white font-bold py-2 w-[130px] mx-auto rounded-lg cursor-pointer hover:text-red-500 '>
											Join Now
											<FontAwesomeIcon
												className='ml-3 faArrowRightLong'
												icon={faArrowRightLong}
											/>
										</div>
									</div>
								</div>
							)}
							<div className='flex items-center justify-end p-6 border-t border-solid border-red-500 rounded-b mt-2'>
								<button
									className='hover:bg-red-500 focus:500 bg-transparent duration-300 hover:text-white rounded cursor-pointer text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm mr-1 mb-1 ease-linear transition-all border border-red-500'
									type='button'
									onClick={() => setJoinSupportSessionModal(false)}>
									Close
								</button>
								{!serial && (
									<button
										className='text-white font-bold uppercase text-sm px-4 py-2 shadow border-2 border-red-500 bg-red-500 hover:bg-transparent rounded-lg hover:text-red-500 transition-all ease-linear duration-300'
										type='submit'>
										Request
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</form>
			{!singlesupportsession && <LoadingOverlay />}
		</div>
	);
};

export default JoinSupportSessionModal;
