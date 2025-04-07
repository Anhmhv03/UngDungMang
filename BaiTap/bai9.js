// Bài 9: Kiểm tra người dùng có đơn hàng lặp không

const orders = [
  { userId: "u1", productId: "p1" },
  { userId: "u2", productId: "p1" },
  { userId: "u1", productId: "p1" },
];
const userProductCount = {};

orders.forEach((order) => {
  const { userId, productId } = order;
  if (!userProductCount[userId]) {
    userProductCount[userId] = {};
  }
  userProductCount[userId][productId] =
    (userProductCount[userId][productId] || 0) + 1;
});

const duplicatedUsers = Object.entries(userProductCount)
  .filter(([userId, products]) =>
    Object.values(products).some((count) => count >= 2)
  )
  .map(([userId]) => userId);

console.log(duplicatedUsers);
