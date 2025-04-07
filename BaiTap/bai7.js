// Bài 7: Gom các bài viết theo tác giả
const posts = [
  { title: "React cơ bản", author: "Nam" },
  { title: "JS nâng cao", author: "Linh" },
  { title: "React Router", author: "Nam" },
];
const groupedByAuthor = posts.reduce((acc, post) => {
  const { author, title } = post;

  if (!acc[author]) {
    acc[author] = [];
  }

  acc[author].push(title);
  return acc;
}, {});

console.log(groupedByAuthor);
