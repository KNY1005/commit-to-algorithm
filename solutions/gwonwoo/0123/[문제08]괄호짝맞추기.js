// const fs = require('fs');
// let input = fs.readFileSync(0).toString().trim().split('');

// function solution() {
//   // 뒤에서부터 순회 (앞에서 지우면 인덱스가 밀리기 때문)
//   for (let i = input.length - 2; i >= 0; i--) {
//     if (input[i] === '(' && input[i + 1] === ')') {
//       // 두 문자를 배열에서 제거
//       input.splice(i, 2);
//     }
//   }
// }
// solution();

// console.log(input.length === 0 ? true : false);

function solution(s) {
  // "(" 괄호를 저장할 배열
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      arr.push(s[i]);
    }
    // ")" 괄호인 경우
    else if (s[i] === ')') {
      // 배열이 비어 있으면 짝이 안 맞으므로 false
      if (arr.length === 0) {
        return false;
      }
      // 짝이 맞으면 "(" 괄호 하나 제거
      arr.pop();
    }
  }
  return arr.length === 0;
}
