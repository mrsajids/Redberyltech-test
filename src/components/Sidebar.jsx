import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaClipboardList, FaBuilding, FaUsers, FaUserTie, FaCogs, FaSyncAlt } from 'react-icons/fa';

const Sidebar = () => (
  <div className="bg-white border-end vh-100 p-3" style={{ minWidth: '220px' }}>
    <h5 className="mb-4">vState Filings</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2">
        <Link to="/dashboard" className="nav-link text-dark"><FaTachometerAlt className="me-2" />Dashboard</Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/orders" className="nav-link text-dark"><FaClipboardList className="me-2" />Orders</Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/companies" className="nav-link text-dark"><FaBuilding className="me-2" />Companies</Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/vendors" className="nav-link text-dark"><FaUsers className="me-2" />Vendors</Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/clients" className="nav-link text-dark"><FaUserTie className="me-2" />Clients</Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/employees" className="nav-link text-dark"><FaUsers className="me-2" />Employees</Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/settings" className="nav-link text-dark"><FaCogs className="me-2" />Master Settings</Link>
      </li>
      <li className="nav-item">
        <Link to="/refresh" className="nav-link text-dark"><FaSyncAlt className="me-2" />Refresh Token</Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;