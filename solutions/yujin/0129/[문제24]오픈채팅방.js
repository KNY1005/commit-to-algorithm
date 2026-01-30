function solution(record) {
  let answer = [];
  const arr = record.map((item) => item.split(' '));

  const obj = {};

  for (const [act, id, name] of arr) {
    // 떠나는 경우는 이름과 상관이 없으므로 냅두기
    if (act !== 'Leave') {
      obj[id] = name;
    }
  }
  for (const [act, id, _] of arr) {
    const name = obj[id];
    if (act === 'Enter') {
      answer.push(`${name}님이 들어왔습니다.`);
    } else if (act === 'Leave') {
      answer.push(`${name}님이 나갔습니다.`);
    }
  }
  return answer;
}
