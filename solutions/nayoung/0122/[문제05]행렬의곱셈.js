function solution(arr1, arr2) {
    // 결과를 담을 빈 배열 생성
    const answer = [];

    // arr1의 각 행을 하나씩 반복
    for(let i = 0; i < arr1.length; i++){
        // 결과 배열에 빈 배열을 하나 생성
        answer.push([]);

        // arr2의 각 열을 하나씩 반복
        for(let j = 0; j < arr2[0].length; j++){
            // 곱해서 더한 값을 저장할 변수 초기화
            let sum = 0;

            // arr1의 행과 arr2의 열을 곱해서 더하기
            for(let k = 0; k < arr1[0].length; k++){
                // arr1의 i번째 행과 arr2의 j번째 열의 곱셈 및 누적 합산
                sum += arr1[i][k] * arr2[k][j];
            }
            // 계산된 sum의 값을 결과 배열에 추가
            answer[i].push(sum);
        }
    }
    return answer;
}

const arr1 = [[1, 4], [3, 2], [4, 1]];
const arr2 = [[3, 3], [3, 3]];
console.log(solution(arr1, arr2));