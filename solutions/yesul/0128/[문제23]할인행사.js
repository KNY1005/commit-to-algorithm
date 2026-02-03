function solution(want, number, discount) {
    let answer = 0;

    const wantMap = want.reduce((acc, cur, index) => {
        acc[cur] = number[index];
        return acc;
    }, {});

    // 0일째 ~ 9일째
    // 마트 할인 기간이 끝나기 10일 전까지만 가입할 있기 때문에
    // discount.length - 10으로 제한
    for (let i = 0; i <= discount.length - 10; i++) {
        // N일차의 할일 목록을 담을 객체
        const discountMap = {};

        // 가입한 날 부터 10일동안 어떤 물품이 몇 개 있는지
        for (let j = i; j < i + 10; j++) {
            const item = discount[j];
            discountMap[item] = (discountMap[item] || 0) + 1;
        }

        // 사고 싶던 것과 개수가 일치하는지 확인
        if (isMatch(wantMap, discountMap)) {
            answer++; // 성공횟수 추가
        }
    }


    function isMatch(wantMap, discountMap) {
        for (const key in wantMap) {
            if (discountMap[key] !== wantMap[key]) return false;
        }
        return true;
    }

    return answer;
}



console.log(
    solution(
        ["banana", "apple", "rice", "pork", "pot"],
        [3, 2, 2, 2, 1],
        ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]
    )
) // 3

console.log(
    solution(["apple"],
        [10],
        ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"],
    )
) // 0