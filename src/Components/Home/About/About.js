import React from "react";
import underConstruction from "../../../Images/underConstruction.jpg";
const About = () => {
  return (
    <div>
      <div className="text-4xl font-black mt-5 mb-3 text-blue-700">About Us</div>
      <div className="p-12 flex justify-center">
        <img className="rounded-3xl shadow-xl" src={underConstruction} alt="" />
      </div>
    </div>
  );
};

export default About;
