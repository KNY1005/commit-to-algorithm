const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let x = 0,
  y = 0;
const visit = new Set();

function solution(dirs) {
  let nx = x;
  let ny = y;

  if (dirs === "U") ny++;
  else if (dirs === "D") ny--;
  else if (dirs === "L") nx--;
  else if (dirs === "R") nx++;

  if (nx < -5 || nx > 5 || ny < -5 || ny > 5) return;

  const path1 = `${x},${y}-${nx},${ny}`;
  const path2 = `${nx},${ny}-${x},${y}`;
  visit.add(path1 < path2 ? path1 : path2);

  x = nx;
  y = ny;
}

for (let i = 0; i < input.length; i++) {
  solution(input[i]);
}

console.log(visit.size);
