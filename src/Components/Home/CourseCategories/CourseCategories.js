import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./CourseCategories.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addCourse } from "../../../Redux/edubuddySlice";
import { Link } from "react-router-dom";

const CourseCategories = () => {
  const courses = useSelector((state) => state?.edu?.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = "https://fierce-caverns-90976.herokuapp.com/courses";
    axios.get(url).then((res) => {
      dispatch(addCourse(res?.data));
    });
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 md:px-11">
      <h1 className="text-center text-3xl uppercase font-semibold mt-24 md:mb-9 mb-5 text-red-500">
        Choose Course Categories
      </h1>
      <div className="w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto md:gap-5 gap-4">
          {courses?.map((course, key) => (
            <Link
              key={key}
              to={`/singlecourse/${course._id}`}
              className="flex justify-start border-2 p-5 OurCourses hover:cursor-pointer duration-500 rounded-lg  bg-white"
              style={{ alignItems: "center" }}
            >
              {/* <Link
                className="flex items-center justify-between border-2"
                to={`/singlecourse/${course._id}`}
              > */}
              <div className="">
                <FontAwesomeIcon
                  className="text-slate-900 px-6 icon text-3xl"
                  icon={faCode}
                />
              </div>
              <div className="text-left px-3">
                <div className="md:text-md text-red-500 text-md font-extrabold mb-1">
                  {course?.title}
                </div>
                <div className="text-sm">{course?.category}</div>
              </div>
              {/* </Link> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
