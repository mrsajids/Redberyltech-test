import { useMemo, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Tabs,
  Tab
} from "react-bootstrap";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import { orders } from "../../data/orders";
import OrderList from "./components/OrderList";
import OrderDetail from "./components/OrderDetail";
import OrderDetailsReceiptHistory from "./components/OrderDetailsReceiptHistory";
import OrderPreview from "./components/OrderPreview";
import Invoice from "../invoices/Invoice";
import { invoice } from "../../data/invoices";
import { filterOrders } from "../../services/filterOrders";
import { getFilterOptions } from "../../utils/orderFilterOptions";

const OrdersDashboard = () => {
  const [selectedOrder, setSelectedOrder] = useState(orders[0]); // default to first order
  const [sortBy, setSortBy] = useState("id"); // "id" or "date"
  const [sortAsc, setSortAsc] = useState(true);

 const [filters, setFilters] = useState({
    state: "",
    rep: "",
    type: "",
    status: ""
  });

  const [filteredOrders, setFilteredOrders] = useState(orders);

  const filterOptions = getFilterOptions(orders);
  
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    const result = filterOrders(orders, filters);
    setFilteredOrders(result);
  };

  const clearFilters = () => {
    setFilters({ state: "", rep: "", type: "", status: "" });
    setFilteredOrders(orders);
  };

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    const aVal = sortBy === "date" ? new Date(a.date) : a.id;
    const bVal = sortBy === "date" ? new Date(b.date) : b.id;
  
    if (aVal < bVal) return sortAsc ? -1 : 1;
    if (aVal > bVal) return sortAsc ? 1 : -1;
    return 0;
  });
  
  return (
    <Container fluid className="min-vh-100 p-4 pt-3">
      <Header filteredOrders={filteredOrders} />
      <Filters
        filters={filters}
        onChange={handleFilterChange}
        onFilter={applyFilters}
        onClear={clearFilters}
        options={filterOptions}
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
