import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import LoadingOverlay from "../../Loading/LoadingOverlay";

const PermanentAdd = ({ setPermanentAddModal }) => {
  const { user } = useAuth();
  const [data, setData] = useState();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      phone: "",
      zip: "",
      country: "",
    },
  });

  React.useEffect(() => {
    axios
      .get(
        `https://fierce-caverns-90976.herokuapp.com/allusers?email=${user?.email}`
      )
      .then((res) => {
        reset(res.data?.permanentAddress);
        setData(res.data?.permanentAddress);
      });
  }, [reset, user?.email]);
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (data) => {
    setSubmitting(true);
    axios
      .put(
        `https://fierce-caverns-90976.herokuapp.com/permanentaddress?email=${user?.email}`,
        data
      )
      .then(function(response) {
        Swal.fire({
          icon: "success",
          title: "Your Address Successfully Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        setPermanentAddModal(false);
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
                  Update Permanent Address
                </h3>
              </div>

              <div className="relative p-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col space-y-1">
                  <label
                    for="addressLine1"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    {...register("addressLine1", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    for="phone"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    Address Line 2
                  </label>
                  <input
                    type="phone"
                    id="addressLine2"
                    name="addressLine2"
                    {...register("addressLine2", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    for="phone"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    {...register("city", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    for="phone"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    {...register("state", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    for="phone"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    {...register("phone", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    for="zip"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    Zip
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    {...register("zip", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    for="country"
                    className="text-sm font-semibold tracking-widest text-left mt-2"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    {...register("country", { required: true })}
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-red-500 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-transparent hover:border-red-500 rounded"
                  type="button"
                  onClick={() => setPermanentAddModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-red-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-red-500 hover:text-red-500 hover:bg-transparent"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* 	{(!data || submitting) && <LoadingOverlay />} */}
    </div>
  );
};

export default PermanentAdd;
