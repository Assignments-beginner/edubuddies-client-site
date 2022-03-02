import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const CoursesList = () => {
  const courses = useSelector((state) => state.edu.courses);

  const deleteCOurse = (id) => {
    console.log(id);
    axios.delete("http://localhost:5000/deleteCourses");
  };
  return (
    <div>
      <h1>All Students List</h1>

      <div>
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
                  <td class="border border-slate-300 ...">
                    {item.courseStatus}
                  </td>
                  <td class="border border-slate-300 ...">
                    <button onClick={() => deleteCOurse(item._id)}>
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

export default CoursesList;
