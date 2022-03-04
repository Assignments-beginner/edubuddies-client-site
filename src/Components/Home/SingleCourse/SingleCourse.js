import React from "react";
import "./SingleCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faClockFour,
  faArrowRight,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../SingleCourse/SingleCourse.css";

const SingleCourse = () => {
  const { id } = useParams();

  const courses = useSelector((state) => state.edu.courses);
  const sigleData = courses && courses.find((item) => item._id === id);

  return (
    <div className="entireCourse pb-20 container mx-auto">
      <div className="instructor px-4 text-left">
        <h1 className="text-3xl text-left font-bold mt-8">
          {sigleData?.title}
        </h1>
        <h4 className="text-left mb-8">{sigleData?.category}</h4>
        <h2 className="text-xl Instructor">Instructor</h2>
        <div className="Instructor-box rounded-lg border-2 p-4 mt-2 flex justify-start items-center">
          <div className="overflow-hidden rounded-full">
            <img
              className="teacher-img rounded-full"
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt=""
            />
          </div>
          <div>
            <span className="teacher-heading pl-3">
              Senior programmer graduated from MIT University, India.
            </span>
          </div>
        </div>
        <h2 className="text-2xl text-left mt-10">About</h2>
        <div>
          <div className="mx-auto">
            <p className="text-justify">{sigleData?.description}</p>
          </div>
        </div>
      </div>
      <div className="px-4 courseCard">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={sigleData.image} alt="" />
          <div className="flex justify-between items-center">
            <div className="border-2 w-72 mt-4 mx-auto bg-gray-800 rounded-lg">
              <h4 className="text-xl font-black ml-3 pt-1 text-red-500">
                <CountUp start={0} end={270} duration={2.75} suffix={"+ "} />
              </h4>
              <h4 className=" text-xl ml-3 pb-1 text-white"> Videos</h4>
            </div>
            <div className="border-2 w-72 mt-4 mx-auto bg-gray-800 rounded-lg">
              <h4 className="text-xl text-red-500 font-black ml-3 pt-1">
                <CountUp start={0} end={1000} duration={2.75} suffix={"+ "} />
              </h4>
              <h4 className="text-white text-xl ml-3 pb-1"> Quizes</h4>
            </div>
          </div>
          <div className="flex justify-between pt-8 px-10">
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-slate-900 pr-2 text-2xl"
                icon={faUsers}
              />
              <span>Enrolled 1232</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-slate-900 pr-2 text-2xl"
                icon={faClockFour}
              />
              <span>{sigleData?.courseDuration} Hours</span>
            </div>
          </div>
          <hr className="w-5/6 mt-6 mx-auto" />
          <div className="px-4 pt-8 pb-3">
            <div className="flex justify-between items-center px-4 pb-2">
              <span>Promo Code</span>
              <span className="text-3xl">$ {sigleData?.courseFee}</span>
            </div>
            <Link to="/milestone">
              <button
                className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center"
                type="submit"
              >
                Get This Course &nbsp;&nbsp;
                <FontAwesomeIcon
                  className="text-white pr-2 text-xl"
                  icon={faArrowRight}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
