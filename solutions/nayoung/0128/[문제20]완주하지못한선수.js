function solution(participant, completion) {
    // 정렬 후 비교
    participant.sort()
    completion.sort()
    
    // 완주하지 못한 선수 찾기
    for (let i = 0; i < completion.length; i++) {
        // participant와 completion이 다르면 해당 선수 반환
        if (participant[i] != completion[i]) {
                return participant[i];
            }
        }
    // 마지막 선수 반환
    return participant[participant.length - 1];
}
