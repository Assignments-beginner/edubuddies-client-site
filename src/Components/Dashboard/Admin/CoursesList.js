import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addCourse } from "../../../Redux/edubuddySlice";
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

    // axios.patch(`http://localhost:5000/courses/${id}`).then((res) => {
    //   if (res.data.modifiedCount > 0) {
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: "Updated Successfully",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   }
    // });
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
                    <button
                      onClick={() => updateCourseStatus(item._id, "approved")}
                    >
                      {item.courseStatus}
                    </button>
                  </td>
                  <td class="border border-slate-300 ...">
                    <button
                      onClick={() => updateCourseStatus(item._id, "delete")}
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

export default CoursesList;
