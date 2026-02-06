// 해당 문제는 못풀겠어서 gpt에게 강습?받은 코드입니다


function solution(genres, plays) {
  const answer = []; // 최종 결과(고유번호)를 담을 배열

  // 장르별 총 재생 수 구하기
  // 객체를 이렇게 쓰는군요!
  const totalByGenre = {}
  
  // genres배열 길이 만큼 돌면서 반복

  for (let i = 0; i < genres.length; i++) {

    const g = genres[i]; // 현재 곡의 장르
    if (totalByGenre[g] === undefined) { // 해당 장르가 아직 없으면
      totalByGenre[g] = 0; // 0으로 초기화
    }
    totalByGenre[g] = totalByGenre[g] + plays[i]; // 해당 장르의 재생수 누적
  }

  // 2. 장르별로 곡 정보(고유번호, 재생수) 모으기
  const songsByGenre = {}; // { 장르명: [[고유번호, 재생수], ...] }

  for (let j = 0; j < genres.length; j++) {
    const genre = genres[j]; // 현재 곡의 장르
    if (songsByGenre[genre] === undefined) { // 해당 장르 배열이 없으면
      songsByGenre[genre] = []; // 빈 배열 생성
    }
    songsByGenre[genre].push([j, plays[j]]); // [고유번호, 재생수] 형태로 추가
  }

  // 3. 각 장르 안에서 곡 정렬하기
  for (const key in songsByGenre) { // 모든 장르를 하나씩 돌면서
    const list = songsByGenre[key]; // 해당 장르의 곡 목록

    // 재생수 큰 순, 같으면 고유번호 작은 순으로 정렬
    list.sort((a, b) => {
      if (b[1] > a[1]) { // b의 재생수가 더 크면
        return 1; // b를 앞으로
      } else if (b[1] < a[1]) { // a의 재생수가 더 크면
        return -1; // a를 앞으로
      } else { // 재생수가 같으면
        return a[0] - b[0]; // 고유번호 작은 순
      }
    });
  }

  // 4. 장르 이름만 뽑아서 총 재생 수 기준으로 정렬
  const genreNames = []; // 장르 이름만 담을 배열

  for (const key in totalByGenre) { // totalByGenre 객체를 돌면서
    genreNames.push(key); // 장르 이름 추가
  }

  // 총 재생 수가 큰 장르부터 오도록 정렬
  genreNames.sort((a, b) => {
    return totalByGenre[b] - totalByGenre[a];
  });

  // 5. 장르 순서대로, 각 장르에서 최대 2곡씩 고유번호만 answer에 넣기
  for (let r = 0; r < genreNames.length; r++) {
    const genre = genreNames[r]; // 현재 처리 중인 장르
    const songs = songsByGenre[genre]; // 해당 장르의 곡 목록

    let count = 0; // 해당 장르에서 몇 곡 넣었는지 카운트

    for (let s = 0; s < songs.length && count < 2; s++) { // 최대 2곡까지만
      answer.push(songs[s][0]); // 고유번호만 결과 배열에 추가
      count = count + 1; // 한 곡 추가했으니 카운트 증가
    }
  }

  return answer; // 최종 결과 반환
}
