const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('');

function solution() {
  // 뒤에서부터 순회 (앞에서 지우면 인덱스가 밀리기 때문)
  for (let i = input.length - 2; i >= 0; i--) {
    if (input[i] === '(' && input[i + 1] === ')') {
      // 두 문자를 배열에서 제거
      input.splice(i, 2);
    }
  }
}
solution();

console.log(input.length === 0 ? true : false);
