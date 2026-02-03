function solution(participant, completion) {
    // 1. reduce로 참가자 명단 만들기
    const userHash = participant.reduce((obj, cur) => {
        obj[cur] = (obj[cur] || 0) + 1;
        return obj; // 다음 루프로 객체를 넘겨줌
    }, {});

    // 2. 완주자 처리
    for (const name of completion) {
        userHash[name]--;
    }

    // 3. 결과 반환
    return Object.keys(userHash).find(key => userHash[key] > 0);
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"