const data = [
  { content: "Tôi học JavaScript mỗi ngày." },
  { content: "JavaScript rất mạnh. JavaScript phổ biến." },
];

const count = data.reduce((total, item) => {
  const matches = item.content.match(/JavaScript/g);
  return total + (matches ? matches.length : 0);
}, 0);

console.log(count);
