import React from "react";
import { Link, useLocation } from "react-router-dom";
import sidebarLinks from "../data/sidebarLinks";
import "../assets/css/sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar-fixed">
      <ul className="nav flex-column align-items-center">
        {sidebarLinks.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname.startsWith(to);
          return (
            <li key={to} className="nav-item mb-3 text-center">
              <Link
                to={to}
                className={`nav-link p-0 side-bar-tab ${
                  isActive ? "text-primary fw-bold" : "text-dark"
                }`}
              >
                <Icon size={20} className="mb-1" />
                <div className="d-none d-md-block">{label}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
