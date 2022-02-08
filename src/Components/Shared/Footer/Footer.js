import React from "react";

const Footer = ({ backgroundColor = "#EDF2F7", children }) => {
  return (
    <div style={{ backgroundColor }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-xl pb-4">Copyright © 2022 All Rights Reserved</h1>
    </div>
  );
};

export default Footer;
