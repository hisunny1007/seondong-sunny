fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => 
    const title = json.title
    console.log(title))
  .catch((error) => console.error(error));