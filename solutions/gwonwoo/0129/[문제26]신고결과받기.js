function solution(list, report, k) {
  const answer = []; // 각 유저가 받은 결과 메일 수

  // 동일한 신고는 중복으로 제거
  const set = [...new Set(report)];
  // 각 유저가 신고당한 수
  const user = set.reduce((acc, cur) => {
    const [p, r] = cur.split(' ');
    acc[r] = (acc[r] || 0) + 1;
    return acc;
  }, {});

  // 신고가 k번 이상 당한 사람 확인
  const reported = Object.keys(user).filter((key) => user[key] >= k);

  // 메일 보낼 유저 확인
  const mail = list.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});

  // 몇 개의 메일을 받을지 확인
  for (let s of set) {
    const [p, r] = s.split(' ');
    if (reported.includes(r)) {
      mail[p]++;
    }
  }

  // 객체를 배열로 변환
  for (let user of list) {
    answer.push(mail[user]);
  }
  return answer;
}
