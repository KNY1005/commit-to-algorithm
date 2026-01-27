function isValid(s) {
  let check = [];
  for (let i = 0; i < s.length; i++) {
    check.push(s[i]);

    // 현재 스택 길이
    let num = check.length;

    if (check[num - 2] === '[' && check[num - 1] === ']')
      check.splice(num - 2, 2);
    if (check[num - 2] === '{' && check[num - 1] === '}')
      check.splice(num - 2, 2);
    if (check[num - 2] === '(' && check[num - 1] === ')')
      check.splice(num - 2, 2);
  }
  if (check.length == 0) {
    return true;
  }
}

function solution(s) {
  let count = 0;
  // 문자열을 회전시키면서 검사
  for (let i = 0; i < s.length; i++) {
    // 현재 문자열이 올바른 괄호면 카운트 증가
    if (isValid(s)) {
      count++;
    }
    // 문자열을 왼쪽으로 한 칸 회전
    s = s.slice(1) + s[0];
  }
  return count;
}
