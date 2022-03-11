import React, { useState } from "react";
import "./SingleCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faClockFour,
  faArrowRight,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../SingleCourse/SingleCourse.css";
import demoUser from "../../../Images/user-demo.png";
import axios from "axios";
import Swal from "sweetalert2";
import AddReview from "./AddReview";
import Reviews from "./Reviews";

const SingleCourse = () => {
  const [submitting, setSubmitting] = useState(false);
  const [used, setUsed] = React.useState(false);
  const { id } = useParams();
  const [sigleData, setSigleData] = React.useState();
  React.useEffect(() => {
    axios
      .get(`https://fierce-caverns-90976.herokuapp.com/courses/${id}`)
      .then((res) => {
        setSigleData(res.data);
      });
  }, [id, submitting]);
  const [promo, setPromo] = useState("");
  const [promos, setPromos] = React.useState();
  React.useEffect(() => {
    axios
      .get(`https://fierce-caverns-90976.herokuapp.com/promo`)
      .then((res) => {
        setPromos(res.data);
      });
  }, []);
  console.log(promos);
  const filterPromo = promos?.filter(
    (value) => value?.promo === promo && value?.status === "Live"
  );
  console.log("filterPromo", filterPromo);
  function handleChange(e) {
    setPromo(e.target.value);
  }
  const [fee, setFee] = useState(sigleData?.courseFee);
  const promocode = () => {
    if (promo === filterPromo[0]?.promo) {
      setFee(
        sigleData?.courseFee -
          (sigleData?.courseFee / 100) * filterPromo[0]?.percent
      );
      setUsed(true);
      Swal.fire({
        icon: "success",
        title: `Congratulation, You got ${filterPromo[0]?.percent}% discount`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: `Sorry, Check your promo code again!`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="entireCourse pb-20 container mx-auto">
      <div className="instructor px-4 text-left">
        <h1 className="text-3xl text-left font-bold mt-8">
          {sigleData?.title}
        </h1>
        <h4 className="text-left mb-8">{sigleData?.category}</h4>
        <h2 className="text-xl Instructor">Instructor</h2>
        <div className="Instructor-box rounded-lg border-2 p-4 mt-2 flex justify-start items-center">
          <div className="overflow-hidden rounded-full">
            <img
              className="teacher-img rounded-full"
              src={sigleData?.owner?.photo || demoUser}
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl pl-3">{sigleData?.owner?.name}</span>
            <span className="teacher-heading pl-3">
              Senior programmer graduated from MIT University, India.
            </span>
          </div>
        </div>
        <h2 className="text-2xl text-left mt-10">About</h2>
        <div>
          <div className="mx-auto">
            <p className="text-justify">{sigleData?.description}</p>
          </div>
        </div>
        <AddReview
          setSubmitting={setSubmitting}
          submitting={submitting}
          sigleData={sigleData}
        />
        <Reviews sigleData={sigleData} />
      </div>
      <div className="px-4 courseCard">
        <div
          className="rounded overflow-hidden shadow-lg"
          style={{
            position: "sticky",
            top: 95,
          }}
        >
          <img
            style={{ maxHeight: "230px" }}
            className="w-full"
            src={sigleData?.image}
            alt=""
          />
          <div className="flex justify-between items-center py-2">
            <div className="border-2 w-72 mx-auto bg-gray-800 rounded-lg">
              <h4 className="text-xl font-black ml-3 pt-1 text-red-500">
                <CountUp start={0} end={270} duration={2.75} suffix={"+ "} />
              </h4>
              <h4 className=" text-xl ml-3 pb-1 text-white"> Videos</h4>
            </div>
            <div className="border-2 w-72 mx-auto bg-gray-800 rounded-lg">
              <h4 className="text-xl text-red-500 font-black ml-3 pt-1">
                <CountUp start={0} end={1000} duration={2.75} suffix={"+ "} />
              </h4>
              <h4 className="text-white text-xl ml-3 pb-1"> Quizes</h4>
            </div>
          </div>
          <div className="flex justify-between px-10  py-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-slate-900 text-2xl mr-2"
                icon={faUsers}
              />
              <div className="flex flex-col text-left">
                <span>Total Enrolled</span>
                <span className="font-bold">1232</span>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-slate-900 text-2xl mr-2"
                icon={faClockFour}
              />
              <div className="flex flex-col text-left">
                <span>Course Duration</span>
                <span className="font-bold">
                  {sigleData?.courseDuration} Hours
                </span>
              </div>
            </div>
          </div>
          <hr className="w-5/6 mx-auto" />
          <div className="px-4 py-4">
            <div className="flex justify-between items-center px-4 pb-2">
              <div>
                <span>Promo Code : </span>
                <input
                  id="Title"
                  placeholder="Enter Promo Code"
                  label="Title"
                  name="Title"
                  autofocus
                  className="mx-1 m-0 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  onChange={handleChange}
                  value={promo}
                />
                {!used ? (
                  <button
                    onClick={() => promocode()}
                    className="m-0 px-4 py-2 text-lg text-white transition-colors duration-300 bg-red-500 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-1"
                  >
                    Apply
                  </button>
                ) : (
                  <button
                    disabled
                    onClick={() => promocode()}
                    className="m-0 px-4 py-2 text-lg text-white transition-colors duration-300 bg-gray-500 rounded-md shadow "
                  >
                    Apply
                  </button>
                )}
              </div>
              <span className="text-3xl">$ {fee || sigleData?.courseFee}</span>
            </div>
            <Link to={`/milestone/${sigleData?._id}`}>
              <button
                className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center"
                type="submit"
              >
                Get This Course at ${fee || sigleData?.courseFee} &nbsp;&nbsp;
                <FontAwesomeIcon
                  className="text-white pr-2 text-xl"
                  icon={faArrowRight}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
