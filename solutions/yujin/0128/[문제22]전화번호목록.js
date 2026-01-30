function solution(phone_book) {
  phone_book.sort((a, b) => (a > b ? 1 : -1));
  let comp_word = phone_book[0];
  for (let i = 1; i < phone_book.length; i++) {
    if (phone_book[i].startsWith(comp_word)) {
      return true;
    } else {
      comp_word = phone_book[i];
    }
  }

  return false;
}

console.log(solution(['119', '97674223', '1195524421']));
