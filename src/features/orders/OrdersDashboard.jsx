import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Badge,
  Card,
  Tabs,
  Tab,
  Button,
  Form,
} from "react-bootstrap";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import { orders } from "../../data/orders";
import { IoIosRefresh } from "react-icons/io";
import OrderList from "./components/OrderList";
import OrderDetail from "./components/OrderDetail";
import OrderDetailsReceiptHistory from "./components/OrderDetailsReceiptHistory";
import OrderPreview from "./components/OrderPreview";
import Invoice from "../invoices/Invoice";
import { invoice } from "../../data/invoices";

const OrdersDashboard = () => {
  const [selectedOrder, setSelectedOrder] = useState(orders[0]); // default to first order

  return (
    <Container fluid className="bg-light min-vh-100 p-4 pt-3">
      <Header />
      <Filters />
      <Row>
        <Col md={3}>
          <OrderList
            orders={orders}
            selectedOrderId={selectedOrder.id}
            onSelect={(order) => setSelectedOrder(order)}
          />
        </Col>

        <Col md={9}>
          <Card>
            <Card.Body>
              <OrderDetail order={selectedOrder} />

              <Tabs defaultActiveKey="details" className="mt-3">
                <Tab eventKey="details" title="Order Details">
                  <OrderDetailsReceiptHistory order={selectedOrder} />
                </Tab>
                <Tab eventKey="preview" title="Order Preview">
                  <OrderPreview order={selectedOrder} />
                </Tab>
                <Tab eventKey="company" title="Company Details">to be added soon</Tab>
                <Tab eventKey="docs" title="Documents">to be added soon</Tab>
                <Tab eventKey="comm" title="Communication history">to be added soon</Tab>
                <Tab eventKey="rep" title="Account Rep">to be added soon</Tab>
                <Tab eventKey="invoice" title="Invoice">
                  <Invoice invoice={invoice} />
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrdersDashboard;
