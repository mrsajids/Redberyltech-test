import {
    FaTachometerAlt,
    FaClipboardList,
    FaBuilding,
    FaUsers,
    FaUserTie,
    FaCogs,
    FaSyncAlt,
  } from "react-icons/fa";
  
  const sidebarLinks = [
    { to: "/dashboard", label: "Dashboard", icon: FaTachometerAlt },
    { to: "/orders", label: "Orders", icon: FaClipboardList },
    { to: "/companies", label: "Companies", icon: FaBuilding },
    { to: "/vendors", label: "Vendors", icon: FaUsers },
    { to: "/clients", label: "Clients", icon: FaUserTie },
    { to: "/employees", label: "Employees", icon: FaUsers },
    { to: "/settings", label: "Master Settings", icon: FaCogs },
    { to: "/refresh", label: "Refresh Token", icon: FaSyncAlt },
  ];
  
  export default sidebarLinks;
  