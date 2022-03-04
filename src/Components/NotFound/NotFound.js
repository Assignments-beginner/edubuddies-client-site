import React from "react";
import { Link } from "react-router-dom";
import Error from "../../Images/error.png";

const NotFound = () => {
  return (
    <div className="bg-gray-800">
      <div className="flex items-center justify-center pt-12 pb-20">
        <div className="bg-gray-100 rounded-2xl flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="py-16">
            <img
              width="500"
              height="370"
              className="px-4"
              src={Error}
              alt="NotFound"
            />

            <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
              We Cannot Find The Page You Are Looking For{" "}
            </p>
            <div className="flex justify-center">
              <button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">
                <Link to="/home"> Go Back </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
