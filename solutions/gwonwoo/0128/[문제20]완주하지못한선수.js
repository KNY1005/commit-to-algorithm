function solution(participant, completion) {
  participant.sort(); // 참가자 이름 정렬
  completion.sort(); // 통과자 이름 정렬

  for (let i = 0; i < participant.length; i++) {
    // 통과하지 못한 딱 한 사람만 출력하기 때문에 정렬했을 때 맞지 않은 사람 출력
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
