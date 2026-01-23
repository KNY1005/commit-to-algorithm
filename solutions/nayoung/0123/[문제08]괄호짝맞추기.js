
function solution(guarho) {
    const stack = [];       // 괄호 짝 맞추기

    for( let char of guarho ){     // 일단 짝이 맞는다고 가정
        if( char === '(' ){      // 짝이 맞지 않는 경우 발견 시 false 반환
            stack.push(char);       // 열린 괄호는 스택에 추가
        } else if( char === ')' ){     // 닫힌 괄호인 경우
            if( stack.length === 0 ){     // 스택이 비어있다면 짝이 맞지 않음
                return false;                // 닫힌 괄호가 더 많음
            }
            stack.pop();       // 짝이 맞는 경우 스택에서 열린 괄호 제거
        }
    }
    // 모든 문자를 처리한 후 스택이 비어있다면 짝이 맞음
    return stack.length === 0;
}

// 테스트 케이스
console.log( solution("()()") ); // true
console.log( solution("(())()") ); // true
console.log( solution(")()(") ); // false
console.log( solution("(()(") ); // false


