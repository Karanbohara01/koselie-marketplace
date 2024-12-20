import React from "react";
import Sidebar from "./Sidebar";
import { isAuthenticated, signout } from "../../auth";
import { Navigate, useNavigate } from "react-router-dom";

const AdminHeader = () => {
  if (!isAuthenticated() || isAuthenticated().user.role !== 1) {
    return <Navigate to={"/login"} />;
  }
  const { user } = isAuthenticated();
  const navigate = useNavigate();
  return (
    <>
      <Sidebar />
    </>
  );
};

export default AdminHeader;
