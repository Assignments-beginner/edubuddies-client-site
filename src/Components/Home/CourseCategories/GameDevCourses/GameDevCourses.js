import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faBookmark,
  faClock,
  faStar as faRegularStar,
} from "@fortawesome/free-regular-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import Rating from "react-rating";
import Game1 from "../../../../Images/Game_Dev/core.png";
import Game2 from "../../../../Images/Game_Dev/Unreal.png";
import Game3 from "../../../../Images/Game_Dev/unity.webp";
import demoUser from "../../../../Images/user-demo.png";
import "../GameDevCourses/GameDevCourses.css";

const GameDevCourses = () => {
  return (
    <div className="mt-8 mb-16">
      <h1 className="font-bold text-3xl text-slate-900 uppercase">
        <span className="text-red-500">Game</span> Development Courses
      </h1>
      <div className="GameDev">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="border rounded-lg bg-white">
              <div className="overflow-hidden rounded-t-lg">
                <img className="w-full h-40 rounded-t-lg" src={Game1} alt="" />
                <button
                  className="
                    top-4 
                    right-4 
                    absolute 
                    px-1.5
                    pt-1.5
                    bg-white"
                >
                  <FontAwesomeIcon
                    className="text-red-500 text-xl"
                    icon={faBookmark}
                  />
                </button>
                <div className="bg-slate-900 top-4 left-4 absolute px-2 rounded">
                  <span className="text-white text-xs">Game Development</span>
                </div>
              </div>
              {/* Course Details Body  */}
              <div className="px-4 pb-4">
                <div className="py-6 flex flex-col items-start">
                  <Rating
                    initialRating="3.5"
                    readonly
                    emptySymbol={
                      <FontAwesomeIcon
                        className="text-yellow-300 text-md"
                        icon={faRegularStar}
                      />
                    }
                    fullSymbol={
                      <FontAwesomeIcon
                        className="text-yellow-300 text-md"
                        icon={faStar}
                      />
                    }
                  />

                  <h1
                    style={{ fontSize: "1.15rem" }}
                    className=" mt-1 mb-3 text-stone-700 hover:text-red-500 duration-300 cursor-pointer"
                  >
                    Gaming Mode On
                  </h1>
                  {/* Course Instructor  */}
                  <div className="flex items-center">
                    <div className="w-8 h-8">
                      <img
                        className="rounded-full mr-2"
                        src={demoUser}
                        alt=""
                      />
                    </div>
                    <p className="text-gray-900 w-full leading-none text-sm">
                      by John Smith
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex items-center justify-between pt-3">
                  <div className="flex text-stone-500 text-sm">
                    {/* Duration   */}
                    <div className="flex items-center mr-4">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="mr-1 font-thin text-xl text-gray-400"
                      />
                      <span className="text-sm text-gray-400">7 hrs</span>
                    </div>
                    {/* Students  */}
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="mr-1 font-thin text-lg text-gray-400"
                      />
                      <span className="text-sm text-gray-400">1024</span>
                    </div>
                  </div>
                  {/* Fee */}
                  <div>
                    <h6 className="text-2xl text-red-500">599 $</h6>
                  </div>
                </div>
                {/* End of Bottom Bar  */}
              </div>
              {/* End of Course Details Body  */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-lg bg-white">
              <div className="overflow-hidden rounded-t-lg">
                <img className="w-full h-40 rounded-t-lg" src={Game2} alt="" />
                <button
                  className="
                    top-4 
                    right-4 
                    absolute 
                    px-1.5
                    pt-1.5
                    bg-white"
                >
                  <FontAwesomeIcon
                    className="text-red-500 text-xl"
                    icon={faBookmark}
                  />
                </button>
                <div className="bg-slate-900 top-4 left-4 absolute px-2 rounded">
                  <span className="text-white text-xs">Game Development</span>
                </div>
              </div>
              {/* Course Details Body  */}
              <div className="px-4 pb-4">
                <div className="py-6 flex flex-col items-start">
                  <Rating
                    initialRating="3.5"
                    readonly
                    emptySymbol={
                      <FontAwesomeIcon
                        className="text-yellow-300 text-md"
                        icon={faRegularStar}
                      />
                    }
                    fullSymbol={
                      <FontAwesomeIcon
                        className="text-yellow-300 text-md"
                        icon={faStar}
                      />
                    }
                  />

                  <h1
                    style={{ fontSize: "1.15rem" }}
                    className=" mt-1 mb-3 text-stone-700 hover:text-red-500 duration-300 cursor-pointer"
                  >
                    Gaming Mode On
                  </h1>
                  {/* Course Instructor  */}
                  <div className="flex items-center">
                    <div className="w-8 h-8">
                      <img
                        className="rounded-full mr-2"
                        src={demoUser}
                        alt=""
                      />
                    </div>
                    <p className="text-gray-900 w-full leading-none text-sm">
                      by John Smith
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex items-center justify-between pt-3">
                  <div className="flex text-stone-500 text-sm">
                    {/* Duration   */}
                    <div className="flex items-center mr-4">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="mr-1 font-thin text-xl text-gray-400"
                      />
                      <span className="text-sm text-gray-400">7 hrs</span>
                    </div>
                    {/* Students  */}
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="mr-1 font-thin text-lg text-gray-400"
                      />
                      <span className="text-sm text-gray-400">1024</span>
                    </div>
                  </div>
                  {/* Fee */}
                  <div>
                    <h6 className="text-2xl text-red-500">599 $</h6>
                  </div>
                </div>
                {/* End of Bottom Bar  */}
              </div>
              {/* End of Course Details Body  */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-lg bg-white">
              <div className="overflow-hidden rounded-t-lg">
                <img className="w-full h-40 rounded-t-lg" src={Game3} alt="" />
                <button
                  className="
                    top-4 
                    right-4 
                    absolute 
                    px-1.5
                    pt-1.5
                    bg-white"
                >
                  <FontAwesomeIcon
                    className="text-red-500 text-xl"
                    icon={faBookmark}
                  />
                </button>
                <div className="bg-slate-900 top-4 left-4 absolute px-2 rounded">
                  <span className="text-white text-xs">Game Development</span>
                </div>
              </div>
              {/* Course Details Body  */}
              <div className="px-4 pb-4">
                <div className="py-6 flex flex-col items-start">
                  <Rating
                    initialRating="3.5"
                    readonly
                    emptySymbol={
                      <FontAwesomeIcon
                        className="text-yellow-300 text-md"
                        icon={faRegularStar}
                      />
                    }
                    fullSymbol={
                      <FontAwesomeIcon
                        className="text-yellow-300 text-md"
                        icon={faStar}
                      />
                    }
                  />

                  <h1
                    style={{ fontSize: "1.15rem" }}
                    className=" mt-1 mb-3 text-stone-700 hover:text-red-500 duration-300 cursor-pointer"
                  >
                    Gaming Mode On
                  </h1>
                  {/* Course Instructor  */}
                  <div className="flex items-center">
                    <div className="w-8 h-8">
                      <img
                        className="rounded-full mr-2"
                        src={demoUser}
                        alt=""
                      />
                    </div>
                    <p className="text-gray-900 w-full leading-none text-sm">
                      by John Smith
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex items-center justify-between pt-3">
                  <div className="flex text-stone-500 text-sm">
                    {/* Duration   */}
                    <div className="flex items-center mr-4">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="mr-1 font-thin text-xl text-gray-400"
                      />
                      <span className="text-sm text-gray-400">7 hrs</span>
                    </div>
                    {/* Students  */}
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="mr-1 font-thin text-lg text-gray-400"
                      />
                      <span className="text-sm text-gray-400">1024</span>
                    </div>
                  </div>
                  {/* Fee */}
                  <div>
                    <h6 className="text-2xl text-red-500">599 $</h6>
                  </div>
                </div>
                {/* End of Bottom Bar  */}
              </div>
              {/* End of Course Details Body  */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default GameDevCourses;
