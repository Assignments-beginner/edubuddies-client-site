import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "../Footer/Footer.css";
import { Link, useLocation } from "react-router-dom";

/*  Please don't edit this file - Team Leader (Avishek) */

const Footer = () => {
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
  }, [location.pathname]);
  return (
    <footer
      style={{ display: `${hide}` }}
      className="main-footer text-center text-gray-300 bg-gray-900 pt-8"
    >
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pb-8">
        <div className="logo-part pl-14">
          <Link to="/home">
            <img
              className="w-28 mb-4"
              // src="https://i.ibb.co/mbrPZ39/edu-buddies.png"
              src="https://i.ibb.co/mbrPZ39/edu-buddies.png"
              alt="footer logo"
            />
          </Link>
          <p className="text-md">
            Great lesson ideas and plans for students, that students can observe
            their learning.
          </p>
          <div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://img.freepik.com/free-photo/pile-3d-facebook-logos_1379-875.jpg?w=740"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:text-red-500 border border-slate-100 hover:border-red-500 py-1.5 px-2.5 inline-flex items-center space-x-2 rounded-full"
              >
                <FontAwesomeIcon className="text-xl" icon={faFacebookF} />
              </a>
              <a
                href="https://img.freepik.com/free-photo/pile-3d-twitter-logos_1379-879.jpg?w=740"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:text-red-500 border border-slate-100 hover:border-red-500 p-1.5 inline-flex items-center space-x-2 rounded-full"
              >
                <FontAwesomeIcon className="text-xl" icon={faTwitter} />
              </a>
              <a
                href="https://img.freepik.com/free-photo/pile-3d-pinterest-logos_1379-877.jpg?w=740"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:text-red-500 border border-slate-100 hover:border-red-500 p-1.5 inline-flex items-center space-x-2 rounded-full"
              >
                <FontAwesomeIcon className="text-xl" icon={faPinterest} />
              </a>
            </div>
          </div>
        </div>
        <div className="ul-section">
          <ul className="text-left">
            <h5 className="pt-6 text-lg uppercase font-black mb-4 text-red-500">
              Resources
            </h5>
            <li className="mb-4 hover:text-red-500">
              <FontAwesomeIcon className="mt-1" icon={faAnglesRight} />
              <Link to="/home"> Home </Link>
            </li>
            <li className="mb-4 hover:text-red-500">
              <FontAwesomeIcon className="mt-1" icon={faAnglesRight} />
              <Link to="/courses"> Programs </Link>
            </li>
            <li className="mb-4 hover:text-red-500">
              <FontAwesomeIcon className="mt-1" icon={faAnglesRight} />
              <Link to="/blog"> Blogs </Link>
            </li>
          </ul>
        </div>
        <div className="ul-section">
          <ul className="text-left">
            <h5 className="pt-6 uppercase font-black text-lg mb-4 text-red-500">
              About Us
            </h5>
            <li className="mb-4 hover:text-red-500">
              <FontAwesomeIcon className="mt-1" icon={faAnglesRight} />
              <Link to="/OurAdmins"> Admins </Link>
            </li>
            <li className="mb-4 hover:text-red-500">
              <FontAwesomeIcon className="mt-1" icon={faAnglesRight} />
              <Link to="/OurDevelopers"> Developers </Link>
            </li>
            <li className="mb-4 hover:text-red-500">
              <FontAwesomeIcon className="mt-1" icon={faAnglesRight} />
              <Link to="/OurTerms"> Our Terms </Link>
            </li>
          </ul>
        </div>
        <div className="ul-section">
          <ul className="text-left">
            <h5 className="pt-6 text-lg uppercase font-black mb-4 text-red-500">
              Support
            </h5>
            <li className="mb-4 hover:text-red-500">
              <FontAwesomeIcon className="mt-1" icon={faAnglesRight} />
              <Link to="/CareerGuideline"> Career Guides</Link>
            </li>
            <li className="mb-4 hover:text-red-500">
              <FontAwesomeIcon className="mt-1" icon={faAnglesRight} />
              <Link to="/contact"> Contact Us </Link>
            </li>
            <li className="mb-4 hover:text-red-500">
              <FontAwesomeIcon className="mt-1" icon={faAnglesRight} />
              <Link to="/Faq"> FAQs </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="new" />
      <div className="text-center py-6">
        <span>Copyright- © 2022 - </span>
        <a className="text-red-500 font-black" href="test">
          Team Edu Buddies
        </a>
      </div>
    </footer>
  );
};

export default Footer;
