// Bài 6: Lấy top 3 sản phẩm được click nhiều nhất
const clicks = [
  { productId: "p1" },
  { productId: "p2" },
  { productId: "p1" },
  { productId: "p3" },
  { productId: "p1" },
  { productId: "p2" },
];

const frequency = clicks.reduce((acc, click) => {
  const id = click.productId;
  acc[id] = (acc[id] || 0) + 1;
  return acc;
}, {});

const sorted = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
const top3 = sorted.slice(0, 3).map(([productId]) => productId);

console.log(top3);
