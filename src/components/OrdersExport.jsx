import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";

const OrdersExport = ({ filteredOrders }) => {
  const headers = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Type", key: "type" },
    { label: "State", key: "state" },
    { label: "Date", key: "date" },
    { label: "Status", key: "status" },
    { label: "Rep", key: "rep" },
    { label: "Payment Status", key: "paymentStatus" },
  ];

  return (
    <CSVLink data={filteredOrders} headers={headers} filename={"orders.csv"}>
      <Button variant="primary" size="sm">
        Export CSV
      </Button>
    </CSVLink>
  );
};

export default OrdersExport;
