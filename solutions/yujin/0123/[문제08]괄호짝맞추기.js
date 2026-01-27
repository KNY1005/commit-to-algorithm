function solution(s) {
  let flag = 0;

  for (const ch of s) {
    if (ch === '(') {
      flag++;
    } else flag--;
    // flag가 음수가 되면 올바르지 못한 괄호라 바로 false 반환
    if (flag < 0) return false;
  }

  return flag === 0 ? true : false;
}
