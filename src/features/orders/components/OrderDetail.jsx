import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { LuPrinter } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";

const OrderDetail = ({ order }) => {
  if (!order)
    return <div className="p-4">Select an order to view details.</div>;

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 className="mb-0">
            ORDER-ID {order.id}{" "}
            <span className="badge bg-warning text-dark">{order.status}</span>
          </h5>
          <div className="text-muted">{order.company}</div>
        </div>
        <div>
          <Button variant="primary" className="me-2">
            <MdOutlineEdit className="me-1" size={20} />
            Update status
          </Button>
          <Button variant="outline-secondary">
            <LuPrinter className="me-1" size={20} />
            Print
          </Button>
        </div>
      </div>

      <Row>
        <Col md={8}>
          <Card className="p-3 mb-3">
            <Row>
              <Col md={3}>
                <p>
                  <strong>Order Type:</strong>
                  <br /> {order.type}
                </p>
                <p>
                  <strong>Entity Type:</strong>
                  <br /> {order.entityType}
                </p>
              </Col>

              <Col md={3}>
                <p>
                  <strong>Entity Name:</strong>
                  <br /> {order.name}
                </p>
                <p>
                  <strong>Order Date:</strong>
                  <br /> {order.date}
                </p>
              </Col>
              <Col md={3}>
                <p>
                  <strong>Completion Date:</strong>
                  <br /> {order.completionDate || "-"}
                </p>
                <p>
                  <strong>State:</strong> <br /> {order.state}
                </p>
              </Col>
              <Col md={3}>
                <p>
                  <strong>Order Placed By:</strong>
                  <br /> {order.rep}
                </p>
                <p>
                  <strong>Account Rep:</strong>
                  <br /> {order.rep}
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <div className="d-flex align-items-center mb-2">
              <div
                className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40 }}
              >
                {order.rep
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="ms-3">
                <div>{order.rep}</div>
              </div>
            </div>
            <div className="text-muted">
              <p>
                <FaPhone className="me-2" /> 9863742159
              </p>
              <p>
                <FaEnvelope className="me-2" /> mayuri.chavan@redberyltech.com
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetail;
