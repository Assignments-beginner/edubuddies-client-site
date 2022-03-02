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
    axios.put("http://localhost:5000/users/admin", data).then((res) => {
      console.log(res.data);
    });
    e.target.reset();
  };

  return (
    <div>




      <h1 className="text-4xl ">Make Admin</h1> <br />
<br/>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-nowrap justify-center">
       
        <input
        className=" bg-red-50 p-2 rounded border-2 border-blue-300 m-1"
          type={"email"}
          {...register("email", { required: true })}
          placeholder="Enter Email"
        />{" "}
        <br />
        {errors.exampleRequired && <span>This field is required</span>} <br />
        <input
         className=" bg-red-400 m-1 p-1 rounded "
        type="submit" /> <br />
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
