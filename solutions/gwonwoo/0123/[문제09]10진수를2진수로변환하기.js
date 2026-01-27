const fs = require('fs');
let num = Number(fs.readFileSync(0).toString());

let result = [];
function solution() {
  while (num > 0) {
    let last = num % 2;
    num = Math.floor(num / 2);
    result.push(last);
  }
  // 뒤집어서 올바른 이진수 순서로 변경
  result.reverse();
  console.log(result.join(''));
}
solution();
