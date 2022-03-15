import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faUsers,
  faBookmark,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addCourse } from "../../../Redux/edubuddySlice";
import demoUser from "../../../Images/user-demo.png";

SwiperCore.use([Autoplay, Pagination]);

const Courses = () => {
  const courses = useSelector((state) => state?.edu?.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = "https://fierce-caverns-90976.herokuapp.com/courses";
    axios.get(url).then((res) => {
      dispatch(addCourse(res?.data));
    });
  }, [dispatch]);
  console.log(courses);

  return (
    <div className="container mx-auto px-4 md:px-11">
      <h1 className="text-center text-3xl uppercase font-semibold mt-14 md:mb-9 mb-5 text-red-500">
        Popular Courses
      </h1>
      <div className="w-full pagination" style={{ overflow: "hidden" }}>
        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination]}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            550: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {courses?.map((course, key) => (
            <SwiperSlide key={key}>
              <Link to={`/singlecourse/${course._id}`}>
                <div className="border rounded-lg card duration-300  bg-white">
                  <div className=" overflow-hidden rounded-t-lg">
                    <img
                      style={{ height: "150px" }}
                      className="w-full h-52 card-image rounded-t-lg"
                      src={course?.image}
                      alt=""
                    />
                    <button
                      className="
                    top-4 
                    right-4 
                    absolute 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-offset-2 
                    focus:ring-gray-800 
                    p-1.5 
                    bg-white  
                    hover:text-gray-400"
                    >
                      <FontAwesomeIcon
                        className="text-red-500 text-xl"
                        icon={faBookmark}
                      />
                    </button>
                    <div className="bg-slate-900 top-4 left-4 absolute px-2 rounded">
                      <span className="text-white text-xs">
                        {course?.category}
                      </span>
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
                          className="text-yellow-300 text-lg"
                          icon={faStar}
                        />
                      }
                      fullSymbol={
                        <FontAwesomeIcon
                          className="text-yellow-300 text-lg"
                          icon={faStar}
                        />
                      }
                    />
                    <h1 className="text-lg font-bold mt-1 mb-3 text-stone-700 hover:text-red-500 duration-300 cursor-pointer">
                      {course?.title}
                    </h1>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between pt-3">
                    <div className="flex text-stone-500 text-sm">
                      {/* Duration   */}
                      <div className="flex items-center mr-4">
                        <FontAwesomeIcon
                          icon={faClockRotateLeft}
                          className="mr-1 font-thin text-xl"
                        />
                        <span className="text-sm">
                          {course?.courseDuration || 0} hrs
                        </span>
                      </div>
                      {/* Students  */}
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faUsers}
                          className="mr-1 font-thin text-lg"
                        />
                        <span className="text-sm">
                          {course?.totalStudents || 0}
                        </span>
                      </div>
                    </div>
                    {/* Fee */}
                    <div>
                      <h6 className="text-2xl text-red-500">
                        {course?.courseFee} $
                      </h6>
                    </div>
                  </div>
                  {/* End of Bottom Bar  */}
                  </div>
                  {/* End of Course Details Body  */}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Courses;

/*

src={course?.owner?.photo || demoUser}

*/
