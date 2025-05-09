import React from 'react';
import Sidebar from "../components/Sidebar"
const MainLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
