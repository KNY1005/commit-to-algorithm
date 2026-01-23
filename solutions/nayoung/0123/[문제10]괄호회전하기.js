function solution(guarho) {
    let count = 0;
    const n = guarho.length; // 문자열 길이
    
    // 괄호 짝 맞춰주기
    const pair = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    // 올바른 괄호 문자열인지 검사하는 함수
    function isValid(str) {
        let stack = [];
        for (let ch of str) {  // str 문자열에서 문자 하나씩 꺼내서 ch에 할당
            if (ch === '(' || ch === '[' || ch === '{') {  // ch에 할당된 문자와 여는 괄호와 비교 후
                stack.push(ch); // 맞을 경우 스택에 추가

            } else { // 그 외일 경우
                
                if (stack.length === 0) return false; // 스택이 비어있으면 false
                if (stack.pop() !== pair[ch]) return false; // pop() 메서드를 호출하여, 그 값이 현재 문자 ch에 해당하는 닫는 괄호의 짝인 여는 괄호와 일치하는지 확인
            }
        }
        // 모든 문자를 다 처리한 후 스택이 비어있으면 true
        return stack.length === 0;
    }

    // 회전하면서 검사
    for (let i = 0; i < n; i++) {

        // 문자열 회전
        const rotated = s.slice(i) + s.slice(0, i); // i번째 인덱스부터 끝까지 + 처음부터 i-1번째 인덱스까지
        if (isValid(rotated)) count++; // 올바른 괄호 문자열이면 카운트 증가
    }

    return count;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)()]")); // 0
console.log(solution("}}}")); // 0