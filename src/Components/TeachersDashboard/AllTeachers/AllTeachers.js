import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("https://fierce-caverns-90976.herokuapp.com/teachers")
      .then((res) =>
        res.json("https://fierce-caverns-90976.herokuapp.com/teachers")
      )
      .then((data) => setTeachers(data));
  }, []);
  console.log(teachers);
  return (
    <div className="container mx-auto px-4 md:px-11 mb-10 min-h-screen">
      <h1 className="text-center text-3xl uppercase font-semibold mt-4 md:mb-9 mb-5 text-red-500">
        All Of Our Teachers
      </h1>
      <div className="w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto md:gap-5 gap-4">
          {teachers?.map((teacher, key) => (
            <Link
              key={key}
              to={`/singleteacher/${teacher._id}`}
              className="flex justify-start Ourteachers hover:cursor-pointer duration-500 rounded-lg bg-white "
              style={{ alignItems: "center" }}
            >
              <div className="text-left p-5">
                <img
                  className=" rounded-t-md"
                  src={teacher?.image}
                  alt=" TeacherImage"
                />
                <div className="border shadow-lg px-5 pb-2 rounded-b-md">
                  <h3 className="md:text-md text-red-500 text-xl font-extrabold mt-2">
                    {teacher?.name}
                  </h3>
                  <h4>{teacher?.designation}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTeachers;
