function solution(genres, plays) {
  let answer = [];
  const albums = [];
  for (let i = 0; i < genres.length; i++) {
    albums.push([genres[i], i, plays[i]]);
  }

  const total_plays = new Map();
  for (const [genre, _, play] of albums) {
    total_plays.set(genre, (total_plays.get(genre) || 0) + play);
  }
  const total_arr = [...total_plays].sort((a, b) => b[1] - a[1]);

  albums.sort((a, b) => b[2] - a[2]);
  for (const [genre, _] of total_arr) {
    const songs = albums.filter((item) => item[0] === genre).slice(0, 2);
    songs.forEach(([_, idx, _play]) => answer.push(idx));
  }

  return answer;
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
);
