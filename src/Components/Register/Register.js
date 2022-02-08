import React from "react";
import { Link } from "react-router-dom";
const Register = ({ backgroundColor = "#EDF2F7", children }) => {
  return (
    <div style={{ backgroundColor }}>
      <div className="w-full max-w-xs mx-auto pt-8">
        <h1 className="text-2xl uppercase mb-4 text-indigo-700">
          Registration
        </h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-left text-sm font-bold mb-2"
              for="fullname"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Full Name"
            />
          </div>
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
            <p className="mb-3 text-left">Aready have an account ?</p>
            &nbsp;{" "}
            <Link to="/login" className="text-indigo-700">
              Sign In
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
