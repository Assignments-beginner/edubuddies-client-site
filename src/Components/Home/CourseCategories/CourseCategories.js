import React from "react";
import "./CourseCategories.css";
import { Link } from "react-router-dom";
import Category1 from "../../../Images/categories/programming_fundamentals.jpg";
import Category2 from "../../../Images/categories/Software_Development.jpg";
import Category3 from "../../../Images/categories/Web_development.jpg";
import Category4 from "../../../Images/categories/AI.jpg";
import Category5 from "../../../Images/categories/Game_development.webp";
import Category6 from "../../../Images/categories/machine_Learning.webp";

const CourseCategories = () => {
  return (
    <div className="mt-12">
      <h1 className="text-center text-3xl uppercase font-semibold md:mb-9 mb-5 text-red-500">
        Our Course Categories
      </h1>
      <div className="flex justify-center">
        <div className="grid gap-6 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
          {/* Fundamental  */}
          <Link to="/ProgrammingCourses">
            <div className="cat-box duration-300">
              <img className="w-60 h-44 cat-box-image" src={Category1} alt="" />
              <div className="absolute">
                <span className="text-white text-left stroke text-md p-2 left-4 bottom-4 absolute">
                  Programming <br /> Fundamentals
                </span>
              </div>
            </div>
          </Link>
          {/* Software  */}
          <Link to="/SoftDevCourses">
            <div className="cat-box duration-300">
              <img className="w-60 h-44 cat-box-image" src={Category2} alt="" />
              <div className="absolute">
                <span className="text-white text-left stroke text-md p-2 left-4 bottom-4 absolute">
                  Software <br /> Development
                </span>
              </div>
            </div>
          </Link>
          {/* Web  */}
          <Link to="/WebDevCourses">
            <div className="cat-box duration-300">
              <img className="w-60 h-44 cat-box-image" src={Category3} alt="" />
              <div className="absolute">
                <span className="text-white text-left stroke text-md p-2 left-4 bottom-4 absolute">
                  Web <br /> Development
                </span>
              </div>
            </div>
          </Link>
          {/* AI  */}
          <Link to="/AiCourses">
            <div className="cat-box duration-300">
              <img className="w-60 h-44 cat-box-image" src={Category4} alt="" />
              <div className="absolute">
                <span className="text-white text-left stroke text-md p-2 left-4 bottom-4 absolute">
                  Artificial <br /> Intelligence
                </span>
              </div>
            </div>
          </Link>
          {/* Game  */}
          <Link to="/GameDevCourses">
            <div className="cat-box duration-300">
              <img className="w-60 h-44 cat-box-image" src={Category5} alt="" />
              <div className="absolute">
                <span className="text-white text-left stroke text-md p-2 left-4 bottom-4 absolute">
                  Game <br /> Development
                </span>
              </div>
            </div>
          </Link>
          {/* Machine  */}
          <Link to="/MachineCourses">
            <div className="cat-box duration-300">
              <img className="w-60 h-44 cat-box-image" src={Category6} alt="" />
              <div className="absolute">
                <span className="text-white text-left stroke text-md p-2 left-4 bottom-4 absolute">
                  Machine <br /> Learning
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
