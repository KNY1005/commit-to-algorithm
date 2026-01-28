function solution(n, k) {
  const queue = Array.from({ length: n }, (_, idx) => idx + 1);
  const answer = [];

  let idx = 1;
  while (queue.length > 0) {
    const item = queue.shift();

    if (idx % k === 0) {
      answer.push(item);
    } else {
      queue.push(item);
    }
    idx++;
  }

  console.log(`<${answer.join(', ')}>`);
}

solution(7, 3);
