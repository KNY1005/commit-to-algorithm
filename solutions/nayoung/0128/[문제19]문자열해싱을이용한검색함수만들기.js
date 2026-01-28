function solution(stringList, qurryList) {
    // 빈 배열 생성
    const answer = [];

    // stringList와 qurryList의 길이만큼 2중 반복문 실행
    for (let i = 0; i < qurryList.length; i++) {

        for (let j = 0; j < stringList.length; j++) {

            // 두 문자열이 같으면 True, 다르면 false를 answer배열에 추가
            if (stringList[j] == qurryList[i]) {
                answer.push("True");
                // 같으면 내부 반복문 탈출
                break;
            }
        }
        // 내부 반복문에서 break되지 않고 끝까지 돌았을 때 false 추가
        if (answer.length - 1 < i) {
            answer.push("false");
        }
    }
    return answer;
}

console.log(solution(["apple", "banana", "charry"], ["banana", "kiwi", "melon", "apple"])); 
// [True, false, false, True]