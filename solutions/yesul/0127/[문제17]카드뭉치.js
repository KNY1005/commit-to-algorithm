function solution(cards1, cards2, goal) {
    const answer = [];
    let index1 = 0;
    let index2 = 0;

    for (const word of goal) {
        if (cards1[index1] === word) {
            index1++;
        } else if (cards2[index2] === word) {
            index2++;
        } else {
            return "No";
        }
    }

    return 'Yes'
}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"])); //"Yes"
console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"])); //"No"