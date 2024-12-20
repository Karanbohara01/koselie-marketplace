import React from "react";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="user-layout">
      <UserHeader />
      <main>
        <Outlet />
      </main>
      <UserFooter />
    </div>
  );
};

export default UserLayout;
