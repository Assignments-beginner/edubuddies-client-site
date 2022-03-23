import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faGraduationCap,
  faTrophy,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

const bgStyle = {
  backgroundImage: `url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80&fbclid=IwAR0JK_qc5p0bsUANAJ4mut40A6zxRmfQNpi1w9J88mHmEFT1wJxptgSF9YA")`,
  backgroundColor: "rgba(0, 3, 32, 0.66)",
  backgroundBlendMode: "darken",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};

const Achievement = () => {
  return (
    <div className="pb-12">
      <h1 className="text-center text-4xl uppercase font-semibold mt-14 md:mb-9 mb-5 text-red-500">
        Our Achievement
      </h1>
      <div style={bgStyle}>
        <div className="mx-auto px-6 py-12">
          <div className="text-3xl font-black text-center text-white mb-4">
            We are Happy For This
          </div>
          <p className="text-center text-gray-300">
            We are a growing team of professional trainers who love our work but
            overall <br /> helping our students reach their maximum potential in
            their career
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 container mx-auto lg:h-48 sm:h-72 items-center pb-28">
          <div className="flex items-center justify-center border border-gray-400 py-3 rounded-xl mx-5 mb-2">
            <FontAwesomeIcon
              className="text-5xl text-red-500"
              icon={faPerson}
            />
            <span className="text-3xl text-white font-black ml-3">
              <CountUp start={0} end={3000} duration={2.75} suffix={"+ "} />
            </span>
            <span className=" text-gray-300 text-2xl ml-3"> Students</span>
          </div>
          <div className="flex items-center justify-center border border-gray-400 py-3 rounded-xl mx-5 mb-2">
            <FontAwesomeIcon
              className="text-5xl text-red-500"
              icon={faGraduationCap}
            />
            <span className="text-3xl text-white font-black ml-3">
              <CountUp start={0} end={1000} duration={2.75} suffix={"+"} />
            </span>
            <span className="text-xl text-gray-300 ml-3"> Graduates</span>
          </div>
          <div className="flex items-center justify-center border border-gray-400 py-3 rounded-xl mx-5 mb-2">
            <FontAwesomeIcon
              className="text-5xl text-red-500"
              icon={faTrophy}
            />
            <span className="text-3xl text-white font-black ml-3">
              <CountUp start={0} end={64} duration={2.75} suffix={"+"} />
            </span>
            <span className="text-xl text-gray-300 ml-3"> Awards</span>
          </div>
          <div className="flex items-center justify-center border border-gray-400 py-3 rounded-xl mx-5 mb-2">
            <FontAwesomeIcon className="text-5xl text-red-500" icon={faVideo} />
            <span className="text-3xl text-white font-black ml-3">
              <CountUp start={0} end={900} duration={2.75} suffix={"+"} />
            </span>
            <span className="text-xl text-gray-300 ml-3"> Videos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
