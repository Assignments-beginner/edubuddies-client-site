import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const RemoveCourse = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const url = `https://fierce-caverns-90976.herokuapp.com/getCourse/${user?.email}`;
    axios.get(url).then((res) => {
      const data = res.data.filter((item) => item.courseStatus !== "delete");
      setCourses(data);
    });
  }, [courses, user?.email]);

  return (
    <div className="container mx-auto mt-4 px-4 md:px-11  ">
      <h1 className="text-center text-3xl uppercase font-semibold md:mb-9 mb-5 text-red-500">
        Romove Your Course From List
      </h1>
      <div className="mx-auto grid grid-cols-12 gap-9">
        {courses &&
          courses?.map((item, key) => (
            <div className="md:col-span-4 col-span-12" key={key}>
              <Link to={`/teachersDashboard/CourseDetails/${item?._id}`}>
                <div
                  className="border rounded-lg card mx-auto duration-300 bg-white"
                  style={{ maxWidth: "400px" }}
                >
                  <div className="overflow-hidden">
                    <img
                      className="object-fill h-52 w-full card-image rounded-t-lg"
                      src={item?.image}
                      alt={item?.title}
                    />
                  </div>
                </div>
              </Link>
              {/* <button className="bg-red-600" onClick={() => updateCourseStatus(item._id, "delete")}>Remove from List</button> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RemoveCourse;
