import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, InputGroup, Tab, Tabs, Card, Table, ListGroup, Badge } from 'react-bootstrap';
import { FaTachometerAlt, FaClipboardList, FaBuilding, FaUsers, FaUserTie, FaCogs, FaSyncAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const OrdersDashboard = () => {
  return (
    <Container fluid className="bg-light min-vh-100 p-4">
      <Row className="mb-3">
        <Col><h2>Orders</h2><p>Manage all your orders here.</p></Col>
        <Col className="text-end">
          <Button variant="primary" className="me-2">+ Create Order</Button>
          <Button variant="outline-primary">Export CSV</Button>
        </Col>
      </Row>

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

      <Row>
        <Col md={4} style={{ maxHeight: '70vh', overflowY: 'scroll' }}>
          <ListGroup>
            <ListGroup.Item active>
              <div>ORDER-ID 15127</div>
              <small>Realtime LLC<br />Order Type: Entity Formation<br />State: Alaska<br />May 9, 2025</small>
              <Badge bg="warning" text="dark" className="float-end">IN REVIEW</Badge>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>ORDER-ID 15126</div>
              <small>Mas<br />Order Type: Annual Report<br />State: Alaska<br />May 9, 2025</small>
              <Badge bg="warning" text="dark" className="float-end">PAY LATER</Badge>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={8}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h5>ORDER-ID 15127 <Badge bg="warning">IN REVIEW</Badge></h5>
                  <p>RedBeryl Tech</p>
                </div>
                <div className="text-end">
                  <Button variant="outline-primary" className="me-2">Update status</Button>
                  <Button variant="outline-secondary">Print</Button>
                </div>
              </div>
              <Row className="mt-3">
                <Col md={6}>
                  <p><strong>Order Type:</strong> Entity Formation</p>
                  <p><strong>Entity Type:</strong> Limited Liability Company</p>
                  <p><strong>Entity Name:</strong> Realtime LLC</p>
                  <p><strong>Order Date:</strong> May 9, 2025</p>
                </Col>
                <Col md={6}>
                  <p><strong>Completion Date:</strong> -</p>
                  <p><strong>State:</strong> -</p>
                  <p><strong>Order Placed By:</strong> Mayuri Chavan</p>
                  <p><strong>Account Rep:</strong> Mayuri Chavan</p>
                </Col>
              </Row>
              <Row className="bg-light p-3 mt-3">
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Receipt</Card.Title>
                      <p>Articles of Organization-AK LLC - $370.00</p>
                      <p>Initial Registered Agent - $99.00</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Order history</Card.Title>
                      <p>ORDER CREATED - May 9, 2025</p>
                      <p>IN REVIEW - May 9, 2025</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Tabs defaultActiveKey="details" className="mt-3">
                <Tab eventKey="details" title="Order Details"></Tab>
                <Tab eventKey="preview" title="Order Preview"></Tab>
                <Tab eventKey="company" title="Company Details"></Tab>
                <Tab eventKey="docs" title="Documents"></Tab>
                <Tab eventKey="comm" title="Communication history"></Tab>
                <Tab eventKey="rep" title="Account Rep"></Tab>
                <Tab eventKey="invoice" title="Invoice"></Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const App = () => (
  <Router>
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/orders" element={<OrdersDashboard />} />
          <Route path="/dashboard" element={<div className="p-4">Dashboard Page</div>} />
          <Route path="/companies" element={<div className="p-4">Companies Page</div>} />
          <Route path="/vendors" element={<div className="p-4">Vendors Page</div>} />
          <Route path="/clients" element={<div className="p-4">Clients Page</div>} />
          <Route path="/employees" element={<div className="p-4">Employees Page</div>} />
          <Route path="/settings" element={<div className="p-4">Master Settings Page</div>} />
          <Route path="/refresh" element={<div className="p-4">Refresh Token Page</div>} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
