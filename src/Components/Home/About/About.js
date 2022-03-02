import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import about from "../../../Images/about.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pb-12">
      <div className="text-4xl text-center uppercase font-black mt-10 text-red-500">
        About Us
      </div>
      <div className="container px-12 mx-auto lg:flex justify-between md:block sm:block">
        <div className="lg:text-left md:text-left px-6 w-full lg:pt-24 sm:text-center">
          <div className="text-2xl font-black my-5 text-red-500">
            Why Choose Us
          </div>
          <div className="text-5xl font-black mt-5 mb-10">
            Tools For Everyone
          </div>
          <div className="text-justify lg:pr-28">
            We are a growing team of professional trainers who love our work but
            overall helping our students reach their maximum potential in their
            career.Oxford chimney pot Eaton faff about blower blatant brilliant,
            bubble and squeak he legged it Charles bonnet arse at public school
            bamboozled.
          </div>
          <div>
            <Link to="/Courses">
              <button className="bg-red-500 text-white py-4 px-8 mt-10 rounded-md mr-4 hover:bg-white hover:text-red-500 transition-all ease-linear duration-300">
                Join for Free
              </button>
            </Link>
            <Link to="/register">
              <button className="py-4 px-8 mt-10 rounded-md hover:text-red-500 transition-all ease-linear duration-300">
                Sign Up Today
                <FontAwesomeIcon
                  className="ml-4 faArrowRightLong"
                  icon={faArrowRightLong}
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <img className="mt-8" src={about} alt="WhyImage" />
        </div>
      </div>
    </div>
  );
};

export default About;
