function solution(want, number, discount) {
    let answer = 0;
    // 사용한 상품을 저장할 배열
    const used = [];
  
    // 원하는 상품을 배열 형태로 풀어서 저장
    for (let i = 0; i < want.length; i++) {
        // 원하는 상품의 수량만큼 배열에 추가
      for (let j = 0; j < number[i]; j++) {
        used.push(want[i]);
      }
    }
  
    // 10일씩 슬라이딩 윈도우
    for (let i = 0; i <= discount.length - 10; i++) {
      const temp = used.slice();
      let match = true;
  
      // 현재 10일간 할인 목록 검사
      for (let j = i; j < i + 10; j++) {
        const idx = temp.indexOf(discount[j]);
  
        // 원하는 상품이 없거나 수량 초과일 경우 탈락
        if (idx === -1) {
          match = false;
          // 탈락하면 반복문 비상상탈출
          break;

        } else {
          // 사용한 상품 제거
          temp.splice(idx, 1);
      }
      // 매칭되면 카운트 증가
      if (match) answer++;
    }
    
    return answer;
  }
}

//---------------------------------------------
// 슬라이딩 윈도우 + Map 활용

function solution(want, number, discount) {
    let answer = 0;
  
    // 원하는 상품과 수량을 Map으로 저장
    const wantMap = new Map();
    for (let i = 0; i < want.length; i++) {
      wantMap.set(want[i], number[i]);
    }
  
    // 처음 10일간 할인 상품 개수 계산
    const currentMap = new Map();
    for (let i = 0; i < 10; i++) {
      currentMap.set(discount[i], (currentMap.get(discount[i]) || 0) + 1);
    }
  
    // 두 Map이 같은지 확인하는 함수
    function isSame() {
      for (const [key, value] of wantMap) {
        if (currentMap.get(key) !== value) return false;
      }
      return true;
    }
  
    // 첫 구간 검사
    if (isSame()) answer++;
  
    // 슬라이딩 윈도우 적용
    for (let i = 10; i < discount.length; i++) {
      const removeItem = discount[i - 10];
      const removeCount = currentMap.get(removeItem) - 1;

      if (removeCount === 0) currentMap.delete(removeItem);
      else currentMap.set(removeItem, removeCount);
  
      const addItem = discount[i];
      currentMap.set(addItem, (currentMap.get(addItem) || 0) + 1);
  
      if (isSame()) answer++;
    }
  
  // 최종 결과 반환
  return answer;
}

// 슬라이딩 윈도우
// 한 번에 한 칸씩 이동하며 데이터를 처리하는 방법
// 슬라이딩 윈도우를 사용하면 시간 복잡도를 줄일 수 있음

// set 메서드
// 중복을 제거하는 데 사용되며, 중복된 값을 제거하고 유니크한 값만 남김

// Map 메서드
// 키와 값의 쌍을 저장하는 자료구조
// 키를 사용하여 값을 조회할 수 있음
// 키는 중복될 수 없음
// 값은 중복될 수 있음