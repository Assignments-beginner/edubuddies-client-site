import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container overflow-hidden flex flex-col lg:flex-row justify-between mx-auto p-4">
        <div className="container block md:flex text-sm mt-6 lg:mt-0">
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <Link to="/home">
              <img
                className="w-40 mb-4"
                src="https://i.ibb.co/HzzW0Xv/logo.png"
                alt="Main Logo"
              />
            </Link>
            <li>
              <p className="pr-8 text-gray-400 text-justify">
                Great lesson ideas and lesson plans for ESL teachers! Educators
                can customize lesson plans to best.Great lesson ideas and lesson
                plans for ESL teachers! Educators can customize lesson plans to
                best.Great lesson ideas and lesson plans for ESL teachers!
                Educators can customize lesson plans to best.
              </p>
            </li>
            <li>
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
            </li>
          </ul>

          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
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
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
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
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
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
      <div className="border-t border-gray-800 flex flex-col md:flex-row justify-center items-center p-6 mt-4 text-gray-300">
        <div>Copyright &copy; 2022- TEAM SSYAAN - All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
