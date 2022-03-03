import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const RecycleBin = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const url = "https://fierce-caverns-90976.herokuapp.com/courses";
    axios.get(url).then((res) => {
      const data = res.data.filter((item) => item.courseStatus === "delete");
      setCourses(data);
    });
  }, [courses]);

  // delete courses

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

  // restore the Courses
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
      confirmButtonText: "Yes, Restore it!",
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
    <div>
      <div>
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
              </tr>
            </thead>
            <tbody>
              {courses &&
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
                    >
                      <button>Restore</button>
                    </td>
                    <td class="border border-slate-300 ... text-red-700 p-4">
                      <button onClick={() => deleteCOurse(item._id)}>
                        Delete Permanently
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h1>There is No Deleted Courses</h1>
          </div>
        )}

        <hr />
      </div>
      <div>
        <h1 className="text-4xl">Teachers</h1>
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
