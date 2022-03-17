import React from "react";

const CareerGuides = () => {
  return (
    <div className="mt-8 mb-16 xl:px-52 lg:px-52 md:px-12 px-12">
      <h1 className="font-bold text-3xl text-slate-900 uppercase mb-8">
        Our<span className="text-red-500"> Career Guidelines</span>
      </h1>
      <p className="text-md text-justify">
        This website is specifically designed for young and ambitions people
        looking to launch their careers in turbulent 2022. Based on our
        experience, this website is also popular among the parents of fresh
        graduates who are looking for ways to support their children at this
        pivotal point of their life, known as a career choice.
      </p>
      <br />
      <p className="text-md text-justify">
        We like to repeat there is no magic in internship and job search
        process. It is the magic outcome you get after you do the right steps.
        Treat this website as an accelerator of career launch. Because the
        object is very concrete and not abstract - getting clarity, acting
        strategically, and landing a dream internship or job.
      </p>
      <div>
        <h2 className="mt-8 mb-4 text-lg font-bold uppercase text-left">
          THIS COURSE IS FOR
        </h2>
        <ul className="lg:w-3/4 xl:w-3/4 md:w-3/4 w-2/2">
          <li className="text-left">
            Students and fresh graduates who are about to launch their career,
            including securing an internship or the first full-time job
          </li>
          <br />
          <li className="text-left">
            Parents whose children are about to launch their career
          </li>
          <br />
          <li className="text-left">
            Experienced professionals who are struggling with career choices
          </li>
          <br />
          <li className="text-left">
            University career counsellors who would like to get a new
            perspective on career coaching, refresh their knowledge, enrich it
            with practical tips that are relevant to today’s job market.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CareerGuides;
