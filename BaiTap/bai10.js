// Bài 10: Tổng hợp doanh số theo ngày

const orders = [
  { date: "2024-04-01T09:00:00Z", amount: 100 },
  { date: "2024-04-01T11:00:00Z", amount: 150 },
  { date: "2024-04-02T10:00:00Z", amount: 80 },
];

const revenueByDate = orders.reduce((acc, order) => {
  const date = order.date.slice(0, 10);
  acc[date] = (acc[date] || 0) + order.amount;
  return acc;
}, {});

console.log(revenueByDate);
