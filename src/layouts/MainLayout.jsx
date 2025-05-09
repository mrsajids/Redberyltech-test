import React from 'react';
import Sidebar from "../components/Sidebar"
import TopNavbar from '../components/TopNavbar';
const MainLayout = ({ children }) => {
  return (
    <>
      <TopNavbar />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          {children}
        </div>
      </div>
      </>
  );
};

export default MainLayout;
