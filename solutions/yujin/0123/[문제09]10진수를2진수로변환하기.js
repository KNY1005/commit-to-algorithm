function solution(num) {
  const answer = [];
  while (num > 0) {
    answer.push(num % 2);
    num = parseInt(num / 2);
  }

  return answer.reverse();
}

console.log(solution(13));
