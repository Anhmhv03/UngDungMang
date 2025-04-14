const { count } = require("console");

const lists = [
  { keyword: "react" },
  { keyword: "vue" },
  { keyword: "react" },
  { keyword: "angular" },
  { keyword: "react" },
];

const counts = lists.reduce((acc, list) => {
  const key = list.keyword;
  acc[key] = (acc[key] || 0) + 1;
  return acc;
}, {});
const phoBien = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
console.log(phoBien);
