import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mt-24 px-6 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-16 lg:px-16 xl:px-16 py-16 mx-auto text-gray-900">
      {/* // Contact Form */}
      <div>
        <div>
          <h1 className="text-left text-3xl uppercase font-semibold md:mb-9 mb-5 text-red-500">
            Contact Us
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="text-left">
            {/* <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span> */}
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 py-3 px-4 rounded-lg"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="text-left">
            {/* <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span> */}
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 py-3 px-4 rounded-lg"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="mt-3 text-left">
          {/* <span className="uppercase text-sm text-gray-600 font-bold">
              Subject
            </span> */}
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 py-3 px-4 rounded-lg"
            type="text"
            placeholder="Subject"
          />
        </div>
        <div className="mt-3 text-left">
          {/* <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span> */}
          <textarea
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 py-3 px-4 rounded-lg"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="mt-3 text-left">
          <button className="uppercase text-sm tracking-wide bg-gray-900 text-gray-100 py-3 px-4 hover:bg-gray-800 rounded-lg w-64">
            Send Message
          </button>
        </div>
      </div>
      <div className="bg-white py-12 mx-4 lg:mx-20 xl:mx-20 md:mx-20 rounded-lg drop-shadow-xl">
        <div className="text-left px-16">
          <div className="flex items-baseline">
            <div>
              <FontAwesomeIcon
                className="text-lg text-red-500 pr-4"
                icon={faLocationDot}
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">New York Office</h2>
              <span className="text-sm">
                Maypole Crescent 70-80 Upper St Norwich NR2 1LT
              </span>
            </div>
          </div>
        </div>
        <div className="text-left px-16 mt-10">
          <div className="flex items-baseline">
            <div>
              <FontAwesomeIcon
                className="text-lg text-red-500 pr-4"
                icon={faEnvelope}
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">Email Us Directly</h2>
              <span className="text-sm">
                support@eduBuddies.com <br />
                info@eduBuddies.com
              </span>
            </div>
          </div>
        </div>
        <div className="text-left px-16 mt-10">
          <div className="flex items-baseline">
            <div>
              <FontAwesomeIcon
                className="text-lg text-red-500 pr-4"
                icon={faPhone}
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">Phone</h2>
              <span className="text-sm">
                +(224) 762 442 32 <br />
                +(426) 742 26 44
              </span>
            </div>
          </div>
        </div>
        <div className="text-left px-16 mt-10">
          <div className="flex items-baseline">
            <FontAwesomeIcon
              className="text-lg text-white pr-4"
              icon={faCircle}
            />
            <div>
              <h2 className="text-lg font-bold">FOLLOW US</h2>
              <div className="mt-4">
                <button class="bg-blue-300 px-3 py-2 text-white inline-flex items-center space-x-2 rounded">
                  <FontAwesomeIcon
                    className="text-xl text-white"
                    icon={faFacebook}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
