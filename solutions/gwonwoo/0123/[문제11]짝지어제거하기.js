// function solution(s) {
//   let answer = 0;

//   // 짝을 비교하기 위한 스택 배열
//   const stack = [];
//   // 문자열을 배열로 변환 (문자 하나씩 순회하기 위해)
//   const arr = [...s];

//   for (let chr of arr) {
//     // 스택이 비어있지 않고, 스택의 마지막 값이 현재 문자와 같다면
//     if (stack.length && stack[stack.length - 1] === chr) {
//       // 짝이므로 제거
//       stack.pop();
//     } else {
//       // 짝이 아니면 스택에 추가
//       stack.push(chr);
//     }
//   }

//   stack.length === 0 ? (answer = 1) : (answer = 0);

//   return answer;
// }

function solution(s) {
  const stack = [];
  for (let chr of s) {
    if (stack.length && stack[stack.length - 1] === chr) {
      stack.pop();
    } else {
      stack.push(chr);
    }
  }
  return stack.length === 0 ? 1 : 0;
}
