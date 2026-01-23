function solution(N, stages) {
    const result = [];
    // N+2인 이유,
    // stage 0은 존재하지 않고, N+1은 모든 스테이지를 클리어한 사용자이기 때문
    const stageUsers = Array(N + 2).fill(0);

    // stageUsers 배열에 스테이지에 도달한 사용자 수를 카운트
    stages.forEach(stage => stageUsers[stage]++);

    let remainingUsers = stages.length;

    for (let stage = 1; stage <= N; stage++) {
        const failed = stageUsers[stage];
        // 실패율 계산
        const failureRate = failed / remainingUsers;
        result.push([stage, failureRate]);
        remainingUsers -= failed;
    }

    return result
        // 실패율 내림차순 정렬
        .sort((a, b) => b[1] === a[1] ? a[0] - b[0] : b[1] - a[1])
        // 스테이지 번호 반환
        .map(v => v[0]);
}



console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
console.log(solution(4, [4, 4, 4, 4, 4]))