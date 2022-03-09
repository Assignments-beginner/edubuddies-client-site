import React from "react";

const WrongTeacherRoute = () => {
  return (
    <div className="text-center mt-5">
      <h1>
        Sorry you're not a <span className="text-danger">Teacher</span>{" "}
      </h1>
      <span className="display-1">
        <i className="fas fa-exclamation-triangle text-warning"></i>
      </span>
    </div>
  );
};

export default WrongTeacherRoute;
