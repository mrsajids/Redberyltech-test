import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { LuPrinter } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";
import "../../../assets/css/order-features.css"; 

const OrderDetail = ({ order }) => {
  if (!order) return <div className="p-3 small">Select an order to view details.</div>;

  const printOrderDetail = () => {
    const printContents = document.getElementById("order-detail").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <div className="p-3" id="order-detail">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h6 className="mb-0">
            ORDER-ID {order.id}{" "}
            <span className="badge bg-warning text-dark small">{order.status}</span>
          </h6>
          <div className="text-muted small">{order.company}</div>
        </div>
        <div>
          <Button variant="primary" size="sm" className="me-2">
            <MdOutlineEdit className="me-1" size={16} />
            Update status
          </Button>
          <Button variant="outline-secondary" size="sm" onClick={printOrderDetail}>
            <LuPrinter className="me-1" size={16} />
            Print
          </Button>
        </div>
      </div>

      <Row>
        <Col md={8}>
          <Card className="p-3 mb-3 small">
            <Row>
              <Col md={3}>
                <p className="mb-2"><strong>Order Type:</strong><br />{order.type}</p>
                <p><strong>Entity Type:</strong><br />{order.entityType}</p>
              </Col>
              <Col md={3}>
                <p className="mb-2"><strong>Entity Name:</strong><br />{order.name}</p>
                <p><strong>Order Date:</strong><br />{order.date}</p>
              </Col>
              <Col md={3}>
                <p className="mb-2"><strong>Completion Date:</strong><br />{order.completionDate || "-"}</p>
                <p><strong>State:</strong><br />{order.state}</p>
              </Col>
              <Col md={3}>
                <p className="mb-2"><strong>Order Placed By:</strong><br />{order.rep}</p>
                <p><strong>Account Rep:</strong><br />{order.rep}</p>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 small">
            <div className="d-flex align-items-center mb-3">
              <div className="order-avatar">
                {order.rep?.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="ms-2">
                <div>{order.rep}</div>
              </div>
            </div>
            <div className="text-muted">
              <p className="mb-2"><FaPhone className="me-2" /> 9863742159</p>
              <p><FaEnvelope className="me-2" /> mayuri.chavan@redberyltech.com</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetail;
