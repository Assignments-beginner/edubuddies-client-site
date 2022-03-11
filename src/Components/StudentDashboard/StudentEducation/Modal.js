import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import LoadingOverlay from "../../Loading/LoadingOverlay";

const Modal = ({ setShowModal }) => {
  const { user } = useAuth();
  const [data, setData] = useState();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      educationalLevel: "",
      degree: "",
      instituteName: "",
      passingYear: "",
      currentYear: "",
      grade: "",
    },
  });

  React.useEffect(() => {
    axios
      .get(
        `https://fierce-caverns-90976.herokuapp.com/allusers?email=${user?.email}`
      )
      .then((res) => {
        reset(res.data?.educationalExp);
        setData(res.data?.educationalExp);
      });
  }, [reset, user?.email]);
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (data) => {
    setSubmitting(true);
    axios
      .put(
        `https://fierce-caverns-90976.herokuapp.com/education?email=${user?.email}`,
        data
      )
      .then(function(response) {
        Swal.fire({
          icon: "success",
          title: "Your Educational Status Successfully Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        setShowModal(false);
        setSubmitting(false);
      })
      .catch(function(error) {
        console.log("error", error);
        console.log(error);
      });
    console.log(data);
  };
  return (
    <div>
      <div className="my-2 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-3"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className=" p-5 border-b border-solid border-red-500 rounded-t">
                <h3 className="text-3xl font-semibold text-center text-red-500">
                  Update Educational Level
                </h3>
              </div>

              <div className="relative p-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col space-y-1">
                  <label
                    for="educationalLevel"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    Educational Level
                  </label>
                  <input
                    type="text"
                    id="educationalLevel"
                    name="educationalLevel"
                    {...register("educationalLevel", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    for="degree"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    Degree
                  </label>
                  <input
                    type="degree"
                    id="degree"
                    name="degree"
                    {...register("degree", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    for="instituteName"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    Institute Name
                  </label>
                  <input
                    type="text"
                    id="instituteName"
                    name="instituteName"
                    {...register("instituteName", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    for="passingYear"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    Passing Year
                  </label>
                  <input
                    type="text"
                    id="passingYear"
                    name="passingYear"
                    {...register("passingYear", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    for="currentYear"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    Current Year
                  </label>
                  <input
                    type="text"
                    id="currentYear"
                    name="currentYear"
                    {...register("currentYear", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    for="grade"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    Grade
                  </label>
                  <input
                    type="text"
                    id="grade"
                    name="grade"
                    {...register("grade", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-red-500 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border rounded border-transparent hover:border-red-500"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-red-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-red-500 hover:bg-transparent hover:text-red-500"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* {(!data || submitting) && <LoadingOverlay />} */}
    </div>
  );
};

export default Modal;
