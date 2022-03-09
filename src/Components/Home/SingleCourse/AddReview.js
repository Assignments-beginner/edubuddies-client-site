import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddReview = ({ sigleData, submitting, setSubmitting }) => {
	console.log(sigleData);
	const { user } = useAuth();
	console.log(sigleData?._id);
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = ({ review }) => {
		const addReview = {
			reviewId: "Review" + Math.floor(Math.random() * 90000) + 10000,
			reviewer: user?.displayName,
			email: user?.email,
			photo: user?.photoURL,
			review,
			date: new Date(),
		};
		setSubmitting(true);
		axios
			.put(
				`https://fierce-caverns-90976.herokuapp.com/courseReview/${sigleData?._id}`,
				addReview,
			)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Your Review Successfully Added",
					showConfirmButton: true,
					timer: 2500,
				});
				setSubmitting(false);
				reset();
			})
			.catch(function (error) {
				console.log("error", error);
				console.log(error);
			});
		console.log(addReview);
	};
	return (
		<div className='container mx-auto mt-5'>
			<div className='border border-black-100 my-2'></div>
			<div className='text-xl font-black text-red-500 md:text-left text-center uppercase'>
				Share Experiance
			</div>
			<h1 className='md:text-3xl text-4xl font-semibold mt-3 mb-7 text-gray-800  md:text-left text-center'>
				Leave your valuable experiance
			</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='mx-auto grid grid-cols-12 gap-5'>
					<input
						className='md:col-span-6 col-span-12 bg-gray-100 rounded-lg  text-base leading-none text-gray-800 p-5 border border-black focus:outline-none focus:border-gray-500'
						type='text'
						value={user?.displayName}
						placeholder='Your Name'
					/>
					<input
						className='md:col-span-6 col-span-12 bg-gray-100 rounded-lg  text-base leading-none text-gray-800 p-5 border border-black  focus:outline-none focus:border-gray-500'
						type='email'
						placeholder='Your Email'
						value={user?.email}
					/>
					<textarea
						className='md:col-span-12 col-span-12 bg-gray-100 rounded-lg  text-base leading-none text-gray-800 p-5 border border-black  focus:outline-none focus:border-gray-500'
						type='text'
						multiline
						rows='7'
						placeholder='Your Review'
						{...register("review", { required: true })}
					/>
					<button className='md:col-span-5 col-span-7 rounded-lg   hover:bg-red-600 bg-red-500 text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
						Share Experiance
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddReview;
