import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout"; // Make sure to import MainLayout
import OrdersDashboard from "../features/orders/OrdersDashboard"; // Correct the import path

// Define the routes in an array
const routes = [
  { path: "/", component: <OrdersDashboard /> },
  { path: "/orders", component: <OrdersDashboard /> },
  {
    path: "/dashboard",
    component: <div className="other-components">Dashboard Page</div>,
  },
  {
    path: "/companies",
    component: <div className="other-components">Companies Page</div>,
  },
  {
    path: "/vendors",
    component: <div className="other-components">Vendors Page</div>,
  },
  {
    path: "/clients",
    component: <div className="other-components">Clients Page</div>,
  },
  {
    path: "/employees",
    component: <div className="other-components">Employees Page</div>,
  },
  {
    path: "/settings",
    component: <div className="other-components">Master Settings Page</div>,
  },
  {
    path: "/refresh",
    component: <div className="other-components">Refresh Token Page</div>,
  },
];

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ path, component }) => (
        <Route
          key={path}
          path={path}
          element={<MainLayout>{component}</MainLayout>} // Wrap the component with MainLayout
        />
      ))}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
