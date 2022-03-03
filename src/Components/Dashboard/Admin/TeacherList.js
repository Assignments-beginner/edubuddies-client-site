import axios from "axios";
import React, { useEffect, useState } from "react";
import { updateAlert } from "../../../Utility/Utility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios
      .get("https://fierce-caverns-90976.herokuapp.com/teachers")
      .then((res) => {
        const restData = res.data.filter((item) => item.status !== "deleted");
        setTeachers(restData);
      });
  }, [teachers]);

  return (
    <div className="container mx-auto">
      <h1 className="text-red-600 text-3xl font-bold mt-2 mb-6">
        Our Honour Teacher List
      </h1>
      <div>
        <table className="min-w-full divide-y divide-red-300 border border-red-300">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest">
                Photo
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest">
                Name
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest">
                Designation
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest">
                Gender
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest">
                Email
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest">
                country
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest">
                Details
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest">
                Status
              </th>
              <th className="py-4 text-center text-sm font-bold text-white uppercase tracking-widest">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-red-300">
            {teachers &&
              teachers.map((item, key) => (
                <tr key={key}>
                  <td className="px-6 py-2 whitespace-nowrap text-gray-600">
                    <img
                      className="rounded-full"
                      width="50px"
                      height="50px"
                      src={item.image}
                      alt={item.name}
                    />
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-gray-600">
                    {item.name}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-gray-600">
                    {item.designation}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-gray-600">
                    {item.gender}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-gray-600">
                    {item.email}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-gray-600">
                    {item.country}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-gray-600">
                    <button>View</button>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-gray-600">
                    <button
                      onClick={() =>
                        updateAlert(item._id, "verified", "teacherStatus")
                      }
                    >
                      {item?.status === "verified" ? (
                        <div className="text-sm font-medium text-white bg-green-600 px-3 py-1 rounded-md">
                          {item?.status}
                        </div>
                      ) : (
                        <div className="text-sm font-medium text-white bg-yellow-600 px-3 py-1 rounded-md">
                          {"pending"}
                        </div>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-gray-600">
                    <button
                      onClick={() =>
                        updateAlert(item._id, "deleted", "teacherStatus")
                      }
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
    </div>
  );
};

export default TeacherList;
