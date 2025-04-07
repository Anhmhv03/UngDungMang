// Bài 2: Đếm số người truy cập mỗi ngày
// **Mô tả:**
// Cho mảng log timestamp ISO. Tính số lượt truy cập theo ngày (yyyy-mm-dd).

const logs = [
  "2024-04-01T12:00:00Z",
  "2024-04-01T15:00:00Z",
  "2024-04-02T08:00:00Z",
];
const count = (logs) => {
  return logs.reduce((acc, log) => {
    const date = log.slice(0, 10);

    acc[date] = (acc[date] || 0) + 1;

    return acc;
  }, {});
};
const result = count(logs);
console.log(result);
