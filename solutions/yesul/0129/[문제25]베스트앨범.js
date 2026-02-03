function solution(genres, plays) {
    const albumMap = genres.reduce((acc, cur, index) => {
        if (!acc[cur]) {
            acc[cur] = { total: 0, songs: [] };
        }
        acc[cur].total += plays[index];
        acc[cur].songs.push({ id: index, play: plays[index] });
        return acc;
    }, {});

    const sortedGenres = Object.values(albumMap).sort((a, b) => b.total - a.total);

    const answer = [];

    sortedGenres.forEach(({ songs }) => {
        songs.sort((a, b) => b.play === a.play ? a.id - b.id : b.play - a.play);
        songs.slice(0, 2).forEach(song => answer.push(song.id));
    });

    return answer;

}