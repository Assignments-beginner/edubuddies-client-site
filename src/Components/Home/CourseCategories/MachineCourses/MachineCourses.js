import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MachineCourses = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div data-aos="fade-right">
        <h1 className="lg:text-6xl xl:text-6xl md:text-5xl text-4xl font-thin text-center text-slate-900 mt-12 mb-96">
          Coming Soon...
        </h1>
      </div>
    </div>
  );
};

export default MachineCourses;
