import React from "react";
import { Card, Row, Col, Button, Table, Badge } from "react-bootstrap";
import { FaPrint, FaDownload } from "react-icons/fa";
import logo from "../../assets/images/logo.jpg";
import html2pdf from "html2pdf.js";

const Invoice = ({ invoice }) => {

    const printInvoiceDetail = () => {
    const printContents = document.getElementById("invoice-detail").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  const downloadPDF = () => {
  const element = document.getElementById("invoice-detail");
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
      <div className="d-flex justify-content-end align-items-center m-2">
        <Button variant="outline-secondary me-2" size="sm" onClick={printInvoiceDetail}>
          <FaPrint className="me-2" />
          Print
        </Button>
        <Button variant="primary" size="sm" onClick={downloadPDF} >
          <FaDownload className="me-2" />
          Download Invoice as PDF
        </Button>
      </div>

      <Card className="shadow-sm border-light p-4" id="invoice-detail">

        {/* Header Actions */}
        <div className="d-flex justify-content-between">
          <img src={logo} alt="vState Filings Logo" style={{ height: 40 }} />
          <h4 className="text-primary">Invoice</h4>
        </div>
        <hr />
        {/* Company + Invoice Details */}
        <Row className="mb-4">
          <Col md={8}>
            <div className="mt-2">
              <strong>vState Filings LLC</strong>
              <br />
              301 Mid Road, Suite U-5
              <br />
              Hewlett, NY 11557
              <br />
              718-569-2703
            </div>
          </Col>
          <Col md={4} className="text-end">
            <div>
              <strong>Date:</strong> {invoice.date}
            </div>
            <div>
              <strong>Invoice #:</strong> {invoice.id}
            </div>
          </Col>
        </Row>

        {/* Bill To + Paid Stamp */}
        <Row className="mb-4 position-relative">
          <Col md={6}>
            <h6 className="fw-semibold">Bill To</h6>
            <Card className="p-3 border-light bg-light-subtle">
              {invoice.billTo.name}
              <br />
              {invoice.billTo.city}
              <br />
              {invoice.billTo.stateZip}
            </Card>
          </Col>
          <div style={{ position: "relative" }}>
            {/* Other invoice content */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(-20deg)",
                fontSize: "5rem",
                fontWeight: "bold",
                color: "#ccc",
                pointerEvents: "none",
                zIndex: 10,
              }}
            >
              PAID
            </div>
          </div>
        </Row>

        {/* Invoice Table */}
        <Table bordered hover responsive>
          <thead className="table-light">
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>State</th>
              <th>Entity ID</th>
              <th className="text-end">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.state}</td>
                <td>{item.entity}</td>
                <td className="text-end">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Totals */}
        <Row className="justify-content-end">
          <Col md={4}>
            <Table borderless>
              <tbody>
                <tr>
                  <td>Payments/Credits</td>
                  <td className="text-end fw-semibold">${invoice.credits}</td>
                </tr>
                <tr>
                  <td>Balance Due</td>
                  <td className="text-end fw-bold">${invoice.balance}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
<hr />
        {/* Footer Note */}
        <p className="small text-muted mt-4">
          SERVICE FEE TERMS ARE NET 30 DAYS. A 1.5% monthly late fee is assessed
          on balances greater than 30 days.
          <br />
          We reserve the right to resign as Registered Agent if your invoice is
          30 days past due.
        </p>
      </Card>
    </>
  );
};

export default Invoice;
