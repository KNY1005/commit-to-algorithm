function solution(nums) {
    const max = nums.length / 2;
    const types = new Set(nums);

    return Math.min(types.size, max);
}

console.log(solution([3, 1, 2, 3])) // 2
console.log(solution([3, 3, 3, 2, 2, 4])) // 3
console.log(solution([3, 3, 3, 2, 2, 2])) // 2