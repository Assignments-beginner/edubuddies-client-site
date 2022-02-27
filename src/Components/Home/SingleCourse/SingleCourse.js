import React from "react";
import ReactPlayer from "react-player";
import "./SingleCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleCourse = () => {
  const { id } = useParams();

  const courses = useSelector((state) => state.edu.courses);

  const sigleData = courses && courses.find((item) => item._id === id);
  console.log(sigleData);

  return (
    <div className="pb-24 ">
      <h1 className="text-2xl my-8 ">{sigleData?.title}</h1>
      <div className="flex item-center justify-center mx-auto ">
        <div className="flex justify-center px-4">
          <img
            className="rounded-3xl"
            width="500"
            height="350"
            src={sigleData.image}
            alt=""
          />
        </div>
        <div>
          {" "}
          <p className="my-8 w-96 text-justify ">{sigleData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
