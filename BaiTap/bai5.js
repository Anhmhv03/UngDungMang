// Bài 5: Tính thời lượng xem video theo user
const products = [
  { userId: "u1", videoId: "v1", durationWatched: 30 },
  { userId: "u2", videoId: "v2", durationWatched: 45 },
  { userId: "u1", videoId: "v3", durationWatched: 15 },
];

const groupUser = products.reduce((acc, product) => {
  if (!acc[product.userId]) {
    acc[product.userId] = 0;
  }
  acc[product.userId] += product.durationWatched;
  return acc;
}, {});
console.log(groupUser);
