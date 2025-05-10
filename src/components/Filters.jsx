import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Filters = ({
  filters,
  onFilterChange,
  onClearFilters,
  onApplyFilters,
  uniqueStates,
  uniqueReps,
  uniqueTypes,
  uniqueStatuses,
  uniquePaymentStatuses,
}) => (
  <div className="d-flex flex-wrap align-items-start gap-2 mb-3">
    <Form.Control
      placeholder="Search"
      value={filters.search}
      onChange={(e) => onFilterChange('search', e.target.value)}
      style={{ maxWidth: '200px' }}
    />

    <Form.Select
      style={{ maxWidth: '220px' }}
      value={filters.state}
      onChange={(e) => onFilterChange('state', e.target.value)}
    >
      <option value="">Filter By State</option>
      {uniqueStates.map((state) => (
        <option key={state}>{state}</option>
      ))}
    </Form.Select>

    <Form.Select
      style={{ maxWidth: '220px' }}
      value={filters.rep}
      onChange={(e) => onFilterChange('rep', e.target.value)}
    >
      <option value="">Filter By Account Rep</option>
      {uniqueReps.map((rep) => (
        <option key={rep}>{rep}</option>
      ))}
    </Form.Select>

    <Form.Select
      style={{ maxWidth: '220px' }}
      value={filters.type}
      onChange={(e) => onFilterChange('type', e.target.value)}
    >
      <option value="">Filter By Order Type</option>
      {uniqueTypes.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </Form.Select>

    <Form.Select
      style={{ maxWidth: '220px' }}
      value={filters.status}
      onChange={(e) => onFilterChange('status', e.target.value)}
    >
      <option value="">Filter By Status</option>
      {uniqueStatuses.map((status) => (
        <option key={status}>{status}</option>
      ))}
    </Form.Select>

    <Form.Select
      style={{ maxWidth: '220px' }}
      value={filters.paymentStatus}
      onChange={(e) => onFilterChange('paymentStatus', e.target.value)}
    >
      <option value="">Filter By Payment Status</option>
      {uniquePaymentStatuses.map((ps) => (
        <option key={ps}>{ps}</option>
      ))}
    </Form.Select>

    <div className="d-flex gap-2">
      <Button variant="primary" onClick={onApplyFilters}>
        Apply Filter
      </Button>
      <Button variant="light" onClick={onClearFilters}>
        Clear
      </Button>
    </div>
  </div>
);

export default Filters;
