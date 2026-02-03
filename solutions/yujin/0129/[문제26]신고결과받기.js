function solution(id_list, report, k) {
  let answer = [];
  // 누가 누구 신고했는지 리스트 만들기
  const report_map = new Map();
  for (const item of report) {
    const [reporter, reported] = item.split(' ');
    if (report_map.has(reporter)) {
      report_map.get(reporter).add(reported);
    } else {
      // 같은 사람 신고한 건 안 들어가니까 set으로 중복 제거
      report_map.set(reporter, new Set());
      report_map.get(reporter).add(reported);
    }
  }

  // 누가 몇번 신고당했는지 리스트 만들기
  const acc_report_map = new Map();
  [...report_map].map(([_, reported_list]) => {
    reported_list.forEach((reported) =>
      acc_report_map.set(reported, (acc_report_map.get(reported) || 0) + 1)
    );
  });

  for (const id of id_list) {
    if (report_map.get(id)) {
      let result = 0;
      report_map.get(id).forEach((item) => {
        if (acc_report_map.get(item) >= k) {
          result++;
        }
      });
      answer.push(result);
    } else {
      answer.push(0);
    }
  }
  return answer;
}
