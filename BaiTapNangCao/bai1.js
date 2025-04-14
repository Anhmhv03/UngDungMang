// Bài 1: Phân tích hành vi click theo giờ
// **Mô tả:**
// Cho mảng log `{ timestamp: ISOString }`, đếm số lượt click theo từng giờ trong ngày (0-23).

// **Input:**
// ```js
// [
//   { timestamp: "2024-04-01T08:10:00Z" },
//   { timestamp: "2024-04-01T08:30:00Z" },
//   { timestamp: "2024-04-01T14:45:00Z" }
// ]
// ```

// **Output:**
// ```js
// { "8": 2, "14": 1 }
// ```

const logs = [
  { timestamp: "2024-04-01T08:10:00Z" },
  { timestamp: "2024-04-01T08:30:00Z" },
  { timestamp: "2024-04-01T14:45:00Z" },
];

const count = logs.reduce((acc, log) => {
  const hour = new Date(log.timestamp).getUTCHours();
  acc[hour] = (acc[hour] || 0) + 1;
  console.log(hour);
  return acc;
}, {});
console.log(count);
