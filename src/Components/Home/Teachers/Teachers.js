import React from "react";
import img1 from "../../../Images/Teachers/team1.jpg";
import img2 from "../../../Images/Teachers/team2.jpg";
import img3 from "../../../Images/Teachers/team3.jpg";
import "./Teachers.css";

const Teachers = () => {
  return (
    <div className="teachers">
      <div className="team-area">
        <div className="text-5xl font-black mt-5 mb-8 text-blue-700">
          Our Beloved Teachers
          <br />
          <span className="text-sm text-black">
            You don't have to struggle alone, you've got our assistance and
            help.
          </span>
        </div>

        <div className="team-box">
          <div className="box">
            <div className="teachers-box">
              <img src={img2} alt="" />
            </div>
            <div>
              <h2 className="mt-4">Kelly Franklin</h2>
              <span>Software Engineer</span>
              <ul>
                <li>
                  <a href="/#">
                    {" "}
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    {" "}
                    <i className="fab fa-twitter"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="/#">
                    {" "}
                    <i className="fab fa-linkedin"></i>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ----------------------------- */}
          <div className="box">
            <div className="teachers-box">
              <img src={img1} alt="" />
            </div>
            <div>
              <h2 className="mt-4">Rakib Siddique</h2>
              <span>Software Engineer</span>
              <ul>
                <li>
                  <a href="/#">
                    {" "}
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    {" "}
                    <i className="fab fa-twitter"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="/#">
                    {" "}
                    <i className="fab fa-linkedin"></i>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* ------------------------ */}
          <div className="box">
            <div className="teachers-box">
              <img src={img3} alt="" />
            </div>
            <div>
              <h2 className="mt-4">J.K Alice</h2>
              <span>Software Engineer</span>
              <ul>
                <li>
                  <a href="/#">
                    {" "}
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    {" "}
                    <i className="fab fa-twitter"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="/#">
                    {" "}
                    <i className="fab fa-linkedin"></i>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
