import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddTeacher = () => {
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();
	const onSubmit = (data, e) => {
		axios
			.put("https://fierce-caverns-90976.herokuapp.com/users/teacher", data)
			.then((res) => {
				console.log(res.data);
			});
		e.target.reset();
	};

	return (
		<div>
			<h1 className='text-4xl '>Make a Teacher</h1> <br />
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type={"email"}
					{...register("email", { required: true })}
					placeholder='Enter Email'
				/>{" "}
				<br />
				{errors.exampleRequired && <span>This field is required</span>} <br />
				<input type='submit' /> <br />
			</form>
		</div>
	);
};

export default AddTeacher;
