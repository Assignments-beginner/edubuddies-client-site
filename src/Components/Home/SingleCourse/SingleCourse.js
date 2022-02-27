import React from "react";
import "./SingleCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faClockFour,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleCourse = () => {
  const { id } = useParams();

  const courses = useSelector((state) => state.edu.courses);

  const sigleData = courses && courses.find((item) => item._id === id);
  console.log(sigleData);

  return (
    <div className="flex justify-center pb-24 container mx-auto">
      {/* Course Details  */}
      <div className="w-2/4 px-4">
        <h1 className="text-3xl text-left font-bold my-8">
          {sigleData?.title}
        </h1>
        <div className="mx-auto">
          <p className="my-8 w-96 text-justify">{sigleData?.category}</p>
        </div>
        {/* Instructor  */}
        <h2 className="text-xl text-left">Instructor</h2>
        <div className="flex items-center justify-start rounded-lg border-2 p-4 mt-2">
          <div className="overflow-hidden rounded-full pr-4">
            <img
              className="w-20 h-20 rounded-full"
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt=""
            />
          </div>
          <div>
            <p>Senior programmer graduated from MIT University, India.</p>
          </div>
        </div>
        {/* About  */}
        <h2 className="text-2xl text-left mt-10">About</h2>
        <div>
          <div className="mx-auto">
            <p className="text-justify">{sigleData?.description}</p>
          </div>
        </div>
      </div>
      {/* Course Card Details  */}
      <div class="w-1/3 rounded overflow-hidden shadow-lg mt-12">
        <img class="w-full" src={sigleData.image} alt="" />
        <div className="border-2 h-12 w-72 mt-4 mx-auto"></div>
        {/* Hours + Enrolled  */}
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
        {/* Enroll Button  */}
        <div className="px-4 pt-8 pb-3">
          <div className="flex justify-between items-center px-4 pb-2">
            <span>Promo Code</span>
            <span className="text-3xl">$ {sigleData?.courseFee}</span>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
