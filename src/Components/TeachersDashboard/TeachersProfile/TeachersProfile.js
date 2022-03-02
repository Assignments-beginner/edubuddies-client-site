import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeachersProfile = () => {
  const { teacherId } = useParams();
  const [singleTeacher, setSingleTeacher] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/singleTeacher/${teacherId}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  console.log(teacherId);

  return (
    <div>
      <h1 className="text-3xl">All Teachers Details</h1>
    </div>
  );
};

export default TeachersProfile;