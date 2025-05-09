import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Header = () => (
  <Row className="mb-3">
    <Col>
      <h3>Orders</h3>
      <p>Manage all your orders here.</p>
    </Col>
    <Col className="text-end">
      <Button variant="primary" className="me-2">+ Create Order</Button>
      <Button variant="outline-primary">Export CSV</Button>
    </Col>
  </Row>
);

export default Header;