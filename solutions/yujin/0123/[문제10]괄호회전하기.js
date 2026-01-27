function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let flag = true;

    // 회전시키기
    let test_arr = s.slice(i) + s.slice(0, i);

    for (const ch of test_arr) {
      // 열린 괄호 push
      if (ch === '(' || ch === '[' || ch === '{') stack.push(ch);
      else {
        // 들어간 괄호가 없으면 틀린 것
        if (stack.length === 0) {
          flag = false;
          break;
        }

        // 짝에 맞지 않다면 틀린 것
        if (ch === ')') {
          if (stack.pop() === '(') continue;
          else {
            flag = false;
            break;
          }
        }
        if (ch === ']') {
          if (stack.pop() === '[') continue;
          else {
            flag = false;
            break;
          }
        }
        if (ch === '}') {
          if (stack.pop() === '{') continue;
          else {
            flag = false;
            break;
          }
        }
      }
    }

    // flag는 괄호의 짝이 맞는 지 판별
    // stack.length는 괄호의 갯수가 맞는 지 판별
    if (flag && stack.length === 0) answer++;
  }
  return answer;
}
