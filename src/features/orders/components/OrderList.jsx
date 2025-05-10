import React from "react";
import { ListGroup, Badge, Form, Button } from "react-bootstrap";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";

const OrderList = ({ orders, selectedOrderId, onSelect, onRefresh }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">
          Orders{" "}
          <span className="badge bg-primary rounded-pill">{orders.length}</span>
        </h5>
        <div className="d-flex">
          <Form.Select size="sm" style={{ maxWidth: "140px" }}>
            <option>Order Number</option>
            <option>Date</option>
          </Form.Select>{" "}
          <Button variant="primary ms-1" size="sm">
            <FaSortAmountDownAlt />
          </Button>
          <Button
            variant="outline-secondary px-1 ms-1"
            size="sm"
            onClick={() => onRefresh()}
          >
            <IoIosRefresh size={20} />
          </Button>
        </div>
      </div>
      <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
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
                <div className="fw-bold">ORDER-ID {order.id}</div>
                <div className="text-muted">{order.name}</div>
                <div className="small text-muted">
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
                className="align-self-end mt-2"
                style={{ fontSize: "0.75rem" }}
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
