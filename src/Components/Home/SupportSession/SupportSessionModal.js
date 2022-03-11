import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const SupportSessionModal = ({ setSupportSessionModal }) => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = ({ url }) => {
    const data = {
      url,
      needSupport: [],
      status: "Pending",
    };
    setSubmitting(true);
    axios
      .post(`https://fierce-caverns-90976.herokuapp.com/supportsession`, data)
      .then(function(response) {
        Swal.fire({
          icon: "success",
          title: "Your Support Session Successfully Added",
          showConfirmButton: false,
          timer: 1500,
        });
        setSupportSessionModal(false);
        setSubmitting(false);
      })
      .catch(function(error) {
        console.log("error", error);
        console.log(error);
      });
    console.log(data);
  };
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className=" p-5 border-b border-solid border-red-500 rounded-t">
              <h3 className="text-3xl font-semibold text-center text-red-500">
                Add New Support Session
              </h3>
            </div>
            <div className="relative p-6 grid grid-cols-1 gap-3">
              <div className="flex flex-col space-y-1">
                <div className="flex flex-col space-y-1">
                  <label
                    for="url"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    Support Session Name
                  </label>
                  <input
                    type="text"
                    id="url"
                    name="url"
                    {...register("url", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-red-500 rounded-b mt-2">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-transparent hover:border-red-500 rounded"
                  type="button"
                  onClick={() => setSupportSessionModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-red-500 text-white hover:bg-transparent hover:text-red-500 border border-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Add New Support Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SupportSessionModal;
