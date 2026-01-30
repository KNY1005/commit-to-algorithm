function solution(phone_book) {
  // 전화번호를 사전순으로 정렬
  phone_book.sort();

  // 전화번호 배열 길이만큼 순회
  for (let i = 0; i < phone_book.length - 1; i++) {

    // 인접한 번호끼리 접두어 관계인지 확인
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      // 있으면 false
      return false;
    }
  }
  // 없으면 ture
  return true;
}

// startWith()
// 문자열이 특정 문자열로 시작하는지 확인하는 메서드