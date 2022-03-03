import React from "react";
import { useParams } from "react-router-dom";

const MyCourseDetails = () => {
  const { courseId } = useParams();
  console.log(courseId);
  return (
    <div>
      <h1 className="text-3xl text-red-600">Details Of Your Course</h1>
    </div>
  );
};

export default MyCourseDetails;
