import React from "react";

const TeacherCourses = () => {
  return (
    <div className="pb-24 px-3">
      <h1 className="text-3xl uppercase mt-12">Add new course</h1>
      <form className="mx-auto max-w-lg my-12">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              for="grid-coursename"
            >
              Course Name
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-coursename"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              for="grid-milestonename"
            >
              Milestone Name
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-milestonename"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-courseduration"
            >
              Course Duration
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="In Hours"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Milestone Categories
            </label>
            <div className="relative">
              <select
                className="text-sm block appearance-none w-full  border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option className="text-sm">Beginner</option>
                <option className="text-sm">Intermediate</option>
                <option className="text-sm">Advance</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-coursefee"
            >
              <span className="uppercase">Course</span> Fee
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="$"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-8">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              for="grid-contentfile"
            >
              Content Title
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-contentfile"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              for="grid-contentfile"
            >
              Content File
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-contentfile"
              type="file"
            />
          </div>
        </div>
        <div className="flex items-center mt-8 justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherCourses;
