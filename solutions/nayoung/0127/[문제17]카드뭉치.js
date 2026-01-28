function solution(cards1, cards2, goal) {
    // goal배열 길이만큼 반복
    for(let i = 0; i < goal.length; i++){
        // cards1 제일 앞 데이터와 goal의 배열과 비교
        if(cards1[0] == goal[i]){
            // 맞으면 cards1 맨 앞 배열 삭제
            cards1.shift()
        }else if(cards2[0] == goal[i]){
            cards2.shift()
        }else{
            return "No"
        }   
    }
    return "Yes";
}