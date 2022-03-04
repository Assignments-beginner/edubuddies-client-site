import axios from "axios";
import React, { useEffect, useState } from "react";
import { updateAlert } from "../../../Utility/Utility";
import { deleteAlert } from "../../../Utility/Utility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateLeft,
  faTrash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const RecycleBin = () => {
  const [courses, setCourses] = useState([]);
  const [teacher, setTeacher] = useState([]);

  // load courses
  useEffect(() => {
    const url = "https://fierce-caverns-90976.herokuapp.com/courses";
    axios.get(url).then((res) => {
      const data = res.data.filter((item) => item.courseStatus === "delete");
      setCourses(data);
    });
  }, [courses]);

  // load teacher data
  useEffect(() => {
    axios
      .get("https://fierce-caverns-90976.herokuapp.com/teachers")
      .then((res) => {
        const restData = res.data.filter((item) => item.status === "deleted");
        setTeacher(restData);
      });
  }, [teacher]);

  return (
    <div className="container mx-auto">
      <div>
<<<<<<< HEAD
        <h1 className="text-4xl">Courses</h1>
        <br/>
        {courses.length > 0 ? (
          <table class="ml-80 mb-24 border-collapse border border-slate-400 ...">
            <thead>
              <tr className="bg-gray-300 ">
                <th class="border border-slate-300 ... p-6">Title</th>
                <th class="border border-slate-300 ... p-6">Category</th>
                <th class="border border-slate-300 ... p-6">Fee</th>
                <th class="border border-slate-300 ... p-6">Status</th>
                <th class="border border-slate-300 ... p-6">Action</th>
=======
        <h1 className="text-red-600 text-3xl font-bold mt-2 mb-6">
          Action For Courses
        </h1>
        {courses.length > 0 ? (
          <table className="min-w-full divide-y divide-red-300 border border-red-300">
            <thead className="bg-gray-800">
              <tr>
                <th className="py-3 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  Title
                </th>
                <th className="py-3 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  Category
                </th>
                <th className="py-3 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  Fee
                </th>
                <th className="py-3 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  Restore
                </th>
                <th className="py-3 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  Delete
                </th>
>>>>>>> 9d99139684ff7d074450ecc10e27182f6e7182d3
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-red-300">
              {courses &&
<<<<<<< HEAD
                courses.map((item) => (
                  <tr>
                    <td class="border border-slate-300 ... p-4">{item.title}</td>
                    <td class="border border-slate-300 ... p-4">{item.category}</td>
                    <td class="border border-slate-300 ... p-4">
                      {item.courseFee} TK
                    </td>
                    <td
                      onClick={() => updateCourseStatus(item._id, "approved")}
                      class="border border-slate-300 ... p-4"
=======
                courses.map((item, key) => (
                  <tr key={key}>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 border border-red-300">
                      {item.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 border border-red-300">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 border border-red-300">
                      {item.courseFee} TK
                    </td>
                    <td
                      onClick={() =>
                        updateAlert(item._id, "approved", "courses")
                      }
                      className="px-6 py-4 whitespace-nowrap text-gray-600 border border-red-300"
>>>>>>> 9d99139684ff7d074450ecc10e27182f6e7182d3
                    >
                      <button>
                        <FontAwesomeIcon
                          className="mx-2 text-black text-xl"
                          icon={faRotateLeft}
                        />
                      </button>
                    </td>
<<<<<<< HEAD
                    <td class="border border-slate-300 ... text-red-700 p-4">
                      <button onClick={() => deleteCOurse(item._id)}>
                        Delete Permanently
=======
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      <button
                        onClick={() => deleteAlert(item._id, "deleteCourses")}
                      >
                        <FontAwesomeIcon
                          className="mx-2 text-red-500 text-xl"
                          icon={faTrash}
                        />
>>>>>>> 9d99139684ff7d074450ecc10e27182f6e7182d3
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h1>Empty</h1>
          </div>
        )}
      </div>
      <div>
        <h1 className="text-red-600 text-3xl font-bold mb-6 mt-6">
          Action For Teachers
        </h1>

        {teacher.length > 0 ? (
          <table className="min-w-full divide-y divide-red-300 border border-red-300">
            <thead className="bg-gray-800">
              <tr>
                <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  Photo
                </th>
                <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  Name
                </th>
                <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  Designation
                </th>
                <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  Gender
                </th>
                <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  Email
                </th>
                <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  country
                </th>
                <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  Details
                </th>
                <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  Restore
                </th>
                <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest border border-red-300">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-red-300">
              {teacher &&
                teacher.map((item, key) => (
                  <tr key={key}>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 border border-red-300">
                      <img
                        className="rounded-full mx-auto"
                        width="50px"
                        height="50px"
                        src={item.image}
                        alt={item.name}
                      />
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 border border-red-300">
                      {item.name}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 border border-red-300">
                      {item.designation}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 border border-red-300">
                      {item.gender}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 border border-red-300">
                      {item.email}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 border border-red-300">
                      {item.country}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 border border-red-300">
                      <button>
                        <FontAwesomeIcon
                          className="mx-2 text-black text-xl"
                          icon={faEye}
                        />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 border border-red-300">
                      <button
                        onClick={() =>
                          updateAlert(item._id, "verified", "teacherStatus")
                        }
                      >
                        <FontAwesomeIcon
                          className="mx-2 text-black text-xl"
                          icon={faRotateLeft}
                        />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 border border-red-300">
                      <button
                        onClick={() => deleteAlert(item._id, "deleteTeacher")}
                      >
                        <FontAwesomeIcon
                          className="mx-2 text-red-500 text-xl"
                          icon={faTrash}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h1>Empty</h1>
          </div>
        )}
      </div>
      <div>
        <h1 className="text-red-600 text-3xl font-bold mt-2 mb-6">
          Action For Students
        </h1>
      </div>
    </div>
  );
};

export default RecycleBin;
