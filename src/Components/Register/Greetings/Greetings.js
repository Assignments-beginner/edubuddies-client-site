import React from "react";
import { Link } from "react-router-dom";

////// Under-Construction //////

const Greetings = ({ backgroundColor = "#F7F7F7", children }) => {
  return (
    <div className="text-center">
      <h2 className="text-slate-900 text-4xl mt-8 uppercase">
        Thanks for the <br /> <span className="text-red-500">registration</span>{" "}
        !
      </h2>
      <p className="mb-72 mt-6">Wait a bit for the page reload for auto log in.</p>
      <div className="mb-12">
        <Link to="/home">
          <span className="text-red-500">Back To Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Greetings;
