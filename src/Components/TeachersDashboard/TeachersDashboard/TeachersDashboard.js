import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faPlayCircle,
  faRightFromBracket,
  faTrash,
  faUserGraduate,
  faGraduationCap,
  faBell,
  faBars,
  faXmark,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

import { Link, Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const TeachersDashboard = () => {
  const { user } = useAuth();
  const [isActive, setActive] = useState("block");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="dashboard min-h=[70vh]">
      <div className="relative min-h-screen md:flex ">
        <aside
          /* onClick={handleToggle} */
          className=" sticky top-0 z-50"
          aria-label="Sidebar"
        >
          <div
            className={`md:relative absolute delay-500  ${
              isActive ? "block right" : "left"
            }`}
          >
            <div className="py-36 overflow-y-auto bg-gray-900 text-left flex items-center justify-center min-h-screen">
              <div className="flex justify-center">
                <div className="fixed top-0 right-0">
                  <div className="block md:hidden">
                    <button
                      className={`flex  rounded-lg p-1 justify-start m-2 ${
                        isActive ? "block" : null
                      }`}
                      onClick={handleToggle}
                    >
                      <FontAwesomeIcon
                        className="mx-2 text-2xl text-white icon text-left"
                        icon={isActive ? faXmark : faBars}
                      />
                    </button>
                  </div>
                </div>
                <div className="fixed top-4">
                  <div className="flex flex-col items-center">
                    <Link to="/home">
                      <img
                        className="w-34 h-16"
                        src="https://i.ibb.co/HzzW0Xv/logo.png"
                        alt=""
                      />
                    </Link>
                    <span className="text-slate-100 text-sm uppercase">
                      Teachers Dashboard
                    </span>
                  </div>
                </div>
                <div>
                  <ul className="space-y-5">
                    <li>
                      <NavLink
                        to=""
                        className="li text-lg rounded-lg text-white "
                      >
                        <FontAwesomeIcon
                          className="mx-2 text-red-500 icon"
                          icon={faChalkboardUser}
                        />
                        <span className="mx-3">Dashboard</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="allTeachers"
                        className="li text-lg rounded-lg  text-white "
                      >
                        <FontAwesomeIcon
                          className="mx-2 text-red-500 icon"
                          icon={faUserGraduate}
                        />
                        <span className="mx-3">All Teachers</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="bestPerformer"
                        className="li text-lg rounded-lg  text-white "
                      >
                        <FontAwesomeIcon
                          className="mx-2 text-red-500 icon"
                          icon={faGraduationCap}
                        />
                        <span className="mx-3">Best Performer</span>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="addCourse"
                        className="li rounded-lg text-lg text-white "
                      >
                        <FontAwesomeIcon
                          className="mx-2 text-red-500 icon"
                          icon={faPlayCircle}
                        />
                        <span className="mx-3">Add Course</span>
                      </NavLink>
                    </li>
                    <li>
                      <Link
                        to="updateCourse"
                        className="li text-lg rounded-lg  text-white"
                      >
                        <FontAwesomeIcon
                          className="mx-2 text-red-500 icon"
                          icon={faPen}
                        />
                        <span className="mx-3">Update Course</span>
                      </Link>
                    </li>
                    <li>
                      <NavLink
                        to="removeCourse"
                        className="li text-lg rounded-lg  text-white "
                      >
                        <FontAwesomeIcon
                          className="mx-2 text-red-500 icon"
                          icon={faTrash}
                        />
                        <span className="mx-3">Remove Course</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="postNotice"
                        className="li text-lg rounded-lg  text-white "
                      >
                        <FontAwesomeIcon
                          className="mx-2 text-red-500 icon"
                          icon={faChalkboardUser}
                        />
                        <span className="mx-3">Post Notice</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="fixed bottom-20">
                  <Link
                    to=""
                    className="logout text-lg rounded-lg  text-white "
                  >
                    <FontAwesomeIcon
                      className="mx-2 text-red-500 icon "
                      icon={faRightFromBracket}
                    />
                    <span className="mx-3">Log Out</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex-1 mx-auto">
          <div className="py-3 bg-white border-b-2 flex items-center justify-between px-8 sticky top-0">
            <div className="flex items-center">
              <div className="block md:hidden">
                <button
                  className={`flex bg-red-500 rounded-lg p-1 justify-start ${
                    isActive ? "block" : null
                  }`}
                  onClick={handleToggle}
                >
                  <FontAwesomeIcon
                    className="mx-2 text-2xl text-white icon text-left"
                    icon={isActive ? faXmark : faBars}
                  />
                </button>
              </div>

              <h2 className="uppercase text-xl hidden md:block">
                Welcome, Honorable Teacher
              </h2>
              <Link to="">
                <FontAwesomeIcon
                  className="mx-6 mt-1 text-red-500 icon text-xl"
                  icon={faBell}
                />
              </Link>
            </div>
            <div className="flex items-center profile-imgName">
              <div className="flex flex-col items-end">
                <span className="text-black uppercase text-[14px]">
                  {user.displayName}
                </span>
                <Link to="/userProfile" className="text-sm text-red-500">
                  View Profile
                </Link>
              </div>
              <img
                className="user-img h-14 w-14 rounded-full ml-2"
                src={user.photoURL}
                alt="TeacherImage"
              />
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default TeachersDashboard;
