import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddTeacher = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.put("http://localhost:5000/users/teacher", data).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <h1 className="text-4xl ">Make a Teacher</h1> <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type={"email"}
          {...register("email", { required: true })}
          placeholder="Enter Email"
        />{" "}
        <br />
        {errors.exampleRequired && <span>This field is required</span>} <br />
        <input type="submit" /> <br />
      </form>
    </div>
  );
};

export default AddTeacher;
