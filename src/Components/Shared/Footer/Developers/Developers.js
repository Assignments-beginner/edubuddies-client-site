import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import "../Developers/Developers.css";

const Developers = () => {
  return (
    <div className="mt-8 mb-20">
      <h1 className="font-bold text-3xl text-slate-900 uppercase">
        Our <span className="text-red-500">Developers</span>
      </h1>
      <p className="uppercase  mb-8">a team of junior mern stack developers</p>
      <section className="grid gap-14 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 text-white lg:px-72 xl:px-72 md:px-12 px-0">
        <div className="mx-auto w-[200px] h-[200px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full">
              <img
                src="https://avatars.githubusercontent.com/u/86690202?v=4"
                className="w-full h-full"
                alt=""
              />
              <div
                className="left-4
              bottom-3              
              absolute"
              >
                <span className="stroke rounded px-2  uppercase text-white text-sm font-bold">
                  Ashraful Islam
                </span>
              </div>
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                <div className="text-xs">
                  <h2 className="font-bold text-lg">Md Ashraful Islam</h2>
                  <h2>Mern Stack Developer</h2>
                  <h2>ashrafulislam2880@gmail.com</h2>
                  <h2>01974238487</h2>
                </div>
                <a
                  href="https://www.facebook.com/ashrafonline706/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 bg-slate-900 border border-red-500 py-1.5 px-2.5 inline-flex items-center rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-5 scale-0 group-hover:scale-125"
                >
                  <FontAwesomeIcon className="text-xl" icon={faFacebookF} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Nizam's Profile  */}
        <div className="mx-auto w-[200px] h-[200px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full">
              <img
                src="https://avatars.githubusercontent.com/u/43912849?v=4"
                className="w-full h-full"
                alt=""
              />
              <div
                className="left-4
              bottom-3              
              absolute"
              >
                <span className="stroke rounded px-2 uppercase text-white text-sm font-bold">
                  Nizam Uddin
                </span>
              </div>
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                <div className="text-xs">
                  <h2 className="font-bold text-lg">Nizam Uddin</h2>
                  <h2>Mern Stack Developer</h2>
                  <h2>nizamcse.seu.bd@gmail.com</h2>
                  <h2>01609292828</h2>
                </div>
                <a
                  href="https://www.facebook.com/profile.php?id=100070106431229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 bg-slate-900 border border-red-500 py-1.5 px-2.5 inline-flex items-center rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-5 scale-0 group-hover:scale-125"
                >
                  <FontAwesomeIcon className="text-xl" icon={faFacebookF} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Suny's Profile  */}
        <div className="mx-auto w-[200px] h-[200px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full">
              <img
                src="https://avatars.githubusercontent.com/u/69183694?v=4"
                className="w-full h-full"
                alt=""
              />
              <div
                className="left-4
              bottom-3              
              absolute"
              >
                <span className="stroke rounded px-2 uppercase text-white text-sm font-bold">
                  Mohammad Suny
                </span>
              </div>
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                <div className="text-xs">
                  <h2 className="font-bold text-lg">Mohammed Suny</h2>
                  <h2>Mern Stack Developer</h2>
                  <h2>suny.w68@gmail.com</h2>
                  <h2>01861917938</h2>
                </div>
                <a
                  href="https://www.facebook.com/shoyebmohammed.suny.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 bg-slate-900 border border-red-500 py-1.5 px-2.5 inline-flex items-center rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-5 scale-0 group-hover:scale-125"
                >
                  <FontAwesomeIcon className="text-xl" icon={faFacebookF} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Avishek's Profile  */}
        <div className="mx-auto w-[200px] h-[200px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full">
              <img
                src="https://avatars.githubusercontent.com/u/86649640?v=4"
                className="w-full h-full"
                alt=""
              />
              <div
                className="left-4
              bottom-3              
              absolute"
              >
                <span className="stroke rounded px-2  uppercase text-white text-sm font-bold">
                  Avishek Ataur
                </span>
              </div>
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                <div className="text-xs">
                  <h2 className="font-bold text-lg">Avishek Ataur</h2>
                  <h2>Mern Stack Developer</h2>
                  <h2>avishekataur@gmail.com</h2>
                  <h2>01782869159</h2>
                </div>
                <a
                  href="https://www.facebook.com/avishek.ataur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 bg-slate-900 border border-red-500 py-1.5 px-2.5 inline-flex items-center rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-5 scale-0 group-hover:scale-125"
                >
                  <FontAwesomeIcon className="text-xl" icon={faFacebookF} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Sangita's Profile  */}
        <div className="mx-auto w-[200px] h-[200px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full">
              <img
                src="https://avatars.githubusercontent.com/u/32577044?v=4"
                className="w-full h-full"
                alt=""
              />
              <div
                className="left-4
              bottom-3              
              absolute"
              >
                <span className="stroke rounded px-2  uppercase text-white text-sm font-bold">
                  Sangita Das
                </span>
              </div>
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                <div className="text-xs">
                  <h2 className="font-bold text-lg">Sangita Das</h2>
                  <h2>Mern Stack Developer</h2>
                  <h2>sangita9606@gmail.com</h2>
                  <h2>01628158140</h2>
                </div>
                <a
                  href="https://web.facebook.com/sangita.shormi?_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 bg-slate-900 border border-red-500 py-1.5 px-2.5 inline-flex items-center rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-5 scale-0 group-hover:scale-125"
                >
                  <FontAwesomeIcon className="text-xl" icon={faFacebookF} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developers;
