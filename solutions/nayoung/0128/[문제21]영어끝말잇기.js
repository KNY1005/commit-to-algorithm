function solution(n, words) {
  // 탈락자 번호와 차례를 저장할 배열
  const answer = []; 

    // 단어 배열 순회
    for (let i = 0; i < words.length; i++) {

      // 현재 차례의 단어
      const word = words[i]; 

      // 한 글자인 단어는 인정되지 않으므로 탈락
      if (word.length < 2) {

        // 탈락한 사람 번호와 차례 반환
        return [(i % n) + 1, Math.floor(i / n) + 1];
      }

      // 첫 단어가 아니라면, 이전 단어의 끝 글자와 현재 단어의 첫 글자 비교
      if (i > 0) {
        // 이전 단어
        const prev = words[i - 1]; 

        // 이전 단어의 끝 글자와 현재 단어의 첫 글자 비교
        if (prev[prev.length - 1] !== word[0]) {

        // 끝말잇기 규칙 위반 시 탈락
        return [(i % n) + 1, Math.floor(i / n) + 1];
      }
    }

    // 이미 사용된 단어인지 확인
    if (answer.indexOf(word) !== -1) {
      // 중복 단어 사용 시 탈락
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    // 현재 단어를 사용된 단어 목록에 추가
    answer.push(word);
  }

  // 모든 단어를 문제 없이 사용했다면 탈락자가 없으므로 [0, 0] 반환
  return [0, 0];
}
