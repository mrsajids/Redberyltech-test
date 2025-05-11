// src/utils/getFilterOptions.js
export const getFilterOptions = (orders) => {
  const unique = (key) =>
    Array.from(new Set(orders.map((o) => o[key]).filter(Boolean)));

  return {
    states: unique("state"),
    reps: unique("rep"),
    types: unique("type"),
    statuses: unique("status"),
    paymentStatuses: unique("paymentStatus"), // if available
  };
};
