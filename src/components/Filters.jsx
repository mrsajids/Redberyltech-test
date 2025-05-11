import React from "react";
import { Form, Button } from "react-bootstrap";
import "../assets/css/components.css";

const Filters = ({ filters, onChange, onFilter, onClear,options }) => {
    const { states, reps, types, statuses, paymentStatuses } = options;

  return (
    <div className="d-flex flex-wrap align-items-start gap-3 mb-3">
      {/* Search Input */}
      <Form.Control
        size="sm"
        className="filter-input"
        placeholder="Search"
        value={filters.search}
        onChange={(e) => onChange("search", e.target.value)}
      />

      {/* State Filter */}
      <Form.Select
        size="sm"
        className="filter-select"
        value={filters.state}
        onChange={(e) => onChange("state", e.target.value)}
      >
        <option value="">Filter By State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </Form.Select>

      {/* Account Rep Filter */}
      <Form.Select
        size="sm"
        className="filter-select"
        value={filters.rep}
        onChange={(e) => onChange("rep", e.target.value)}
      >
        <option value="">Filter By Account Rep</option>
        {reps.map((rep) => (
          <option key={rep} value={rep}>
            {rep}
          </option>
        ))}
      </Form.Select>

      {/* Order Type Filter */}
      <Form.Select
        size="sm"
        className="filter-select"
        value={filters.type}
        onChange={(e) => onChange("type", e.target.value)}
      >
        <option value="">Filter By Order Type</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Form.Select>

      {/* Status Filter */}
      <Form.Select
        size="sm"
        className="filter-select"
        value={filters.status}
        onChange={(e) => onChange("status", e.target.value)}
      >
        <option value="">Filter By Status</option>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </Form.Select>

      {/* Payment Status Filter */}
      <Form.Select
        size="sm"
        className="filter-select"
        value={filters.paymentStatus}
        onChange={(e) => onChange("paymentStatus", e.target.value)}
      >
        <option value="">Filter By Payment Status</option>
        {paymentStatuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </Form.Select>

      {/* Buttons */}
      <div className="d-flex gap-2">
        <Button size="sm" variant="primary" onClick={onFilter}>
          Apply Filter
        </Button>
        <Button size="sm" variant="light" onClick={onClear}>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Filters;
