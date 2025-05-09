import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Filters = () => (
  <div className="d-flex flex-wrap align-items-start gap-2 mb-3">
    <Form.Control placeholder="Search" style={{ maxWidth: '200px' }} />
    <Form.Select style={{ maxWidth: '220px' }}><option>Filter By State</option></Form.Select>
    <Form.Select style={{ maxWidth: '220px' }}><option>Filter By Account Rep</option></Form.Select>
    <Form.Select style={{ maxWidth: '220px' }}><option>Filter By Order Type</option></Form.Select>
    <Form.Select style={{ maxWidth: '220px' }}><option>Filter By Status</option></Form.Select>
    <Form.Select style={{ maxWidth: '220px' }}><option>Filter By Payment Status</option></Form.Select>
    <div className="d-flex gap-2">
      <Button variant="primary">Filter</Button>
      <Button variant="light">Clear</Button>
    </div>
  </div>

);

export default Filters;