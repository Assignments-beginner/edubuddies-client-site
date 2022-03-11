import React from "react";
import { Link } from "react-router-dom";
import BestOfLuck from "../../../Images/greetings.jpg";

////// Under-Construction //////

const Greetings = () => {
  return (
    <div className="text-center">
      <h2 className="text-slate-900 text-4xl mt-8 uppercase">
        Thanks for the <br /> <span className="text-red-500">registration</span>{" "}
        !
      </h2>
      <p className="mt-6 mb-6">
        Wait a bit for the page reload for auto log in.
      </p>
      <div className="flex justify-center px-4">
        <img className="rounded-3xl" width="500" height="350" src={BestOfLuck} alt="" />
      </div>
      <div className="mb-12 mt-6">
        <Link to="/home">
          <span className="text-red-500">Back To Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Greetings;
