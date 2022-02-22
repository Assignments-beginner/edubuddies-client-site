import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { EffectFade, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
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
          <div className="slider-text text-left absolute top-1/4 right-1/4">
            <p className="text-yellow-500 font-bold text-lg tracking-wider">
              {" "}
              Learn & Achieve{" "}
            </p>
            <h1 className="text-5xl mb-8 text-white uppercase font-bold leading-normal">
              Find The Right Online <br /> Tutor For You
            </h1>
            <p className="mb-8 text-gray-300 text-xl">
              Better Education For A Better World. Best Industry Leaders And
              Learn Courses Online <br /> “Learning to code has the inadvertent
              effect of teaching you how to think,” says Adrian Degus{" "}
            </p>
            <Link to="/Courses">
              <button className="border-2 border-yellow-600 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg">
                Ready To Get Started ?
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
          <div className="slider-text text-left absolute top-1/4 right-1/4 ">
            <p className="text-yellow-500 font-bold text-lg tracking-wider">
              {" "}
              Learn & Achieve{" "}
            </p>
            <h1 className="text-5xl mb-8 text-white uppercase font-bold leading-normal">
              Become A Perfect Developer <br /> With Edu Buddies
            </h1>
            <p className="mb-8 text-gray-300 text-xl">
              Better Education For A Better World. Best Industry Leaders And
              Learn Courses Online <br /> “Learning to code has the inadvertent
              effect of teaching you how to think,” says Adrian Degus.{" "}
            </p>
            <Link to="/Courses">
              <button className="border-2 border-yellow-600 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg">
                Ready To Get Started ?
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://i.ibb.co/6gCTndZ/slider-3.png"
            alt="SliderImage"
          />
          <div className="slider-text text-left absolute top-1/4 right-1/4">
            <p className="text-yellow-500 font-bold text-lg tracking-wider">
              {" "}
              Learn & Achieve{" "}
            </p>
            <h1 className="text-5xl mb-8 text-white uppercase font-bold leading-normal">
              Explore A Different Way <br /> To Learn Coding
            </h1>
            <p className="mb-8 text-gray-300 text-xl">
              Better Education For A Better World. Best Industry Leaders And
              Learn Courses Online <br /> “Learning to code has the inadvertent
              effect of teaching you how to think,” says Adrian Degus{" "}
            </p>
            <Link to="/Courses">
              <button className="border-2 border-yellow-600 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg">
                Ready To Get Started ?
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
