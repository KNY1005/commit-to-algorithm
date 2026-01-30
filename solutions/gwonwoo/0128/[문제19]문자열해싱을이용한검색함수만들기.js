function solution(string, query) {
  let answer = [];

  const set = new Set(query);
  for (let str of string) {
    if (set.has(str)) {
      answer.push('True');
    } else {
      answer.push('false');
    }
  }
  return answer;
}
