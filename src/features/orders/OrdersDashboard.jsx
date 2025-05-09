import React from 'react';
import { Container, Row, Col, ListGroup, Badge, Card, Tabs, Tab, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import Filters from '../../components/Filters';
import { orders } from '../../data/orders';

const OrdersDashboard = () => {
  const selectedOrder = orders[0];

  return (
    <Container fluid className="bg-light min-vh-100 p-4">
      <Header />
      <Filters />

      <Row>
        <Col md={4} style={{ maxHeight: '70vh', overflowY: 'scroll' }}>
          <ListGroup>
            {orders.map(order => (
              <ListGroup.Item key={order.id} active={order.id === selectedOrder.id}>
                <div>ORDER-ID {order.id}</div>
                <small>{order.name}<br />Order Type: {order.type}<br />State: {order.state}<br />{order.date}</small>
                <Badge bg="warning" text="dark" className="float-end">{order.status}</Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h5>ORDER-ID {selectedOrder.id} <Badge bg="warning">{selectedOrder.status}</Badge></h5>
                  <p>{selectedOrder.company}</p>
                </div>
                <div className="text-end">
                  <Button variant="outline-primary" className="me-2">Update status</Button>
                  <Button variant="outline-secondary">Print</Button>
                </div>
              </div>
              <Row className="mt-3">
                <Col md={6}>
                  <p><strong>Order Type:</strong> {selectedOrder.type}</p>
                  <p><strong>Entity Type:</strong> {selectedOrder.entityType}</p>
                  <p><strong>Entity Name:</strong> {selectedOrder.name}</p>
                  <p><strong>Order Date:</strong> {selectedOrder.date}</p>
                </Col>
                <Col md={6}>
                  <p><strong>Completion Date:</strong> -</p>
                  <p><strong>State:</strong> {selectedOrder.state}</p>
                  <p><strong>Order Placed By:</strong> {selectedOrder.rep}</p>
                  <p><strong>Account Rep:</strong> {selectedOrder.rep}</p>
                </Col>
              </Row>
              <Row className="bg-light p-3 mt-3">
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Receipt</Card.Title>
                      {selectedOrder.receipt.map((item, index) => (
                        <p key={index}>{item.item} - {item.amount}</p>
                      ))}
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Order history</Card.Title>
                      {selectedOrder.history.map((event, index) => (
                        <p key={index}>{event}</p>
                      ))}
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

export default OrdersDashboard;