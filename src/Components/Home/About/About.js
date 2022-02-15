import React from "react";
import whyWe from "../../../Images/whyAll.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about">
      <div className="text-4xl uppercase font-black mt-24 text-red-500">
        About Us
      </div>
      <div className="container mx-auto lg:flex justify-between md:block sm:block">
        <div className="text-left px-6 w-full lg:pt-24">
          <div className="text-2xl font-black my-5 text-red-500">
            Why Choose Us
          </div>
          <div className="text-5xl font-black mt-5">Tools For Everyone</div>
          <div className="text-justify lg:pr-28">
            We are a growing team of professional trainers who love our work but
            overall helping our students reach their maximum potential in their
            career.Oxford chimney pot Eaton faff about blower blatant brilliant,
            bubble and squeak he legged it Charles bonnet arse at public school
            bamboozled.
          </div>
          <div>
            <Link to="/Courses">
              <button className="bg-red-500 text-white py-4 px-8 mt-10 rounded-md mr-2">
                Join for Free
              </button>
            </Link>
            <Link to="/register">
              <button className="ml-2 py-4 px-8 mt-10 rounded-md hover:text-blue-700">
                Sign Up Today
                <FontAwesomeIcon
                  className="ml-4 faArrowRightLong"
                  icon={faArrowRightLong}
                />
              </button>
            </Link>
          </div>
        </div>
        <div class="w-full relative z-10">
          <img className="mt-8" src={whyWe} alt="WhyImage" />
        </div>
      </div>
    </div>
  );
};

export default About;
