import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const WrongStudentRoute = () => {
  return (
    <div className="text-center mt-8 mb-48">
      <FontAwesomeIcon
        className="text-8xl text-yellow-300"
        icon={faTriangleExclamation}
      />
      <h1 className="text-4xl mt-4">
        Sorry you're not a <span className="text-red-500">Student</span>{" "}
      </h1>
    </div>
  );
};

export default WrongStudentRoute;
