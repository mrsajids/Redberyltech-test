export const filterOrders = (orders, filters) => {
  return orders.filter(order => {
    // Search filter: Check if the search term matches any relevant fields
    const searchMatch =
      !filters.search ||
      order.id.toString().includes(filters.search) ||  // Match search term against the ID field
      order.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      order.company.toLowerCase().includes(filters.search.toLowerCase()) ||
      order.state.toLowerCase().includes(filters.search.toLowerCase()) ||
      order.type.toLowerCase().includes(filters.search.toLowerCase()) ||
      order.rep.toLowerCase().includes(filters.search.toLowerCase());

    // Apply the rest of the filters
    return (
      searchMatch &&
      (!filters.state || order.state === filters.state) &&
      (!filters.rep || order.rep === filters.rep) &&
      (!filters.type || order.type === filters.type) &&
      (!filters.status || order.status === filters.status) &&
      (!filters.paymentStatus || order.paymentStatus === filters.paymentStatus)
    );
  });
};
