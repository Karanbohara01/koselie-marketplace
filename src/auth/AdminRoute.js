import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from './auth'; // Adjust the import path if needed

const AdminRoute = () => {
  const auth = isAuthenticated();

  // Check if user is authenticated and has the correct role (role === 1 for admin)
  return auth && auth.user && auth.user.role === 1 ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
};

export default AdminRoute;
