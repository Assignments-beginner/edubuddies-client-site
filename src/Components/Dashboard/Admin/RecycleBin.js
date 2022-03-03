import axios from "axios";
import React, { useEffect, useState } from "react";
import { updateAlert } from "../../../Utility/Utility";
import { deleteAlert } from "../../../Utility/Utility";

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
    <div>
      <div>
        <h1 className="text-4xl">Courses</h1>
        {courses.length > 0 ? (
          <table class="border-collapse border border-slate-400 ...">
            <thead>
              <tr>
                <th class="border border-slate-300 ...">Title</th>
                <th class="border border-slate-300 ...">Category</th>
                <th class="border border-slate-300 ...">Fee</th>
                <th class="border border-slate-300 ...">Status</th>
                <th class="border border-slate-300 ...">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses &&
                courses.map((item) => (
                  <tr>
                    <td class="border border-slate-300 ...">{item.title}</td>
                    <td class="border border-slate-300 ...">{item.category}</td>
                    <td class="border border-slate-300 ...">
                      {item.courseFee} TK
                    </td>
                    <td
                      onClick={() =>
                        updateAlert(item._id, "approved", "courses")
                      }
                      class="border border-slate-300 ..."
                    >
                      <button>Restore</button>
                    </td>
                    <td class="border border-slate-300 ...">
                      <button
                        onClick={() => deleteAlert(item._id, "deleteCourses")}
                      >
                        Delete Permanantly
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

        <hr />
      </div>
      <div>
        <h1 className="text-4xl">Teachers</h1>

        {teacher.length > 0 ? (
          <table class="border-collapse border border-slate-400 ...">
            <thead>
              <tr>
                <th class="border border-slate-300 ...">Photo</th>
                <th class="border border-slate-300 ...">Name</th>
                <th class="border border-slate-300 ...">Designation</th>
                <th class="border border-slate-300 ...">Gender</th>
                <th class="border border-slate-300 ...">Email</th>
                <th class="border border-slate-300 ...">country</th>
                <th class="border border-slate-300 ...">Details</th>
                <th class="border border-slate-300 ...">Status</th>
                <th class="border border-slate-300 ...">Action</th>
              </tr>
            </thead>
            <tbody>
              {teacher &&
                teacher.map((item) => (
                  <tr>
                    <td class="border border-slate-300 ...">
                      <img
                        className="rounded-full"
                        width="50px"
                        height="50px"
                        src={item.image}
                        alt={item.name}
                      />
                    </td>
                    <td class="border border-slate-300 ...">{item.name}</td>
                    <td class="border border-slate-300 ...">
                      {item.designation}
                    </td>
                    <td class="border border-slate-300 ...">{item.gender}</td>
                    <td class="border border-slate-300 ...">{item.email}</td>
                    <td class="border border-slate-300 ...">{item.country}</td>
                    <td class="border border-slate-300 ...">
                      <button>View</button>
                    </td>
                    <td class="border border-slate-300 ...">
                      <button
                        onClick={() =>
                          updateAlert(item._id, "verified", "teacherStatus")
                        }
                      >
                        Restor
                      </button>
                    </td>
                    <td class="border border-slate-300 ...">
                      <button
                        onClick={() => deleteAlert(item._id, "deleteTeacher")}
                      >
                        DELETE Parmanently
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

        <hr />
      </div>
      <div>
        <h1 className="text-4xl">Student</h1>
        <hr />
      </div>
    </div>
  );
};

export default RecycleBin;
