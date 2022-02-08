import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCourse, loadStudent } from "../../../Redux/edubuddySlice";
import Banner from "../Banner/Banner";

const Home = () => {
  const [student, setStudent] = useState();
  const dispath = useDispatch();

  const allStudent = useSelector((state) => state.edu.student);
  console.log(allStudent);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispath(loadStudent(data));
      });
  }, []);

  return (
    <div>
      <h1 className="text-4xl">All Home Component Call From Here</h1>
      <Banner />
    </div>
  );
};

export default Home;
