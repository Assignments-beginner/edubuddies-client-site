import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";

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
    <div className="h-full bg-style">
      <h1 className="text-4xl ">Make a Admin</h1> <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="text-gray-600 focus:ring-2 focus:ring-indigo-700 dark:text-gray-400 focus:outline-none dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal py-2 px-12 text-sm mr-3 border-gray-300 rounded border shadow "
          type={"email"}
          {...register("email", { required: true })}
          placeholder="Enter Email to make Admin"
        />{" "}
        <br />
        {errors.exampleRequired && <span>This field is required</span>} <br />
        <input
          className="bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg ml-3"
          type="submit"
        />{" "}
        <br />
      </form>
    </div>
  );
};

export default MakeAdmin;
