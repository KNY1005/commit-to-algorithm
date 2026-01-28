function solution(a, b, goal) {
  // goal 문자열을 문자로 하나씩 전달
  for (let word of goal) {
    // 현재 단어가 a의 맨 앞 카드와 같다면
    if (word === a[0]) {
      a.shift();
    }
    // 현재 단어가 b의 맨 앞 카드와 같다면
    else if (word === b[0]) {
      b.shift();
    }
    // a, b 어느 쪽에서도 만족하지 않으면
    else {
      return 'No';
    }
  }
  return 'Yes';
}
