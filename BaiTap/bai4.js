const products = [
  { time: "2024-04-01T10:00:00Z", user: "A" },
  { time: "2024-04-01T13:00:00Z", user: "B" },
  { time: "2024-04-02T09:00:00Z", user: "C" },
];

const groupProduct = products.reduce((acc, product) => {
  const date = product.time.slice(0, 10);

  if (!acc[date]) {
    acc[date] = [];
  }
  acc[date].push(product);
  return acc;
}, {});
console.log(groupProduct);
