import React from "react";

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
              className="w-full bg-slate-100 text-gray-900 mt-2 py-3 px-4 rounded-lg"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="text-left">
            {/* <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span> */}
            <input
              className="w-full bg-slate-100 text-gray-900 mt-2 py-3 px-4 rounded-lg"
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
            className="w-full bg-slate-100 text-gray-900 mt-2 py-3 px-4 rounded-lg"
            type="text"
            placeholder="Subject"
          />
        </div>
        <div className="mt-3 text-left">
          {/* <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span> */}
          <textarea
            className="w-full h-32 bg-slate-100 text-gray-900 mt-2 py-3 px-4 rounded-lg"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="mt-3 text-left">
          <button className="uppercase text-sm tracking-wide bg-gray-900 text-gray-100 py-3 px-4 hover:bg-gray-800 rounded-lg w-64">
            Send Message
          </button>
        </div>
      </div>
      <div className="bg-white mx-4 lg:mx-20 xl:mx-20 md:mx-20 rounded-lg shadow-md">
        <div className="text-left px-16">
          <div>
            <h2 className="text-2xl">New York Office</h2>
            <span className="text-sm">
              Maypole Crescent 70-80 Upper St Norwich NR2 1LT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
