import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AddNewCourse from "../Dashboard/AddNewCourse/AddNewCourse";
import AddNewCourseCategories from "../Dashboard/AddNewCourseCategories/AddNewCourseCategories";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="mx-auto container px-4">
      <div className="dashboard-text pt-4">
        <span className="text-4xl uppercase text-slate-900">demo</span>
        &nbsp;&nbsp;
        <span className="text-4xl uppercase text-slate-900">Dash</span>
        <span className="text-4xl uppercase text-red-500">Board</span>
      </div>
      <hr className="dashboard-hr mb-4 mx-auto" />
      <div className="mt-2">
        <div className="flex">
          <div className="side-menu flex justify-center align-items-center px-3 mb-5">
            <nav className="dash-nav">
              <NavLink
                activeClassName="dashboard-navText-active"
                className="dashboard-navText pt-5 mb-5 uppercase"
                to="/AddNewCourse"
              >
                add new course
              </NavLink>
              <NavLink
                activeClassName="dashboard-navText-active"
                className="dashboard-navText pt-5 mb-5 uppercase"
                to="/AddNewCourseCategories"
              >
                add new course categories
              </NavLink>
            </nav>
            {/* 1st div  */}
          </div>

          <div className="dashboard-section">
            <Routes>
              <Route index element={<AddNewCourse />} />
              <Route path="/AddNewCourse" element={<AddNewCourse />} />
              <Route path="/AddNewCourseCategories" element={<AddNewCourseCategories />} />
            </Routes>
          </div>

          {/* main div  */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
