async function getPost() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    const path = '/now_playing';
    const params = new URLSearchParams({
      api_key : '1542f78cba1e534bbb8c072295466ee1',
      language : 'ko'
    });
    // const params = 'api_key=1542f78cba1e534bbb8c072295466ee1';

    const URL = `${baseURL}${path}?${params}`;
    // const URL =
    //   'https://api.themoviedb.org/3/movie/popular?api_key=1542f78cba1e534bbb8c072295466ee1';

    const response = await fetch(URL);
    const data = await response.json();

    // 현재 상영 중인 영화 중 평점(vote_average)이 가장 높은 영화를 찾으시오.

    // const rates = data.results
    // for (let rate of rates) {
    //   let vav = rate.vote_average
    //   let ott = rate.original_title
    //   console.log(ott, vav)
    //   }

    const movies = data.results
    for (let rate of movies) {
      let vav = rate.vote_average
      let orit = rate.original_title
      // console.log(orit, vav)
      let voteAverage = vav[0]
      for(let i = 1; i <= 10 ; i++) {
        if (vav[i] > voteAverage) {
          voteAverage = vav[i]
        }
      }
      console.log(voteAverage)
      // for (let i = 1; i < data.length; i++)
      //   if(rate[i] < voteAverage) {
      //     rate[i] +=voteAverage
      //   }
      // console.log(voteAverage)      
    
  } catch (error) {
    console.error('Error:', error);
  }
}
}

getPost();
