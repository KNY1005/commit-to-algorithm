function solution(n, words) {
  var answer = [0, 0];

  const set = new Set();

  let prev_word = words[0];
  set.add(prev_word);

  for (let i = 1; i < words.length; i++) {
    const current_word = words[i];
    if (set.has(current_word) || prev_word.at(-1) !== current_word[0]) {
      // 이거 순서 구하는 로직은 내가 못해서 gpt의 도움을 받앗슨...
      const idx = (i % n) + 1;
      const number_idx = Math.floor(i / n) + 1;
      return [idx, number_idx];
    } else {
      set.add(current_word);
      prev_word = current_word;
    }
  }

  return answer;
}
