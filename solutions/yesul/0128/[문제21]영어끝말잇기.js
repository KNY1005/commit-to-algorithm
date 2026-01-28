function solution(n, words) {
    const answer = ''

    const usedWords = new Set();

    const findIndex = words.findIndex((word, index) => {
        if (index === 0) {
            usedWords.add(word);
            return false;
        }

        const isWrong = words[index - 1].at(-1) !== word.at(0)
        const isDuplicated = usedWords.has(word);

        if (isWrong || isDuplicated) {
            return true;
        }

        usedWords.add(word);
        return false;
    });

    if (findIndex === -1) return [0, 0]


    const userNum = (findIndex % n) + 1;
    const wrongCountNum = Math.ceil((findIndex + 1) / n);


    return [userNum, wrongCountNum];
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])); // [3,3]
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])); // [0,0]
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])); // [1,3]