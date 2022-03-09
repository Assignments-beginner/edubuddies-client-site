import React from "react";

const WrongAdminRoute = () => {
  return (
    <div className="text-center mt-5">      
      <span className="text-4xl">
        <i className="fas fa-exclamation-triangle text-yellow-300"></i>
      </span>
      <h1 className="text-4xl">
        Sorry you're not an <span className="text-red-500">Admin</span>{" "}
      </h1>
    </div>
  );
};

export default WrongAdminRoute;
