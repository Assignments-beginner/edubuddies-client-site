import axios from "axios";
import React, { useEffect, useState } from "react";
import { updateAlert } from "../../../Utility/Utility";

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
    <div>
      <h1 className="text-4xl">Teacher List</h1>
      <div>
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
            {teachers &&
              teachers.map((item) => (
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
                      {item.status ? item.status : "pending"}
                    </button>
                  </td>
                  <td class="border border-slate-300 ...">
                    <button
                      onClick={() =>
                        updateAlert(item._id, "deleted", "teacherStatus")
                      }
                    >
                      DELETE
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
