import React from "react";
import { ListGroup, Badge, Form, Button } from "react-bootstrap";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import "../../../assets/css/order-features.css"; 

const OrderList = ({
  orders,
  selectedOrderId,
  onSelect,
  onRefresh,
  setSortAsc,
  setSortBy,
  sortAsc,
}) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="mb-0">
          Orders{" "}
          <span className="badge bg-primary rounded-pill">{orders.length}</span>
        </h6>
        <div className="d-flex">
          <Form.Select
            size="sm"
            className="orderlist-select"
            onChange={(e) =>
              setSortBy(e.target.value === "Date" ? "date" : "id")
            }
          >
            <option>Order Number</option>
            <option>Date</option>
          </Form.Select>

          <Button
            variant="primary"
            size="sm"
            className={`ms-1 ${sortAsc ? "rotate-0" : "rotate-180"}`}
            onClick={() => setSortAsc(!sortAsc)}
          >
            <FaSortAmountDownAlt />
          </Button>

          <Button
            variant="outline-secondary"
            size="sm"
            className="ms-1 px-1"
            onClick={onRefresh}
          >
            <IoIosRefresh size={18} />
          </Button>
        </div>
      </div>

      <div className="orderlist-scroll">
        <ListGroup>
          {orders.map((order) => (
            <ListGroup.Item
              key={order.id}
              active={order.id === selectedOrderId}
              className="d-flex justify-content-between align-items-start flex-column"
              action
              onClick={() => onSelect(order)}
            >
              <div className="w-100">
                <div className="fw-bold small">ORDER-ID {order.id}</div>
                <div className="text-muted small">{order.name}</div>
                <div className="text-muted small">
                  Order Type: {order.type}
                  <br />
                  State: {order.state}
                  <br />
                  {order.date}
                </div>
              </div>
              <Badge
                bg="warning"
                text="dark"
                className="align-self-end mt-2 orderlist-badge"
              >
                {order.status}
              </Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
};

export default OrderList;
