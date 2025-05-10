import React from "react";
import { Card, Button, Row, Col, Accordion, Table } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import html2pdf from "html2pdf.js";

const OrderPreview = ({ order }) => {
const downloadPDF = () => {
  const element = document.getElementById("invoice-preview");
  const opt = {
    margin: 0.3,
    filename: 'invoice.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().set(opt).from(element).save();
};

  return (
    <>
      <Card className="border-light shadow-sm m-1" id="invoice-preview">
        <Card.Header className="bg-primary-subtle text-primary d-flex justify-content-between align-items-center">
          <div>Order preview</div>
        </Card.Header>
        <Card.Body>
          <div className="text-end">
            <Button variant="primary" size="sm" onClick={downloadPDF}>
              <FaDownload className="me-2" />
              Download as a PDF
            </Button>
          </div>
          {/* Entity Type */}
          <div className="text-primary fw-semibold mb-3">
            Limited Liability Company
          </div>

          {/* Selected Services */}
          <Card className="mb-4">
            <Card.Header className="fw-semibold">Selected Services</Card.Header>
            <Card.Body>
              {order.receipt.map((item, idx) => (
                <Row key={idx} className="mb-2 border-bottom pb-2">
                  <Col>{item.item}</Col>
                  <Col className="text-end fw-semibold">{item.amount}</Col>
                </Row>
              ))}
            </Card.Body>
          </Card>

          {/* Accordion Section */}
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Entity Formation</Accordion.Header>
              <Accordion.Body>
                {/* LLC Name */}
                <Table bordered responsive>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">LLC Name</td>
                      <td>{order.name}</td>
                    </tr>
                  </tbody>
                </Table>

                {/* Contact Info */}
                <div className="fw-semibold mt-4 mb-2">Contact Information</div>
                <Table bordered responsive>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">Name</td>
                      <td>vState Filings</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Email Address</td>
                      <td>orders@vstatefilings.com</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
      <Card>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Contact</Accordion.Header>
            <Accordion.Body>
              {/* Accordion Section */}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Principle Address</Accordion.Header>
                  <Accordion.Body>
                    {/* LLC Name */}
                    <Table bordered responsive>
                      <tbody>
                        <tr>
                          <td className="fw-semibold">Address Line 1</td>
                          <td className="fw-semibold">Address Line 2</td>
                          <td className="fw-semibold">State</td>
                          <td className="fw-semibold">City</td>
                          <td className="fw-semibold">Zip Code</td>
                        </tr>
                        <tr>
                          <td>{order.name}</td>
                          <td>{order.name}</td>
                          <td>{order.name}</td>
                          <td>{order.name}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Registered Agent</Accordion.Header>
                  <Accordion.Body>
                    {/* LLC Name */}
                    <Table bordered responsive>
                      <tbody>
                        <tr>
                          <td className="fw-semibold">Address Line 1</td>
                          <td className="fw-semibold">Address Line 2</td>
                          <td className="fw-semibold">State</td>
                          <td className="fw-semibold">City</td>
                          <td className="fw-semibold">Zip Code</td>
                        </tr>
                        <tr>
                          <td>{order.name}</td>
                          <td>{order.name}</td>
                          <td>{order.name}</td>
                          <td>{order.name}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>{" "}
          </Accordion.Item>
        </Accordion>
      </Card>
    </>
  );
};

export default OrderPreview;
