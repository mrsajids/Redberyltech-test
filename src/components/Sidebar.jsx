import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaBuilding,
  FaUsers,
  FaUserTie,
  FaCogs,
  FaSyncAlt,
} from "react-icons/fa";

const Sidebar = () => (
  <div className="bg-white border-end vh-100 p-1" style={{ minWidth: "50px" }}>
    <ul className="nav flex-column">
      <li className="nav-item mb-2">
        <Link to="/dashboard" className="nav-link text-dark text-center">
          <FaTachometerAlt className="me-2" />
          <br />
          Dashboard
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/orders" className="nav-link text-dark text-center">
          <FaClipboardList className="me-2" />
          <br />
          Orders
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/companies" className="nav-link text-dark text-center">
          <FaBuilding className="me-2" />
          <br />
          Companies
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/vendors" className="nav-link text-dark text-center">
          <FaUsers className="me-2" />
          <br />
          Vendors
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/clients" className="nav-link text-dark text-center">
          <FaUserTie className="me-2" />
          <br />
          Clients
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/employees" className="nav-link text-dark text-center">
          <FaUsers className="me-2" />
          <br />
          Employees
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/settings" className="nav-link text-dark text-center">
          <FaCogs className="me-2" />
          <br />
          Master Settings
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/refresh" className="nav-link text-dark text-center">
          <FaSyncAlt className="me-2" />
          <br />
          Refresh Token
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
