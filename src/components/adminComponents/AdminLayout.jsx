import React from "react";
import AdminHeader from "./AdminHeader";
import { Navigate, Outlet } from "react-router-dom";
import AdminFooter from "./AdminFooter";
import { isAuthenticated } from "../../auth";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
