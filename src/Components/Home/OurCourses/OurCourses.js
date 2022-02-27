import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./OurCourses.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addCourse } from "../../../Redux/edubuddySlice";
import { Link } from "react-router-dom";

const OurCourses = () => {
  const courses = useSelector((state) => state.edu.courses);
  const dispatch = useDispatch();
  console.log(courses);

  useEffect(() => {
    const url = "http://localhost:5000/courses";
    axios.get(url).then((res) => {
      dispatch(addCourse(res.data));
    });
  }, []);

  // const courses = [
  // 	{
  // 		courseName: "Learn Java",
  // 		courseSubtitle:
  // 			"A high-level, class-based, object-oriented programming language.",
  // 	},
  // 	{
  // 		courseName: "Learn Python",
  // 		courseSubtitle:
  // 			"A interpreted high-level general-purpose programming language.",
  // 	},
  // 	{
  // 		courseName: "Learn JavaScript",
  // 		courseSubtitle:
  // 			"A lightweight, interpreted programming language with first-class function.",
  // 	},
  // 	{
  // 		courseName: "Learn Database",
  // 		courseSubtitle:
  // 			"A database is an organized collection of data stored and accessed electronically.",
  // 	},
  // 	{
  // 		courseName: "Learn React",
  // 		courseSubtitle: "A JavaScript library created by Facebook. ",
  // 	},
  // 	{
  // 		courseName: "Learn C/C++",
  // 		courseSubtitle: "A general-purpose programming language. ",
  // 	},
  // ];
  return (
    <div className="container mx-auto px-4 md:px-11">
      <h1 className="text-center text-3xl uppercase font-semibold mt-24 md:mb-9 mb-5 text-red-500">
        Choose Course Categories
      </h1>
      <div className="w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto md:gap-5 gap-4">
          {courses?.map((course, key) => (
            <div
              key={key}
              className="flex border-2 p-5  justify-center OurCourses hover:cursor-pointer duration-500 rounded-lg  bg-white"
              style={{ alignItems: "center" }}
            >
              <Link to={`/singlecourse/${course._id}`}>
                <div className="mr-3 ">
                  <FontAwesomeIcon
                    className="text-slate-900 icon p-3"
                    style={{ fontSize: "60px" }}
                    icon={faCode}
                  />
                </div>
                <div className=" text-left p-3">
                  <div className="md:text-xl text-red-500 text-xl font-extrabold mb-1">
                    {course?.title}
                  </div>
                  <div className="text-base">{course?.category}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
