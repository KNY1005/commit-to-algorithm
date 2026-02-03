function solution(record) {
  const answer = [];
  // uid별 최종 닉네임을 저장할 객체
  const nickByUid = {};

  // record배열을 길이만큼 돌면서 uid와 닉네임 정보만 먼저 수집
  for (let i = 0; i < record.length; i++) {
    const line = record[i];
    // 공백 기준으로 잘라서 첫 단어가 명령, 그 다음이 uid, 닉네임
    const parts = line.split(" ");
    const cmd = parts[0];
    const uid = parts[1];

    // Enter나 Change일 때만 닉네임이 있으니까 그때 nickByUid 갱신
    if (cmd === "Enter" || cmd === "Change") {
      const nick = parts[2];
      nickByUid[uid] = nick;
    }
  }

  // 다시 record를 돌면서 Enter/Leave인 경우만 메시지를 만든다
  // 이때 nickByUid에 저장된 최종 닉네임을 씀
  for (let j = 0; j < record.length; j++) {
    const line2 = record[j];

    const parts2 = line2.split(" ");
    const cmd2 = parts2[0];
    const uid2 = parts2[1];

    
    if (cmd2 === "Enter") {
      answer.push(nickByUid[uid2] + "님이 들어왔습니다.");
    } else if (cmd2 === "Leave") {
      answer.push(nickByUid[uid2] + "님이 나갔습니다.");
    }
    // "Change"는 메시지를 남기지 않으므로 아무것도 안 함
  }

  return answer;
}

// ========== 사용한 메서드 정리 ==========
// - String.prototype.split(" ")  : 문자열을 공백 기준으로 나눠 배열로 만듦
// - Array.prototype.push(...)  : 배열 맨 뒤에 값 추가
//- 객체 nickByUid[키] = 값  : 해시로 uid → 최종 닉네임 저장
