import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faBars,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import useAuth from "../../../hooks/useAuth";
// import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [hide, setHide] = useState("block");
  const location = useLocation();
  useEffect(() => {
    if (location?.pathname.includes("/home")) {
      setHide("block");
    }
    if (location?.pathname.includes("/dashboard")) {
      setHide("none");
    }
    if (location?.pathname.includes("/teachersDashboard")) {
      setHide("none");
    }
    if (location?.pathname.includes("/dashboard")) {
      setHide("none");
    }
    if (location?.pathname.includes("/studentdashboard")) {
      setHide("none");
    }
  }, [location, hide]);

  const { role, user, logOut } = useAuth();

  const toggleFunction = () => {
    const toggleButton = document.getElementById("toogleDiv");
    if (toggleButton.style.display === "none") {
      toggleButton.style.display = "block";
    } else {
      toggleButton.style.display = "none";
    }
  };
  const nav = document.querySelector(".nav");
  const navHeight = 70;
  let lastScrollY = 0;
  const delta = 10;
  function scrolled() {
    let sy = window.scrollY;
    if (Math.abs(lastScrollY - sy) > delta) {
      if (sy > lastScrollY && sy > navHeight) {
        nav?.classList?.add("nav-up");
      } else if (sy < lastScrollY) {
        nav?.classList?.remove("nav-up");
      }
      lastScrollY = sy;
    }
  }
  let didScroll = false;
  window.addEventListener("scroll", function(e) {
    didScroll = true;
  });
  setInterval(function() {
    if (didScroll) {
      scrolled();
      didScroll = false;
    }
  }, 250);

  return (
    <nav
      style={{ display: `${hide}` }}
      className="bg-gray-900 py-3 sticky top-0 z-50 nav"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleFunction}
              type="button"
              className="inline-flex items-center justify-center py-2 px-2 rounded-md text-gray-400 focus:bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <FontAwesomeIcon
                className="text-2xl text-white px-2"
                icon={faBars}
              />
            </button>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <Link to="/home">
              <img
                className="hidden lg:block"
                height="190"
                width="90"
                // src="https://i.ibb.co/mbrPZ39/edu-buddies.png"
                src="https://i.ibb.co/mbrPZ39/edu-buddies.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:block px-8">
              <div className="flex space-x-4">
                <Link
                  className="text-gray-100 hover:bg-red-600 focus:bg-red-600 px-3 py-2 rounded-md text-md font-medium"
                  to="/home"
                >
                  Home
                </Link>
                <Link
                  className="text-gray-100 hover:bg-red-600 focus:bg-red-600 px-3 py-2 rounded-md text-md font-medium"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="text-gray-100 hover:bg-red-600 focus:bg-red-600 px-3 py-2 rounded-md text-md font-medium"
                  to="/allCourseList"
                >
                  Courses
                </Link>
                <Link
                  className="text-gray-100 hover:bg-red-600 focus:bg-red-600 px-3 py-2 rounded-md text-md font-medium"
                  to="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="text-gray-100 hover:bg-red-600 focus:bg-red-600 px-3 py-2 rounded-md text-md font-medium"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>

            {!user?.email && (
              <Link
                className="text-gray-100 hover:bg-red-600 focus:bg-red-600 px-3 py-2 mr-2 border-2 rounded-md text-md font-medium flex items-center justify-center"
                to="/login"
              >
                Sign In
              </Link>
            )}
            {user?.email && (
              <div className="flex">
                <div className="flex userProfile z-20">
                  <div className="flex items-center profile-imgName">
                    <img
                      className="user-img h-8 w-8 rounded-full ring-2 ring-offset-2"
                      src={user.photoURL}
                      alt="User"
                    />
                  </div>
                  <div
                    className="
                text-center
                origin-top-right 
                absolute 
                right-0 
                top-2
                w-40 
                shadow-lg 
                py-1 
                px-1
                mr-12
                mt-10
                bg-white 
                ring-1 
                ring-black 
                ring-opacity-5 
                focus:outline-none 
                hidden 
                show"
                    id="userProfileDiv"
                  >
                    <div className="px-3 py-2 text-left">
                      <span className="text-sm">Signed In As</span>
                      <br />
                      <div className="flex justify-between items-center">
                        <span>{user.displayName}</span>
                        <Link to="/wishCart" className="flex justify-start">
                          <div className="pt-1">
                            <FontAwesomeIcon
                              className="text-red-500 text-lg"
                              icon={faCartShopping}
                            />
                            <div
                              style={{ fontSize: "12px" }}
                              className="text-red-500 px-0.5 font-black absolute right-2 left-34 top-7"
                            >
                              3
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <hr />
                    <Link
                      to="/userProfile"
                      className="text-black-200 hover:bg-red-600 focus:bg-red-600 px-3 py-2 text-left text-md font-medium block hover:text-white"
                    >
                      View Profile
                    </Link>
                    <hr />
                    {role === "Admin" && (
                      <div>
                        <Link
                          className="text-black-200 hover:bg-red-600 focus:bg-red-600 px-3 py-2 text-left text-md font-medium block hover:text-white"
                          to="/dashboard"
                        >
                          Dashboard
                        </Link>
                        <hr />
                      </div>
                    )}

                    {role === "Instructor" && (
                      <div>
                        <Link
                          className="text-black-200 hover:bg-red-600 focus:bg-red-600 px-3 py-2 text-left text-md font-medium block hover:text-white"
                          to="/teachersDashboard"
                        >
                          Dashboard
                        </Link>
                        <hr />
                      </div>
                    )}

                    {role === "Student" && (
                      <div>
                        <Link
                          className="text-black-200 hover:bg-red-600 focus:bg-red-600 px-3 py-2 text-left text-md font-medium block hover:text-white"
                          to="/studentdashboard"
                        >
                          Dashboard
                        </Link>
                        <hr />
                      </div>
                    )}
                    {user?.email && (
                      <p className="text-black-200 hover:bg-red-600 focus:bg-red-600 px-3 py-2 text-left text-md font-medium block hover:text-white">
                        <button onClick={logOut}>Log Out</button>
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={logOut}
                  className="text-gray-100 hover:bg-red-600 pr-2 pl-3 py-2 ml-2 rounded-md text-md font-medium flex items-center justify-center hover:border-red-600"
                >
                  <FontAwesomeIcon
                    className="mr-1 text-white"
                    icon={faRightFromBracket}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden" id="toogleDiv">
        <div className="px-2 pt-2 pb-3 space-y-1 text-center">
          <Link
            to="/home"
            className="text-gray-100 hover:bg-red-600 focus:bg-red-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-100 hover:bg-red-600 focus:bg-red-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/allCourseList"
            className="text-gray-100 hover:bg-red-600 focus:bg-red-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Courses
          </Link>
          <Link
            to="/blog"
            className="text-gray-100 hover:bg-red-600 focus:bg-red-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-gray-100 hover:bg-red-600 focus:bg-red-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
