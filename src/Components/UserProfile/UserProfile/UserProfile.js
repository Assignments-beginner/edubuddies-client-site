import React from "react";
import useAuth from "../../../hooks/useAuth";
import "../UserProfile/UserProfile.css";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className="mt-16 mb-36">
      {user?.email && (
        <div className="flex flex-col items-center justify-items-center">
          <img
            className="userProfile-img rounded-full ring-2 ring-offset-2"
            height="100"
            width="100"
            src={user.photoURL}
            alt=""
          />
          <span className="text-black text-4xl ml-2 mt-8 uppercase">
            {user.displayName}
          </span>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
