// function isValid(s) {
//   let check = [];
//   for (let i = 0; i < s.length; i++) {
//     check.push(s[i]);

//     // 현재 스택 길이
//     let num = check.length;

//     if (check[num - 2] === '[' && check[num - 1] === ']')
//       check.splice(num - 2, 2);
//     if (check[num - 2] === '{' && check[num - 1] === '}')
//       check.splice(num - 2, 2);
//     if (check[num - 2] === '(' && check[num - 1] === ')')
//       check.splice(num - 2, 2);
//   }
//   if (check.length == 0) {
//     return true;
//   }
// }

// function solution(s) {
//   let count = 0;
//   // 문자열을 회전시키면서 검사
//   for (let i = 0; i < s.length; i++) {
//     // 현재 문자열이 올바른 괄호면 카운트 증가
//     if (isValid(s)) {
//       count++;
//     }
//     // 문자열을 왼쪽으로 한 칸 회전
//     s = s.slice(1) + s[0];
//   }
//   return count;
// }

function isValid(str) {
  const stack = [];
  // 올바른 괄호 문자열을 객체형태로 저장
  const object = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (let i = 0; i < str.length; i++) {
    const chr = str[i];
    // 현재 문자가 여는 괄호라면 stack에 push
    if (object[chr]) {
      stack.push(chr);
    } else {
      // stack 배열 길이가 0인경우, 배열 마지막에 저장된 값의 value값이 현재 chr과 같지 않은 경우 무조건 false
      if (stack.length === 0 || object[stack.pop()] !== chr) {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
}

function solution(s) {
  let count = 0;
  // s 길이만큼 for문 반복
  for (let i = 0; i < s.length; i++) {
    // 문자열이 "올바른 괄호 문자열"인지 확인
    if (isValid(s)) {
      count++;
    }
    // s문자열 맨 앞 문자를 s문자열의 맨 뒤로 이동
    s = s.slice(1) + s[0];
  }
  return count;
}
