import React from 'react';
import img1 from '../../../images/Teachers/team1.jpg';
import img2 from '../../../images/Teachers/team2.jpg';
import img3 from '../../../images/Teachers/team3.jpg';
import './Teachers.css';


const Teachers = () => {
  return (
   <div className="teachers">
     <div className="team-area">
      <div className="section-title">
        <h1>Our Most
Popular Teachers</h1>
<p>You don't have to struggle alone, you've got our assistance and help.</p>
      </div>
    
      <div className="team-box">
        <div className="box">
          <img src={img2} alt="" />
          <h2>Kelly Franklin</h2>
          <span>Software Engineer</span>
          <ul>
            <li>
              <a href="#"> <i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"> <i className="fab fa-twitter"></i> </a>
            </li>
            <li>
              <a href="#"> <i className="fab fa-linkedin"></i> </a>
            </li>
          </ul>
        </div>

{/* ----------------------------- */}
<div className="box">
          <img src={img1} alt="" />
          <h2>Rakib Siddique</h2>
          <span>Software Engineer</span>
          <ul>
            <li>
              <a href="#"> <i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"> <i className="fab fa-twitter"></i> </a>
            </li>
            <li>
              <a href="#"> <i className="fab fa-linkedin"></i> </a>
            </li>
          </ul>
        </div>
        {/* ------------------------ */}
        <div className="box">
          <img src={img3} alt="" />
          <h2>J.K Alice</h2>
          <span>Software Engineer</span>
          <ul>
            <li>
              <a href="#"> <i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"> <i className="fab fa-twitter"></i> </a>
            </li>
            <li>
              <a href="#"> <i className="fab fa-linkedin"></i> </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
   </div>
  );
};

export default Teachers;