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
    <div className="container mx-auto px-4 md:px-11 mt-12">
      <h1 className="text-center text-3xl uppercase font-semibold md:mb-9 mb-5 text-red-500">
        Our Course Categories
      </h1>
      <div className="w-full"> 
        <div className="grid gap-20 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 lg:px-56 xl:px-56 md:px-12 px-0">
          {/* Fundamental  */}
          <div className="w-60 h-44 card duration-300">
            <img className="w-full h-full card-image" src={Category1} alt="" />
            <div className="centered stroke p-2 absolute">
              <span className="text-white text-center text-xl">
                Programming Fundamentals
              </span>
            </div>
          </div>
          {/* Software  */}
          <div className="w-60 h-44 card duration-300">
            <img className="w-full h-full card-image" src={Category2} alt="" />
            <div className="bottom-8 left-8 right-8 top-8 stroke absolute">
              <span className="text-white text-center text-xl">
                Software Development
              </span>
            </div>
          </div>
          {/* Web  */}
          <div className="w-60 h-44 card duration-300">
            <img className="w-full h-full card-image" src={Category3} alt="" />
            <div className="bottom-8 left-8 right-8 top-8 stroke absolute">
              <span className="text-white text-center text-xl">
                Web Development
              </span>
            </div>
          </div>
          {/* AI  */}
          <div className="w-60 h-44 card duration-300">
            <img className="w-full h-full card-image" src={Category4} alt="" />
            <div className="bottom-8 left-8 right-8 top-8 stroke absolute">
              <span className="text-white text-center text-xl">
                Artificial Intelligence
              </span>
            </div>
          </div>          
          {/* Game  */}
          <div className="w-60 h-44 card duration-300">
            <img className="w-full h-full card-image" src={Category5} alt="" />
            <div className="bottom-8 left-8 right-8 top-8 stroke absolute">
              <span className="text-white text-center text-xl">
                Game Development
              </span>
            </div>
          </div>
          {/* Machine  */}
          <div className="w-60 h-44 card duration-300">
            <img className="w-full h-full card-image" src={Category6} alt="" />
            <div className="bottom-8 left-8 right-8 top-8 stroke absolute">
              <span className="text-white text-center text-xl">
                Machine Learning
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
