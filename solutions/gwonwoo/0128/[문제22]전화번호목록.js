function solution(phone) {
  phone.sort(); // 문자열 정렬
  for (let i = 0; i < phone.length - 1; i++) {
    const a = phone[i];
    const b = phone[i + 1];

    let count = 0;
    let answer = true;
    for (let j = 0; j < a.length; j++) {
      if (a[j] !== b[j]) {
        break;
      }
      count++;
    }
    if (count === a.length) {
      answer = false;
    }
    if (!answer) return answer;
  }

  return true;
}
