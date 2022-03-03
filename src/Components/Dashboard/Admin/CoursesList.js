import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { updateAlert } from "../../../Utility/Utility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const CoursesList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const url = "https://fierce-caverns-90976.herokuapp.com/courses";
    axios.get(url).then((res) => {
      const data = res.data.filter((item) => item.courseStatus !== "delete");
      setCourses(data);
    });
  }, [courses]);

  // courses update
  const updateCourseStatus = (id, statusName) => {
    const status = {
      statusName: statusName,
    };
    console.log(status);
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able ${statusName} this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      confirmButtonText: "Yes, Approved it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`http://localhost:5000/courses/${id}`, status)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Updated Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-red-600 text-3xl font-bold mt-2 mb-6">
        All Course List
      </h1>
      <table className="min-w-full divide-y divide-red-300 border border-red-300">
        <thead className="bg-gray-800">
          <tr>
            <th
              scope="col"
              className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest"
            >
              Title
            </th>
            <th
              scope="col"
              className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest"
            >
              Category
            </th>
            <th
              scope="col"
              className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest"
            >
              Fee
            </th>
            <th
              scope="col"
              className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest"
            >
              Status
            </th>
            <th
              scope="col"
              className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-red-300">
          {courses &&
            courses.map((item, key) => (
              <tr key={key}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {item.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {item.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {item.courseFee} TK
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => updateAlert(item._id, "approved", "courses")}
                  >
                    {item?.courseStatus === "approved" ? (
                      <div className="text-sm font-medium text-white bg-green-600 px-3 py-1 rounded-md">
                        {item?.courseStatus}
                      </div>
                    ) : (
                      <div className="text-sm font-medium text-white bg-yellow-600 px-3 py-1 rounded-md">
                        {item?.courseStatus}
                      </div>
                    )}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => updateAlert(item._id, "delete", "courses")}
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
    </div>
  );
};

export default CoursesList;
