import React from "react";
import { Link, useLocation } from "react-router-dom";
import sidebarLinks from "../data/sidebarLinks";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-white border-end vh-100 p-1" style={{ minWidth: "50px" }}>
      <ul className="nav flex-column">
        {sidebarLinks.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname.startsWith(to);
          return (
            <li key={to} className="nav-item mb-2">
              <Link
                to={to}
                className={`nav-link text-center ${isActive ? "text-primary fw-bold" : "text-dark"}`}
              >
                <Icon className="me-2" />
                <br />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
