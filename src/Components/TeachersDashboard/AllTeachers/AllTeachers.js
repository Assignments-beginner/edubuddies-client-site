import React, { useEffect, useState } from "react";

const AllTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("https://fierce-caverns-90976.herokuapp.com/teachers")
      .then((res) =>
        res.json("https://fierce-caverns-90976.herokuapp.com/teachers")
      )
      .then((data) => setTeachers(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl">All Teachers</h1>
    </div>
  );
};

export default AllTeachers;
