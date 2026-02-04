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
    }
  }

  return answer; // 최종 결과 반환
}


// const in : 값을 꺼낼 때 사용
// for of : 키(인덱스, 프로퍼티명)을 꺼낼 때
