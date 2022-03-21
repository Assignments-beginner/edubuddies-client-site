import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { EffectFade, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const bgStyle = { top: "20%" };

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop="true"
        effect={"fade"}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img
            className="w-full"
            src="https://i.ibb.co/5WmBpfk/slider-1.png"
            alt="SliderImage"
          />
          <div
            className="slider-text text-left absolute left-1/4"
            style={bgStyle}
          >
            <p className="text-red-500 font-bold text-xl tracking-wider mb-3">
              Learn & Achieve
            </p>
            <h1 className="lg:text-5xl md:text-3xl sm:text-xl mb-4 text-white uppercase font-bold">
              Find The Right Online
            </h1>
            <h3 className="lg:text-3xl md:text-xl sm:hidden md:block lg:block mb-6 text-white uppercase font-bold">
              Tutor For You
            </h3>
            <p className="mb-8 text-gray-300 text-lg sm:hidden lg:block description">
              This is the perfect platform for students and fresh graduates who
              are <br /> about to launch their career, including securing an
              internship or the first full-time job.
            </p>
            <Link to="/allCourseList">
              <button className="border-2 border-red-500 bg-red-500 hover:bg-transparent duration-300 text-white font-bold py-3 px-6 rounded-lg tracking-wider">
                Get Started
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://i.ibb.co/b263ZBR/slider-2.png"
            alt="SliderImage"
          />
          <div
            className="slider-text text-left absolute left-1/4"
            style={bgStyle}
          >
            <p className="text-red-500 font-bold text-xl tracking-wider mb-3">
              Learn & Achieve
            </p>
            <h1 className="lg:text-5xl md:text-3xl sm:text-xl mb-4 text-white uppercase font-bold">
              Become A Developer
            </h1>
            <h3 className="lg:text-3xl md:text-xl sm:hidden md:block lg:block mb-6 text-white uppercase font-bold">
              With Edu Buddies
            </h3>
            <p className="mb-8 text-gray-300 text-lg sm:hidden lg:block description ">
              This website is specifically designed for young and ambitions
              developers looking <br /> to launch their careers in turbulent
              2022.
            </p>
            <Link to="/allCourseList">
              <button className="border-2 border-red-500 bg-red-500 hover:bg-transparent duration-300 text-white font-bold py-3 px-6 rounded-lg tracking-wider">
                Get Started
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://i.ibb.co/bRRHNrv/banner3.png"
            alt="SliderImage"
          />
          <div
            className="slider-text text-left absolute left-1/4"
            style={bgStyle}
          >
            <p className="text-red-500 font-bold text-xl tracking-wider mb-3">
              Learn & Achieve
            </p>
            <h1 className="lg:text-5xl md:text-3xl sm:text-xl mb-4 text-white uppercase font-bold">
              Explore A Different Way
            </h1>
            <h3 className="lg:text-3xl md:text-xl sm:hidden md:block lg:block mb-6 text-white uppercase font-bold">
              To Learn Coding
            </h3>
            <p className="mb-8 text-gray-300 text-lg sm:hidden lg:block description">
              Focus on the fundamentals, learn to ask for help. Put your
              knowledge into action <br /> and explore more than just read
              sample code.
            </p>
            <Link to="/allCourseList">
              <button className="border-2 border-red-500 bg-red-500 hover:bg-transparent duration-300 text-white font-bold py-3 px-6 rounded-lg tracking-wider">
                Get Started
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
