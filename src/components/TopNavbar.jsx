import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../assets/images/logo.jpg";
import "../assets/css/navbar.css"; 

const TopNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="px-4 shadow-sm position-sticky top-0">
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
          <span className="me-3 text-muted">
            Welcome, <strong>Santosh Narate</strong>
          </span>
          <div className="topnav-avatar">SN</div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
