import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../Images/google.png";
import useAuth from "../../hooks/useAuth";
import "../Login/Login.css";

const Login = ({ backgroundColor = "#EDF2F7", children }) => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };

  return (
    <div style={{ backgroundColor }}>
      <div classNameName="w-full max-w-xs mx-auto pt-8 pb-16">
        <h1 classNameName="text-2xl uppercase mb-4 text-indigo-700">
          Please Sign In
        </h1>
        <form
          onSubmit={handleLoginSubmit}
          classNameName="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div classNameName="mb-4">
            <label
              classNameName="block text-gray-700 text-left text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              onChange={handleOnChange}
              placeholder="Email"
            />
          </div>
          <div classNameName="mb-2">
            <label
              classNameName="block text-gray-700 text-left text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              onChange={handleOnChange}
              placeholder="******************"
            />
          </div>
          <div classNameName="flex">
            <p classNameName="mb-3 text-left">Don't have an account ?</p>
            &nbsp;{" "}
            <Link to="/register" classNameName="text-indigo-700">
              Create One
            </Link>
          </div>
          <div classNameName="flex items-center justify-between">
            <button
              classNameName="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleGoogleSignIn}
            >
              Sign In
            </button>
          </div>
          {/* {isLoading && <div classNameName="animate-spin"></div>}
          {user?.email && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Holy smokes!</strong>
              <span className="block sm:inline">
                Something seriously bad happened.
              </span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          {authError && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Holy smokes!</strong>
              <span className="block sm:inline">{authError}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )} */}
        </form>
        <div classNameName="mt-8 pb-5 grid justify-items-center">
          <p classNameName="text-secondary mb-4 text-center">Or you can also</p>
          <button classNameName="mx-auto signin-btn">
            <div classNameName="flex items-center justify-between">
              <img height="32" width="32" src={google} alt="" />
              <span classNameName="mr-2">Continue With Google</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
