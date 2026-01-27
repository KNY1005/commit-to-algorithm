function solution(s) {
  const stack = [];
  for (const ch of s) {
    // 스택이 빈 경우 문자를 넣고
    if (stack.length === 0) {
      stack.push(ch);
    } else {
      // 아닌 경우 stack 가장 위 문자와 비교
      if (stack[stack.length - 1] === ch) stack.pop();
      else stack.push(ch);
    }
  }
  // 스택이 비었을 경우만 다 비운 것
  return stack.length === 0 ? 1 : 0;
}
