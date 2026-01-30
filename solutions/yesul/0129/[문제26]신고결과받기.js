function solution(id_list, report, k) {
    // 중복된 신고 제거
    const uniqueReport = [...new Set(report)];

    const reported = uniqueReport.reduce((acc, cur) => {
        const [reporter, reportee] = cur.split(' ');
        // 위에서 중복 제거 했으니 new Set() 안하고 array 사용해도 됨
        if (!acc[reportee]) acc[reportee] = new Set();
        acc[reportee].add(reporter);
        return acc;
    }, {});

    // 메일 받을 횟수 저장소
    const mailCount = {};
    id_list.forEach(id => mailCount[id] = 0);

    // 정지 기준 확인 및 메일 발송 카운트
    for (const reportee in reported) {
        const reporters = reported[reportee];

        // 신고자 수가 k명 이상이면 정지!
        if (reporters.size >= k) {
            // 이 사람을 신고한 모든 사람에게 메일 +1
            reporters.forEach(reporter => {
                mailCount[reporter] += 1;
            });
        }
    }

    // id_list 순서대로 배열 만들어 반환
    return id_list.map(id => mailCount[id]);
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2))