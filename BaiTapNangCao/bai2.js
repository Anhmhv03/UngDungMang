// Bài 2: Xác định người dùng hoạt động nhiều ngày liên tiếp nhất
// **Mô tả:**
// Cho `{ userId, date: 'YYYY-MM-DD' }`, tìm user có số ngày truy cập liên tục dài nhất.

// **Input:**
// ```js
// [
//   { userId: "u1", date: "2024-04-01" },
//   { userId: "u1", date: "2024-04-02" },
//   { userId: "u1", date: "2024-04-04" },
//   { userId: "u2", date: "2024-04-01" },
//   { userId: "u2", date: "2024-04-02" },
//   { userId: "u2", date: "2024-04-03" }
// ]
// ```

// **Output:** `"u2"` (vì có 3 ngày liên tiếp)

// **Hint:** Sắp xếp theo `date`, đếm chuỗi liên tục theo từng `userId`.

const logs = [
  { userId: "u1", date: "2024-04-01" },
  { userId: "u1", date: "2024-04-02" },
  { userId: "u1", date: "2024-04-04" },
  { userId: "u2", date: "2024-04-01" },
  { userId: "u2", date: "2024-04-02" },
  { userId: "u2", date: "2024-04-03" },
];

const groupLog = logs.reduce((acc, log) => {
  const { userId, date } = log;
  if (!acc[userId]) acc[userId] = [];
  if (!acc[userId].includes(date)) acc[userId].push(date);
  return acc;
}, {});
