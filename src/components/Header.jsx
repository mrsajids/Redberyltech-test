import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import OrdersExport from "./OrdersExport";

const Header = ({ filteredOrders }) => (
  <Row className="mb-3">
    <Col>
      <h3>Orders</h3>
      <p>Manage all your orders here.</p>
    </Col>
    <Col className="text-end">
      <Button variant="outline-primary" size="sm" className="me-2">
        + Create Order
      </Button>

      <OrdersExport filteredOrders={filteredOrders} />
    </Col>
  </Row>
);

export default Header;
