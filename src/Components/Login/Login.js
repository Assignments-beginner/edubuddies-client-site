import React from "react";
import { Link } from "react-router-dom";
import google from "../../Images/google.png";
import "../Login/Login.css";

const Login = () => {
  return (
    // <div>
    //     <h1 className="text-4xl">Welcome back !!!</h1>
    //     <h1 className="text-4xl mb-10">Please login</h1>
    //     <h1 className="text-4xl mb-10">Or</h1>
    //     <Link to ="/register">
    //         <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg">Sign Up</button>
    //     </Link>
    // </div>
    <div className="w-full max-w-xs mx-auto pt-8">
      <h1 className="text-2xl uppercase mb-4 text-indigo-700">
        Please Sign In
      </h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-left text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-left text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex">
          <p className="mb-3 text-left">Don't have an account ?</p>
          &nbsp;{" "}
          <Link to="/register" className="text-indigo-700">
            Create One
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="mt-8 mb-5 grid justify-items-center">
        <p className="text-secondary mb-4 text-center">Or you can also</p>
        <button className="mx-auto signin-btn">
          <div className="flex items-center justify-between">
            <img height="32" width="32" src={google} alt="" />
            <span className="mr-2">Continue With Google</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
