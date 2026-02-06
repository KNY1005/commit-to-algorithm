// 해당 문제는 못풀겠어서 gpt에게 강습?받은 코드입니다



function solution(id_list, report, k) {
  const answer = []; // 최종 결과를 담을 배열

  // 1. report 배열에서 중복 신고 제거 (Set 사용)
  const reportSet = new Set(report); // 같은 "신고자 신고당한자"는 자동으로 한 번만 남음

  // 2. 신고당한 사람별로 신고 횟수 세기 (Map 사용)
  const reportedCount = new Map(); // key: 신고당한id, value: 신고당한 횟수

  for (const entry of reportSet) { // 중복 제거된 신고 목록을 하나씩 돌면서
    const parts = entry.split(" "); // ["신고자", "신고당한자"]
    const reportedId = parts[1]; // 신고당한 사람

    if (!reportedCount.has(reportedId)) { // 아직 카운트가 없으면
      reportedCount.set(reportedId, 0); // 0으로 초기화
    }
    reportedCount.set(reportedId, reportedCount.get(reportedId) + 1); // 신고 횟수 증가
  }

  // 3. k번 이상 신고당한 사람을 정지 대상 Set으로 만들기
  const suspended = new Set(); // 정지된 유저 id들을 저장하는 Set

  for (const [id, count] of reportedCount) { // Map을 돌면서
    if (count >= k) { // 신고 횟수가 k 이상이면
      suspended.add(id); // 정지 대상에 추가
    }
  }

  // 4. 각 유저가 받은 메일 수를 Map으로 관리
  const mailCount = new Map(); // key: 유저id, value: 받은 메일 수

  for (let i = 0; i < id_list.length; i++) {
    mailCount.set(id_list[i], 0); // 모든 유저의 메일 수를 0으로 초기화
  }

  // 5. 신고 기록을 다시 돌면서, 정지된 사람을 신고한 유저에게 메일 +1
  for (const entry of reportSet) {
    const parts = entry.split(" "); // ["신고자", "신고당한자"]
    const reporter = parts[0]; // 신고한 사람
    const reported = parts[1]; // 신고당한 사람

    if (suspended.has(reported)) { // 신고당한 사람이 정지 대상이면
      mailCount.set(reporter, mailCount.get(reporter) + 1); // 신고자 메일 수 +1
    }
  }

  // 6. id_list 순서대로 메일 받은 횟수를 answer에 넣기
  for (let i = 0; i < id_list.length; i++) {
    answer.push(mailCount.get(id_list[i])); // Map에서 값 꺼내서 결과 배열에 추가
  }

  return answer; // 최종 결과 반환
}
