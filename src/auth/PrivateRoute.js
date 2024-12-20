import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./auth"; // Adjust the import path if needed

const PrivateRoute = () => {
  const auth = isAuthenticated();

  // Check if user is authenticated and has the correct role (role === 0 for normal users)
  return auth && auth.user && auth.user.role === 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
