<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center lg:text-left text-gray-300 bg-gray-900 pt-10">
            <div className="container mx-auto">
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <Link to="/home">
                                <img className="w-52 -mt-8 mb-4" src="https://i.ibb.co/HzzW0Xv/logo.png" alt="footer logo" />
                            </Link>
                            <p className="w-80 mx-auto cursor-pointer"> Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                        </div>
                        <div>
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                            About Us
                            </h6>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Developers </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Student List </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Privacy Policy </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Sitemap </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Tutorial </Link>
                            </p>
                        </div>
                        <div>
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                            Support
                            </h6>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Contact Us </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Guidelineso </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Supports </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Terms & Conditions </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Roadmap </Link>
                            </p>
                        </div>
                        <div className="contact-area">
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                            Our Programme
                            </h6>
                            <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Web Design </Link>
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Web Development </Link>
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Wordpress development </Link>
                            </p>
                            <p className="flex items-center justify-center md:justify-start hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Digital Marketing </Link>
                            </p>
                            <p className="flex items-center justify-center md:justify-start hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> SEO </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center pb-8">
                    <span>Copyright; © 2022 - </span>
                    <a className="text-orange-500 font-semibold" href="test"> Edu Buddies Team</a>
                </div>
            </div>
        </footer>
    );
=======
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-6">
      <div className="container px-6 overflow-hidden flex flex-col lg:flex-row justify-between mx-auto p-4">
        <div className="container block md:flex text-sm mt-6 lg:mt-0">
          {/* //////////// Edu Buddies /////////////// */}
          <div className="w-1/4 text-gray-700 font-thin flex flex-col justify-center">
            <div className="flex justify-center">
              <Link to="/home">
                <img
                  className="w-40 mb-4"
                  src="https://i.ibb.co/HzzW0Xv/logo.png"
                  alt="Main Logo"
                />
              </Link>
            </div>
            <div className="flex justify-center">
              <p className="p-2 text-gray-400 text-justify">
                Great lesson ideas and lesson plans for ESL teachers! Educators
                can customize lesson plans to best.Great lesson ideas and lesson
                plans for ESL teachers! Educators can customize lesson plans to
                best.Great lesson ideas and lesson plans for ESL teachers!
                Educators can customize lesson plans to best.
              </p>
            </div>
            <div className="social w-1/5 mx-5 my-5 flex flex-start">
              <a
                className="flex items-center text-gray-300 hover:text-white mr-6 no-underline"
                href="test"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                className="flex items-center text-gray-300 hover:text-white mr-6 no-underline"
                href="test"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                className="flex items-center text-gray-300 hover:text-white no-underline"
                href="test"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
          {/* ////////////// Three Columns ////////////// */}
          <div className="flex justify-between w-3/4 pl-12">
            <ul className="text-gray-700 list-none font-thin flex flex-col text-left">
              <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
                Developers
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer">
                  Developer API
                </p>
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer">
                  Our Developers
                </p>
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer">
                  Documentation
                </p>
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer">
                  Tutorials
                </p>
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer">
                  Career With Us
                </p>
              </li>
            </ul>
            <ul className="text-gray-700 list-none font-thin flex flex-col text-left">
              <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
                Support
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer">
                  Support
                </p>
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer">
                  Guides
                </p>
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer">
                  Terms & Conditions
                </p>
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer">
                  Road Map
                </p>
              </li>
            </ul>
            <ul className="text-gray-700 list-none font-thin flex flex-col text-left">
              <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
                Our Programs
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white cursor-pointer">
                  Web Design
                </p>
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer">
                  Web Development
                </p>
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer">
                  Wordpress Development
                </p>
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer">
                  SEO
                </p>
              </li>
              <li>
                <p className="inline-block py-2 pl-3 pr-5 text-gray-300 hover:text-white no-underline cursor-pointer">
                  Digital Marketing
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t text-sm border-gray-800 flex flex-col md:flex-row justify-center items-center p-6 text-gray-300">
        <span>Copyright &copy; 2022- TEAM SSYAAN - All Rights Reserved</span>
      </div>
    </footer>
  );
>>>>>>> 21e3c56b344750946c9277d32d821b2eb624fa9f
};

export default Footer;
