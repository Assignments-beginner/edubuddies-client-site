import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUsers } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const AllCoursesPage = () => {
  return (
    <div className="flex flex-col jusitfy-start items-start">
      <div>
        <p className="text-sm leading-4 text-gray-600">Home</p>
      </div>
      <div className="mt-3">
        <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800">
          Favourites
        </h1>
      </div>
      <div className="mt-4">
        <p className="text-2xl tracking-tight leading-6 text-gray-600">
          03 items
        </p>
      </div>
      <div className=" mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
        <div className="flex flex-col">
          <div className="relative">
            <img
              className="hidden lg:block"
              src="https://i.ibb.co/SsmkhPq/Rectangle-23.png"
              alt="bag"
            />
            <img
              className="hidden sm:block lg:hidden"
              src="https://i.ibb.co/ZH9FmZL/Rectangle-23-1.png"
              alt="bag"
            />
            <img
              className=" sm:hidden"
              src="https://i.ibb.co/cyN26yn/Rectangle-23.png"
              alt="bag"
            />
            <button
              aria-label="close"
              className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400"
            >
              <svg
                className="fil-current"
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L13 13"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCoursesPage;
