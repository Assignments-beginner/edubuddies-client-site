import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../Images/google.png";
import useAuth from "../../hooks/useAuth";
import "../Login/Login.css";

const Login = ({ backgroundColor = "#EDF2F7", children }) => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, signInWithGoogle, isLoading, authError, setAuthError } =
    useAuth();

  const removeError = () => {
    setAuthError("");
  };

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
      <div className="w-full max-w-xs mx-auto pt-8 pb-16">
        <h1 className="text-2xl uppercase mb-4 text-indigo-700">
          Please Sign In
        </h1>
        <form
          onSubmit={handleLoginSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
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
              onChange={handleOnChange}
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
              onChange={handleOnChange}
              placeholder="******************"
            />
          </div>
          <div className="flex my-4">
            <p className="text-sm text-left">Don't have an account ?</p>
            &nbsp;
            <Link to="/register" className="text-sm text-indigo-700">
              Create One
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>

          {isLoading && <div className="animate-spin"></div>}

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

        {/* //////////////// Google Button ////////////////// */}

        <div className="mt-8 pb-5 flex flex-col justify-items-center">
          <p className="text-secondary mb-4 text-center">Or you can also</p>
          <button onClick={handleGoogleSignIn} className="mx-auto signin-btn">
            <div className="flex items-center justify-between">
              <img height="32" width="32" src={google} alt="" />
              <span className="mr-2">Continue With Google</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
