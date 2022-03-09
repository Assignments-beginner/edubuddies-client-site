import React from "react";

const Success = () => {
  const ip = "::ffff:10.1.20.63";
  console.log(ip.split("f:")[1]);
  console.log(new Date().toLocaleDateString());
  console.log(new Date().toLocaleTimeString());
  return (
    <div>
      <h1>Success</h1>
    </div>
  );
};

export default Success;
