import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <div className="animate-spin"></div>;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/wrongAdminRoute" state={{ from: location }} />;
};

export default AdminRoute;
