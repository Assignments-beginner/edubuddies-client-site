import useAuth from "../../../hooks/useAuth";

import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";

const AdminRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const [admin, setAdmin] = useState(false);
  console.log(user.email);

  useEffect(() => {
    const loadFUncion = async () => {
      setIsLoading(true);
      await fetch(
        `https://fierce-caverns-90976.herokuapp.com/getUserRole/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setAdmin(true);
          setIsLoading(false);
        });
    };
    loadFUncion();
  }, [user.email]);
  console.log("from admin route", admin, isLoading);
  const location = useLocation();

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (user.email && admin) {
    return children;
  } else return <Navigate to="/wrongAdminRoute" state={{ from: location }} />;
};

export default AdminRoute;
