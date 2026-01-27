function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  // 중복 제거
  const sorted_arr = [...new Set(answer)];

  return sorted_arr.sort((a, b) => a - b);
}
