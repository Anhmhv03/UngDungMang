// Bài 3: Gom chuỗi email theo domain
// **Mô tả:**
// Cho danh sách email, gom theo domain.

// **Input:**
// ```js
// ["a@gmail.com", "b@yahoo.com", "c@gmail.com"]
// ```
// **Output:**
// ```js
// {
//   "gmail.com": ["a@gmail.com", "c@gmail.com"],
//   "yahoo.com": ["b@yahoo.com"]
// }
// ```

// ---

const emails = ["a@gmail.com", "b@yahoo.com", "c@gmail.com"];

const groupDomain = emails.reduce((acc, email) => {
  const id = email.split("@")[1];
  if (!acc[id]) {
    acc[id] = [];
  }
  acc[id].push(email);

  return acc;
}, {});
console.log(groupDomain);
