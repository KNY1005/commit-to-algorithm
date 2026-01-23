const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(",").map(Number);

function solution() {
  input.sort((a, b) => a - b);
  console.log(input.join(", "));
}
solution();
