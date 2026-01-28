function solution(progresses, speeds) {
    // 각 일자 배열
    const answer = [];
    // 배포 일 수 별 배열
    const arr = [];
    // 배포일 수 카운트 / 상수
    let count = 1;
    
    
    // 각 기능이 몇일 걸리는지 계산
    for(let i = 0; i < progresses.length; i++){
        // 각 기능별 일자 구하고 반올림 후 배열에 넣어버리기
        answer.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    
    // 배포일자 그룹화 하기
    // answer 배열을 맨처음부터!
    let arrInt = answer[0];
    // answer 배열 길이만큼 반복
    for(let j = 1; j < answer.length;j++){
        // 같은 배포일수가 맞는지 확인
        if(answer[j] <= arrInt){
            count++
        // 아니면 count 배열에 넣기
        }else{
            arr.push(count);
            arrInt = answer[j];
            count = 1;
        }
    }

    arr.push(count)
    return arr;
}