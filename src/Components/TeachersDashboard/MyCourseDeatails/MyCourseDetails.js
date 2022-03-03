import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyCourseDetails = () => {
  const { courseId } = useParams();
  const [courseDetails, setcourseDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/CourseDetails/${courseId}`)
      .then((res) => res.json())
      .then((data) => setcourseDetails(data));
  }, []);
  console.log(courseDetails);
  return (
    <div>
      <h1 className="text-3xl text-red-600">Details Of Your Course</h1>
    </div>
  );
};

export default MyCourseDetails;
