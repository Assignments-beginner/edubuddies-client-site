import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const JoinSupportSessionModal = ({ setJoinSupportSessionModal, id }) => {
	const [join, setJoin] = React.useState(false);
	const { user } = useAuth();
	const [submitting, setSubmitting] = React.useState(false);
	const { register, handleSubmit } = useForm();
	const onSubmit = ({ problem }) => {
		const data = {
			problem,
			email: user?.email,
			name: user?.displayName,
			supportId: "Support" + Math.floor(Math.random() * 90000) + 10000,
			status: "Pending",
		};
		setSubmitting(true);
		Swal.fire({
			title: "Are you sure?",
			text: "You want to join our support session!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: `Yes, Send Request!`,
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
							title: "Click Join Now To Join On Support Session",
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

	return (
		<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modals'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col space-y-3'>
				<div
					className='relative my-6 mx-auto max-w-3xl'
					style={{ minWidth: "350px" }}>
					<div className='p-4 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						<div className='rounded-t flex justify-between'>
							<h3 className='text-md font-semibold text-left px-3 py-1  '>
								Support Session
							</h3>
							<div className='text-md bg-gray-200 px-3 py-1 rounded-lg'>
								{new Date().toDateString()}
							</div>
						</div>
						<div className='my-4 text-red-500 flex max-w-max bg-red-100 px-3 py-1 rounded-lg text-sm '>
							Support Session {singlesupportsession?.name}{" "}
							{new Date().toLocaleDateString()}
						</div>
						<div className='relative grid grid-cols-1  justify-around'>
							{!join && !serial ? (
								<div className='flex flex-col space-y-1'>
									<div className='flex flex-col space-y-1'>
										<label
											for='url'
											className='text-md font-semibold tracking-widest text-left mb-1'>
											Describe your problem
										</label>
										<textarea
											rows='5'
											type='text'
											id='problem'
											name='problem'
											{...register("problem", { required: true })}
											autofocus
											className=' px-4 py-2 transition duration-300 border border-gray-300 rounded-xl focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500'
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
										<a
											href={singlesupportsession?.url}
											target='_blank'
											className='border border-red-500 bg-red-500 hover:bg-transparent duration-300 text-white font-bold py-2 px-3 w-[130px] mx-auto rounded-lg cursor-pointer hover:text-red-500 '
											rel='noreferrer'>
											Join Now
											<FontAwesomeIcon
												className='ml-3 faArrowRightLong'
												icon={faArrowRightLong}
											/>
										</a>
									</div>
								</div>
							)}
							<div className=' flex justify-between mt-2'>
								<div>
									<div className='px-2 py-1 text-sm rounded-lg'>
										Session Start
									</div>
									<div className='text-sm text-green-500 bg-green-100 px-2 py-1 rounded-lg'>
										{singlesupportsession?.startTime}
									</div>
								</div>
								<div>
									<div className='px-2 py-1 text-sm rounded-lg'>
										Session End
									</div>
									<div className='text-sm text-green-500 bg-green-100 px-2 py-1 rounded-lg'>
										{singlesupportsession?.endTime}
									</div>
								</div>
							</div>
							<div className='flex items-center justify-center px-5 pt-5'>
								<button
									className='hover:bg-red-500 focus:500 bg-transparent duration-300 hover:text-white rounded cursor-pointer text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm ease-linear transition-all border border-red-500 mr-2'
									type='button'
									onClick={() => setJoinSupportSessionModal(false)}>
									Close
								</button>
								{!serial && (
									<button
										className='text-white font-bold uppercase text-sm px-4 py-2 shadow border-2 border-red-500 bg-red-500 hover:bg-transparent rounded-lg hover:text-red-500 transition-all ease-linear duration-300  ml-2'
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
