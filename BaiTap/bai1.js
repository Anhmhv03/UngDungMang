// Bài 1: Tổng doanh thu theo người dùng
// **Mô tả:**
// Cho danh sách đơn hàng `{ userId: string, amount: number }`.
// Tính tổng doanh thu của mỗi user.
let pers = [
  { userId: "u1", amount: 100 },
  { userId: "u2", amount: 200 },
  { userId: "u1", amount: 150 },
];
const daTinh = pers.reduce((acc, per) => {
  if (!acc[per.userId]) {
    acc[per.userId] = 0;
  }
  acc[per.userId] += per.amount;
  console.log(per.userId);
  return acc;
}, {});

console.log(daTinh);
