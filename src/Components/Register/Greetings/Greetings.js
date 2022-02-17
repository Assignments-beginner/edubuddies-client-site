import React from "react";
import { Link } from "react-router-dom";

////// Under-Construction //////

const Greetings = ({ backgroundColor = "#F7F7F7", children }) => {
  return (
    <div className="text-center">
      <h2 className="text-slate-900 text-4xl mt-8 mb-72 uppercase">
        Thanks for the <br /> <span className="text-red-500">registration</span>{" "}
        !
      </h2>
      <div className="mb-12">
        <Link to="/home">
          <span className="text-red-500">Back To Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Greetings;
