import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();
	const onSubmit = (data, e) => {
		axios
			.put("https://fierce-caverns-90976.herokuapp.com/users/admin", data)
			.then((res) => {
				console.log(res.data);
			});
		e.target.reset();
	};

  return (
    <div className="mt-36">




      <h1 className="text-4xl ">Make Admin</h1> <br />
<br/>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-nowrap justify-center">
       
        <input
        className=" bg-red-50 p-2 rounded border-2 border-red-300 m-1"
          type={"email"}
          {...register("email", { required: true })}
          placeholder="Enter Email"
        />{" "}
        <br />
        {errors.exampleRequired && <span>This field is required</span>} 
        
          <button className="border-2 border-red-500 bg-red-500 hover:bg-transparent duration-300 text-white font-bold m-1 p-2 rounded-lg tracking-wider">
                Submit
              </button>
        
         <br />
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
