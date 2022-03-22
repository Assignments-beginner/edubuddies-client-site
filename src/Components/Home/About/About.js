import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import about from "../../../Images/about.png";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const About = () => {
  const { user } = useAuth();
  return (
    <div className="py-14">
      <div
        className="container px-12 mx-auto 
	  lg:flex
	  items-start 
	  justify-between 
	  md:block 
	  sm:block
	  "
      >
        <div
          className="flex items-start justify-center
		xl:text-left 
		lg:text-left 
		md:text-left 
		sm:text-center
		px-6 
		w-full"
        >
          <div>
            <div className="text-4xl font-black my-5 text-red-500 uppercase">
              Why Choose Us
            </div>
            <div className="text-4xl font-black mt-5 mb-6">
              Career Guideline <br /> For Everyone
            </div>
            <div className="text-justify">
              This website is specifically designed for young and ambitions
              people looking to launch their careers in turbulent 2022 who wants
              to improve technology skills management, increase knowledge
              acquisition and retention, reduce liability through compliance
              training can learn from the <strong>Edu Buddies</strong> online
              training platform.
            </div>
            <div>
              <Link to="/allCourseList">
                <button className="bg-red-500 text-white py-3 px-8 mt-10 rounded-md mr-4 hover:bg-white border hover:border hover:border-red-500 hover:text-red-500 transition-all ease-linear duration-300">
                  Explore Courses
                </button>
              </Link>
              {!user?.email && (
                <Link to="/signup">
                  <button className="py-4 px-8 mt-10 rounded-md hover:text-red-500 transition-all ease-linear duration-300">
                    Sign Up Now
                    <FontAwesomeIcon
                      className="ml-4 faArrowRightLong"
                      icon={faArrowRightLong}
                    />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 lg:mt-0 xl:mt-0 w-full flex items-start justify-center">
          <div>
            <img src={about} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
