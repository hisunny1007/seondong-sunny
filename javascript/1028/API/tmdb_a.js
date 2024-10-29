async function getNowPlayingMovies() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    const path = '/now_playing';
    const params = new URLSearchParams({
      api_key: 'eab8c9893e725b2e167187cef66bae3d',
      language: 'ko',
    });

    const URL = `${baseURL}${path}?${params}`;

    const response = await fetch(URL);
    const data = await response.json();

    const movies = data.results;

    let maxVoteAverage = 0;
    let maxVoteMovie = null;

    for (let movie of movies) {
      let voteAverage = movie.vote_average;

      if (voteAverage > maxVoteAverage) {
        maxVoteAverage = voteAverage;
        maxVoteMovie = movie;
      }
    }

    console.log(maxVoteAverage);
    console.log(maxVoteMovie.title);

    // ////////////////////////////////

    const maxVoteMovie2 = movies.reduce((acc, cur) => {
      const accVoteAverage = acc.vote_average;
      const curVoteAverage = cur.vote_average;

      if (accVoteAverage > curVoteAverage) {
        return acc;
      } else if (accVoteAverage < curVoteAverage) {
        return cur;
      } else {
        // 같을 때
        const accVoteCount = acc.vote_count;
        const curVoteCount = cur.vote_count;
        // 생략
      }
    });
    console.log(maxVoteMovie2);
    // ///////////////////////////
  } catch (error) {
    console.error('Error:', error);
  }
}

getNowPlayingMovies();


// 자바스크립트의 reduce() 함수는 배열의 요소들을 하나씩 순서대로 처리해서 하나의 값으로 줄여주는 기능을 해요. reduce()는 합계, 평균, 최대/최소값 등을 구할 때 유용하게 사용할 수 있어요.