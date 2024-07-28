// src/Components/DashboardLayout.js
import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './Layout';

const DashboardLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <Outlet /> {/* Render child routes */}
    </Layout>
  );
};

export default DashboardLayout;
