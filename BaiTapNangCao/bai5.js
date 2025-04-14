// ✅ Bài 5: Tổng thời gian làm việc theo user
// **Mô tả:**
// Cho `{ userId, checkIn, checkOut }` (định dạng ISO string), tính tổng số phút làm việc mỗi user.

// **Input:**
// ```js
// [
//   { userId: "u1", checkIn: "2024-04-01T08:00:00Z", checkOut: "2024-04-01T10:00:00Z" },
//   { userId: "u1", checkIn: "2024-04-01T13:00:00Z", checkOut: "2024-04-01T15:00:00Z" },
//   { userId: "u2", checkIn: "2024-04-01T09:00:00Z", checkOut: "2024-04-01T10:00:00Z" }
// ]
// ```

// **Output:** `{ u1: 240, u2: 60 }` (đơn vị: phút)

// ---
const logs = [
  {
    userId: "u1",
    checkIn: "2024-04-01T08:00:00Z",
    checkOut: "2024-04-01T10:00:00Z",
  },
  {
    userId: "u1",
    checkIn: "2024-04-01T13:00:00Z",
    checkOut: "2024-04-01T15:00:00Z",
  },
  {
    userId: "u2",
    checkIn: "2024-04-01T09:00:00Z",
    checkOut: "2024-04-01T10:00:00Z",
  },
];

const tongThoiGian = logs.reduce((acc, log) => {
  const { userId, checkIn, checkOut } = log;
  const inTime = new Date(checkIn);
  const outTime = new Date(checkOut);
  const minutes = (outTime - inTime) / (1000 * 60);

  acc[userId] = (acc[userId] || 0) + minutes;
  return acc;
}, {});
console.log(tongThoiGian);
