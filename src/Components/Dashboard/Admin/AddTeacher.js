import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import LoadingOverlay from "../../Loading/LoadingOverlay";

const AddTeacher = () => {
	const [teacher, setTeacher] = useState(false);
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();
	const onSubmit = (data, e) => {
		setTeacher(true);
		axios
			.put("https://fierce-caverns-90976.herokuapp.com/users/teacher", data)
			.then((res) => {
				console.log(res.data);
				Swal.fire({
					icon: "success",
					title: `You made a new teacher ${data?.email}`,
					showConfirmButton: false,
					timer: 1500,
				});
				setTeacher(false);
			});
		e.target.reset();
	};

<<<<<<< HEAD
  return (
    <div className="mt-44 ">
      <h1 className="text-4xl ">Make a Teacher</h1>
       <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-nowrap justify-center">
       
        <input
        className=" bg-red-50 p-2 rounded border-2 border-red-300 m-1"
          type={"email"}
          {...register("email", { required: true })}
          placeholder="Enter Email"
        />{" "}
        <br />
        {errors.exampleRequired && <span>This field is required</span>} <br />
        <button className="border-2 border-red-500 bg-red-500 hover:bg-transparent duration-300 text-white font-bold m-1 p-2 rounded-lg tracking-wider">
                Submit
              </button>
        <br />
        </div>
      </form>

 
    </div>
  );
=======
	return (
		<div className='teacher-background pt-10 xl:pt-48 lg:pt-48'>
			<h1 className='text-3xl text-red-500 font-bold '>Make a Teacher</h1>{" "}
			<br />
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					className='text-gray-600 focus:ring-2 focus:ring-red-600 focus:outline-none bg-white font-normal py-2 px-4 w-64 mx-auto text-md border-gray-300 rounded border'
					type={"email"}
					{...register("email", { required: true })}
					placeholder='Email to Make Teacher'
				/>{" "}
				<br />
				{errors.exampleRequired && <span>This field is required</span>} <br />
				<input
					className='bg-red-500 hover:bg-transparent border border-red-500 duration-300 text-white py-2 px-6 rounded-lg w-32 mx-auto'
					type='submit'
				/>{" "}
				<br />
			</form>
			{teacher && <LoadingOverlay />}
		</div>
	);
>>>>>>> 9d99139684ff7d074450ecc10e27182f6e7182d3
};

export default AddTeacher;
