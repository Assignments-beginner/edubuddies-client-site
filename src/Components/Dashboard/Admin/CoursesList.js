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
      setCourses(res.data);
    });
  }, [courses]);

  const deleteCOurse = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/deleteCourses/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                showConfirmButton: false,
                icon: "success",
                title: "Your file has been deleted",
                timer: 1000,
              });
            }
          });
      }
    });
  };

  // courses update
  const updateCourseStatus = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      confirmButtonText: "Yes, Approved it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`http://localhost:5000/courses/${id}`).then((res) => {
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
      <h1 className="text-4xl mt-5">All Students List</h1>
<br/>
      <div>
        <table class="ml-72 mb-24 border-collapse border border-slate-400 ...">
          <thead>
            <tr>
              <th class="border border-slate-300 ... p-8">Title</th>
              <th class="border border-slate-300 ... p-8">Category</th>
              <th class="border border-slate-300 ... p-8">Fee</th>
              <th class="border border-slate-300 ... p-8">Status</th>
              <th class="border border-slate-300 ... p-8">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses &&
              courses.map((item) => (
                <tr >
                  <td class="border border-slate-300 ... p-4">{item.title}</td>
                  <td class="border border-slate-300 ... p-4">{item.category}</td>
                  <td class="border border-slate-300 ... p-2">
                    {item.courseFee} TK
                  </td>
                  <td class="border border-slate-300 ...">
                    <button onClick={() => updateCourseStatus(item._id)}>
                      {item.courseStatus}
                    </button>
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
