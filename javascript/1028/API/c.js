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

    for (let rates of movies) {
      let movie_rating = rates.vote_average;
      let movie_name = rates.title;
      if (movie_rating >= 7) {
        console.log(movie_name, movie_rating);
      }
    }




  } catch (error) {
    console.error('Error:', error);
  }
}

getNowPlayingMovies();
