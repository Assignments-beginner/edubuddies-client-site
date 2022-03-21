import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faChalkboardUser,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";

const coreBg = {
  backgroundImage: `url("https://i.ibb.co/NKSqhjb/core-concept-banner1.jpg")`,
  backgroundColor: "rgba(0, 0, 0, 0.190)",
  backgroundBlendMode: "darken",
  //   backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const detailBg = {
  backgroundColor: "rgba(0, 0, 0, 0.685)",
};

const CoreFeatures = () => {
  return (
    <div style={coreBg} className="my-24">
      <div className="mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 ">
          <div style={detailBg} className="py-9 px-10 xl:px-20 lg:px-20">
            <div className="md:text-2xl text-1xl font-black text-red-500 md:text-left text-center">
              CORE FEATURES
            </div>
            <h1 className="md:text-3xl text-2xl font-semibold my-4 text-white  md:text-left text-center">
              See What Our Missions Are
            </h1>
            <div className="flex py-5 align-middle justify-items-start  duration-300 rounded-md ">
              <div
                className="mr-5 p-5 bg-red-700 text-white rounded-md my-auto"
                style={{ maxHeight: 100 }}
              >
                <FontAwesomeIcon
                  className="icon"
                  style={{ fontSize: "35px" }}
                  icon={faUserGraduate}
                />
              </div>
              <div className=" text-left my-auto">
                <div className="md:text-2xl text-xl font-bold mb-2 text-white">
                  Get Certificate
                </div>
                <div className="text-sm text-white text-justify">
                  Complete our courses and you will get a valuable certificate
                  which will help you to get hired in IT farms.
                </div>
              </div>
            </div>
            <div className="flex py-5 align-middle justify-items-start  duration-300 rounded-md ">
              <div
                className="mr-5 px-3.5 py-5 bg-red-700 text-white rounded-md  my-auto"
                style={{ maxHeight: 100 }}
              >
                <FontAwesomeIcon
                  className="icon"
                  style={{ fontSize: "35px" }}
                  icon={faChalkboardUser}
                />
              </div>
              <div className="text-left my-auto">
                <div className="md:text-2xl text-xl font-bold mb-2 text-white">
                  Best Online Courses
                </div>
                <div className="text-sm text-white text-justify">
                  We will ensure that you will get one of the best courses from
                  our instructors for your better future career.
                </div>
              </div>
            </div>
            <div className="flex py-5 align-middle justify-items-start  duration-300 rounded-md ">
              <div
                className="mr-5 p-5 bg-red-700 text-white rounded-md  my-auto"
                style={{ maxHeight: 100 }}
              >
                <FontAwesomeIcon
                  className="icon"
                  style={{ fontSize: "35px" }}
                  icon={faTableList}
                />
              </div>
              <div className="text-left my-auto">
                <div className="md:text-2xl text-xl font-bold mb-2 text-white">
                  24x7 Program
                </div>
                <div className="text-sm text-white text-justify">
                  We will help you 24/7 on our support session workshop with our
                  instructors.
                </div>
              </div>
            </div>
          </div>
          <div className="empty-bg"></div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CoreFeatures;
