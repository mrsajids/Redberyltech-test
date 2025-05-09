import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from "../assets/images/logo.png"
const TopNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-4 shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="40"
            className="d-inline-block align-top me-2"
            alt="Logo"
          />
        </Navbar.Brand>

        <Nav className="ms-auto d-flex align-items-center">
          <span className="me-3 text-muted">Welcome, <strong>Santosh Narate</strong></span>
          <div className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center" style={{ width: 36, height: 36 }}>
            SN
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
