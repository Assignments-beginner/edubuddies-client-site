import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = ({ backgroundColor = "#EDF2F7", children }) => {
  const [registerData, setRegisterData] = useState({});
  const navigate = useNavigate();
  const { registerUser, authError, setAuthError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const removeError = () => {
    setAuthError("");
  };

  const registerHandler = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      navigate
    );
    e.preventDefault();
  };

  return (
    <div style={{ backgroundColor }}>
      <div className="w-full max-w-xs mx-auto pt-8 pb-24">
        <h1 className="text-2xl uppercase mb-4 text-indigo-700">
          Registration
        </h1>
        <form
          onSubmit={registerHandler}
          className="bg-white shadow-md rounded px-8 pt-6 pb-4"
        >
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
              onClick={removeError}
              onBlur={handleOnBlur}
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
              onClick={removeError}
              onBlur={handleOnBlur}
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
              onClick={removeError}
              onBlur={handleOnBlur}
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
          <div className="flex items-center justify-between mb-6">
            <button
              className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          {authError && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 mt-4 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error!</strong>
              <br />
              <span className="block sm:inline">{authError}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
