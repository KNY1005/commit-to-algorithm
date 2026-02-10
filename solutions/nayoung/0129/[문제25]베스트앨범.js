
// 주석 없는 버전
function solution(genres, plays) {
  const answer = []; 
  
  const music = genres.reduce((arr, cur, index) => {
    if (!arr[cur]) {
      arr[cur] = { total: 0, song: [] };
    }
    arr[cur].song.push([index, plays[index]]);
    arr[cur].total += plays[index];
    return arr;
  }, {});

  const genreList = Object.keys(music).sort((a, b) => {
    return music[b].total - music[a].total;
  });

  for (const genre of genreList) {
    music[genre].song.sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return a[0] - b[0];
    });

    answer.push(music[genre].song[0][0]);
    if (music[genre].song.length > 1) {
      answer.push(music[genre].song[1][0]);
    }
  }

  return answer;
}

//----------------------------------------------
// 주석 있는 버전

function solution(genres, plays) {
  const answer = []; 
  
  // 1. reduce로 객체 생성 후 장르별 구조 정의
  // reduce 사용
  const music = genres.reduce((arr, cur, index) => {
    // 해당 장르가 없으면 객체 생성
    if(!arr[cur]){
      arr[cur] = {
        total : 0,
        song : []
      }
    }
    // song 안에 고유번호, 재생수 넣기
    arr[cur].song.push([index, plays[index]])
    // 장르별 총 재생 수 누적
    arr[cur].total += plays[index];
    return arr;
  }, {}); // 의존성 까먹지 말기

  // 2. 총 재생 수 많은 장르부터 정렬
  // Object.keys(music)을 해주면 객체에서 배열로 바꿀 수 있음!
  // a, b는 장르이름 => music[b].total = 해당 장르의 총 재생수 
  const genreList = Object.keys(music).sort((a, b) => {
    return music[b].total - music[a].total
  })
  
  // 3. music객체 안에 있는 모든 장르를 하나씩 꺼내서 반복한다
  for(const genre of genreList){
    // 재생수 내림차순, 같으면 고유번호 오름차순
    music[genre].song.sort((a, b) => {
      // 이해하기 힘들었던 부분
      // 재생수 제일 큰걸 맨 앞으로 정렬
      if (b[1] !== a[1]) return b[1] - a[1];
      // 재생수가 같을 경우 인댁스 작은게 앞으로
      return a[0] - b[0];
    });

    // 장르별 제일 인기 있는 곡 고유번호 넣기
    answer.push(music[genre].song[0][0]);

    // 근데 노래의 갯수가 1개 이상이면 두번째 곡도 넣기
    if(music[genre].song.length > 1){
      answer.push(music[genre].song[1][0])
=======
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

