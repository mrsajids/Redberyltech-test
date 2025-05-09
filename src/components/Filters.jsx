import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Filters = () => (
  <Row className="mb-3">
    <Col md={2}><Form.Control placeholder="Search" /></Col>
    <Col md={2}><Form.Select><option>Filter By State</option></Form.Select></Col>
    <Col md={2}><Form.Select><option>Filter By Account Rep</option></Form.Select></Col>
    <Col md={2}><Form.Select><option>Filter By Order Type</option></Form.Select></Col>
    <Col md={2}><Form.Select><option>Filter By Status</option></Form.Select></Col>
    <Col md={2}><Form.Select><option>Filter By Payment Status</option></Form.Select></Col>
    <Col xs="auto">
      <Button className="mt-2" variant="primary">Filter</Button>
      <Button className="mt-2 ms-2" variant="light">Clear Filter</Button>
    </Col>
  </Row>
);

export default Filters;