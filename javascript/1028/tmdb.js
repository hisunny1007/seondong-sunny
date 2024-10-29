async function getPost() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    // const path = '/popular';
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

    const movies = data.results;
    const movie = movies[0];

    console.log(movie.title);
    // console.log(movies.slice(0,3));
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();
