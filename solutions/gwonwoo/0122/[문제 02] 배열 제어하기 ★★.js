const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(",").map(Number);

function solution() {
  const arr = [...new Set(input)];
  arr.sort((a, b) => b - a);

  console.log(arr.join(", "));
}
solution();
