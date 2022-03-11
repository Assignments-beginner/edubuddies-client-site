import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mt-24 px-16 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-16 lg:px-16 xl:px-16 py-16 mx-auto text-gray-900">
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
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Lets talk about everything!
          </h2>
          <div className="text-gray-700 mt-3">
            Hate forms? Send us an <span className="underline">email</span>{" "}
            instead.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
