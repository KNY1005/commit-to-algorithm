function solution(n, words) {
  const answer = [0, 0]; // 정답 배열
  const set = new Set(); // 단어 재사용 확인

  let count = 0; // 단어 인덱스
  let order = 1; // 반복 수
  while (count < words.length) {
    if (count === 0) {
      // 첫번째 문자일 때
      set.add(words[count]); // set에 해당 문자 저장
      count++;
      continue; // 바로 다음 문자 진행
    }
    // 문자가 중복이 아니고, 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해는지 확인
    else if (set.has(words[count]) || check(words[count - 1], words[count])) {
      answer[0] = (count % n) + 1; // 사람 순번 계산
      answer[1] = order;
      break;
    }
    set.add(words[count]);
    count++;

    if (count % n === 0) {
      // 로테이션이 돌 때 order++
      order++;
    }
  }
  return answer;
}

// 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해는지 확인 함수
function check(a, b) {
  return a[a.length - 1] !== b[0] ? true : false;
}
