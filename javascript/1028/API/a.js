// 현재 상영 중인 영화 중 평점(vote_average)이 가장 높은 영화를 찾으시오. nhbyhgb 

async function getNowPlayingMovies() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    const path = '/now_playing';
    const params = new URLSearchParams({
      api_key: 'eab8c9893e725b2e167187cef66bae3d',
      language: 'ko',
    });

    // https://api.themoviedb.org/3/movie/now_playing?api_key=eab8c9893e725b2e167187cef66bae3d

    const URL = `${baseURL}${path}?${params}`

    const response = await fetch(URL);
    const data = await response.json();
   // 현재 상영 중인 영화 (now_playing)

   // 평점(vote_average) results. 안에

    let movies = data.results
    let maxVoteAverage = 0
    let maxVoteMovie =  null
    for (let movie of movies) {
      let voteAverage = movie.vote_average
      if (voteAverage > maxVoteAverage) {
        maxVoteAverage = voteAverage
        maxVoteMovie = movie
      }
    }
    console.log(maxVoteMovie)
    console.log(maxVoteAverage)


    // const maxVoteMovie2 = movies.reduce((acc, cur) => {
    //   const accVoteAverage = acc.vote_average;
    //   const curVoteAverage = cur.vote_average;

    //   if (accVoteAverage > curVoteAverage) {
    //     return acc;
    //   } else if (accVoteAverage < curVoteAverage) {
    //     return cur;
    //   } else {
    //     // 같을 때
    //     const accVoteCount = acc.vote_count;
    //     const curVoteCount = cur.vote_count;
    //     // 생략
    //   }
    // });
    // console.log(maxVoteMovie2);
    // // ///////////////////////////
  } catch (error) {
    console.error('Error:', error);
  }
}

getNowPlayingMovies();

