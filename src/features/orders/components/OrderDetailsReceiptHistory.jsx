import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { LuCircleCheckBig } from "react-icons/lu";

const OrderDetailsReceiptHistory = ({ order }) => {
  return (
    <Row className="g-4 p-2">
      {/* Receipt Section */}
      <Col md={6}>
        <Card className="border-light shadow-sm">
          <Card.Header className="bg-primary-subtle text-primary fw-semibold">
            Receipt
          </Card.Header>
          <Card.Body>
            {order.receipt?.map((item, idx) => (
              <div
                key={idx}
                className="d-flex justify-content-between align-items-start mb-3"
              >
                <div>
                  <div className="fw-semibold">{item.item}</div>
                  <div className="text-muted small">Government fee</div>
                </div>
                <div className="fw-semibold">{item.amount}</div>
              </div>
            ))}
          </Card.Body>
        </Card>
      </Col>

      {/* Order History Section */}
      <Col md={6}>
        <Card className="border-light shadow-sm">
          <Card.Header className="bg-primary-subtle text-primary fw-semibold">
            Order History
          </Card.Header>
          <Card.Body>
            {order.history?.map((entry, idx) => {
              const [title, date] = entry.split(" - ");
              return (
                <div key={idx} className="d-flex justify-content-between mb-3">
                  <div className="d-flex">
                    <LuCircleCheckBig
                      className="text-success me-2 mt-1"
                      size={20}
                    />

                    <div>
                      <div className="fw-semibold">{title}</div>
                      <div className="small text-muted">
                        {title === "ORDER CREATED"
                          ? "Order created successfully."
                          : "Order is under review."}
                      </div>
                      <div className="small">
                        Updated by{" "}
                        <span className="text-primary fw-semibold">
                          {order.rep}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-nowrap">{date}</div>
                </div>
              );
            })}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default OrderDetailsReceiptHistory;
