
// 매개변수 arr과 target을 입력받기
function solution(arr, target) {

    //arr의 배열의 길이만큼 2번 반복
    for (let i = 0; i < arr.length; i++) {
        // arr의 i번째 이후의 배열 길이만큼 반복 / 중복 방지
        for (let j = i + 1; j < arr.length; j++) {
            
            // 두 수의 합이 target과 같으면 True 반환
            if (arr[i] + arr[j] === target) {
                return "True";
            }
        }
    }
    // 합이 target인 두 수가 없으면 false 반환
    return "false";
}

console.log(solution([1, 2, 3, 4, 8], 6)); // True
console.log(solution([2, 3, 5, 9], 10)); // false