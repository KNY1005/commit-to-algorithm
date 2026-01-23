const user1_answer = [1, 2, 3, 4, 5]
const user2_answer = [2, 1, 2, 3, 2, 4, 2, 5]
const user3_answer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

function solution(answers) {
    const answer = {
        1: 0,
        2: 0,
        3: 0,
    }

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === user1_answer[i % user1_answer.length]) {
            answer[1]++;
        }
        if (answers[i] === user2_answer[i % user2_answer.length]) {
            answer[2]++;
        }
        if (answers[i] === user3_answer[i % user3_answer.length]) {
            answer[3]++;
        }
    }

    const max = Math.max(answer[1], answer[2], answer[3]);
    return Object.keys(answer).filter(key => answer[key] === max).sort((a, b) => Number(a) - Number(b))
}

console.log(solution([1, 2, 3, 4, 5]))
console.log(solution([1, 3, 2, 4, 2]))