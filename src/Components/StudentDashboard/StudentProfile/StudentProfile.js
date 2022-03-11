import axios from "axios";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import Modal from "./Modal";

const StudentProfile = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { user } = useAuth();
  const [users, setUsers] = React.useState();
  React.useEffect(() => {
    axios
      .get(
        `https://fierce-caverns-90976.herokuapp.com/allusers?email=${user?.email}`
      )
      .then((res) => {
        setUsers(res.data);
      });
  }, [user?.email, showModal]);
  console.log("users", users);

  return (
    <div className="container mx-auto px-4 md:px-11">
      <div className="grid ">
        <div className=" w-full bg-white px-7 drop-shadow-xl  mb-7">
          <div className="p-5 border-b border-solid border-red-500 rounded-t">
            <h3 className="text-3xl font-semibold text-center text-red-500">
              Your Profile
            </h3>
          </div>
          <div className="mx-auto py-4">
            <div className="mx-auto ">
              <div
                className="flex flex-col mb-1"
                style={{ alignItems: "center" }}
              >
                <img
                  src={users?.photoURL || user?.photoURL}
                  alt={user?.displayName}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
                <button
                  onClick={() => setShowModal(true)}
                  style={{
                    width: "150px",
                  }}
                  className=" px-4 py-2 text-lg my-6 font-semibold text-white transition-colors duration-300 bg-red-500 rounded-3xl shadow hover:bg-red-600 focus:outline-none focus:ring-red-200 focus:ring-1"
                >
                  Update Profile
                </button>
              </div>
            </div>
            <div className="mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div className="my-2">
                  <h2 className="text-lg">Student ID:</h2>
                  <p>{users?._id || "N/A"}</p>
                </div>
                <div className="my-2">
                  <h2 className="text-lg">Full Name:</h2>
                  <p>{users?.fullname || user?.displayName || "N/A"}</p>
                </div>
                <div className="my-2">
                  <h2 className="text-lg">Email Address:</h2>
                  <p>{user?.email || "N/A"}</p>
                </div>
                <div className="my-2">
                  <h2 className="text-lg">Phone:</h2>
                  <p>{users?.phone || "N/A"}</p>
                </div>
              </div>
              <div className="my-3">
                <h2 className="text-lg">About:</h2>
                <p>{users?.about || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <Modal setShowModal={setShowModal} />
        </>
      ) : null}
      {!user && <LoadingOverlay />}
    </div>
  );
};

export default StudentProfile;
