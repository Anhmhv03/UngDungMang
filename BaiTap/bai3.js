// Bài 3: Lọc sản phẩm còn hàng theo danh mục
const shops = [
  { id: 1, name: "Áo", category: "Thời trang", stock: 10 },
  { id: 2, name: "Quần", category: "Thời trang", stock: 0 },
  { id: 3, name: "Chuột", category: "Công nghệ", stock: 5 },
];
const conHang = shops.filter((shop) => shop.stock > 0);
const groupByCategory = conHang.reduce((acc, shop) => {
  if (!acc[shop.category]) {
    acc[shop.category] = [];
  }
  acc[shop.category].push(shop);
  return acc;
}, {});
console.log(groupByCategory);
