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
      <h1 className="text-4xl ">Make a Admin</h1> <br />
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

export default MakeAdmin;
