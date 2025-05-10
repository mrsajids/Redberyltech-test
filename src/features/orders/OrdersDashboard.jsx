import React, { useMemo, useState } from "react";
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
  const [filters, setFilters] = useState({
    search: "",
    state: "",
    rep: "",
    type: "",
    status: "",
    paymentStatus: "",
  });

  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [sortBy, setSortBy] = useState("id"); // "id" or "date"
  const [sortAsc, setSortAsc] = useState(true);
  
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };


  const sortedOrders = [...filteredOrders].sort((a, b) => {
    const aVal = sortBy === "date" ? new Date(a.date) : a.id;
    const bVal = sortBy === "date" ? new Date(b.date) : b.id;
  
    if (aVal < bVal) return sortAsc ? -1 : 1;
    if (aVal > bVal) return sortAsc ? 1 : -1;
    return 0;
  });
  

  const clearFilters = () => {
    setFilters({
      search: "",
      state: "",
      rep: "",
      type: "",
      status: "",
      paymentStatus: "",
    });
    setFilteredOrders(orders);
  };

  const applyFilters = () => {
    let filtered = [...orders];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter((o) =>
        o.name.toLowerCase().includes(searchLower)
      );
    }

    if (filters.state) {
      filtered = filtered.filter((o) => o.state === filters.state);
    }

    if (filters.rep) {
      filtered = filtered.filter((o) => o.rep === filters.rep);
    }

    if (filters.type) {
      filtered = filtered.filter((o) => o.type === filters.type);
    }

    if (filters.status) {
      filtered = filtered.filter((o) => o.status === filters.status);
    }

    // Optional: Map paymentStatus if it's derived from other fields
    if (filters.paymentStatus) {
      filtered = filtered.filter(
        (o) => o.status === filters.paymentStatus 
      );
    }
    setSelectedOrder(filtered[0] || null);
    setFilteredOrders(filtered);
  };

  // Get unique values for dropdowns
  const getUniqueValues = (key) => [
    ...new Set(orders.map((o) => o[key]).filter(Boolean)),
  ];

  const uniqueStates = useMemo(() => getUniqueValues("state"), []);
  const uniqueReps = useMemo(() => getUniqueValues("rep"), []);
  const uniqueTypes = useMemo(() => getUniqueValues("type"), []);
  const uniqueStatuses = useMemo(() => getUniqueValues("status"), []);
  const uniquePaymentStatuses = useMemo(() => getUniqueValues("status"), []);
  console.log(filteredOrders);

  return (
    <Container fluid className="min-vh-100 p-4 pt-3">
      <Header />
      <Filters
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={clearFilters}
        onApplyFilters={applyFilters}
        uniqueStates={uniqueStates}
        uniqueReps={uniqueReps}
        uniqueTypes={uniqueTypes}
        uniqueStatuses={uniqueStatuses}
        uniquePaymentStatuses={uniquePaymentStatuses}
      />
      <Row>
        <Col md={3}>
          <OrderList
            orders={sortedOrders}
            selectedOrderId={selectedOrder?.id}
            onSelect={(order) => setSelectedOrder(order)}
            onRefresh={() => clearFilters()}
            setSortAsc={setSortAsc}
            setSortBy={setSortBy}
            sortAsc={sortAsc}
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
