fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => {
    // console.log(json)
    const title = json.title;
    console.log(title);
  })
  .catch((error) => console.error(error));

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json)) // 여기부분 활용해서 title 뽑아낼 수 있음
  .catch((error) => console.error(error));

///////////////////////////////////
async function getPost() {
  const reponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await reponse.json();
  console.log(data); // data에 뭐할건지 알려주면 됨

  // const title = json.title

  // console.log(title)
}

getPost();

//////////////////////////////////
async function getPost(postId) {
  const reponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await reponse.json();
  console.log(data); // data에 뭐할건지 알려주면 됨

  // const title = json.title

  // console.log(title)
}

getPost(3);

// (promise가 ~할 때까지 기다려줘야함)fetch는 비동기 동작이기 때문에 걔를 기다려줘야함. function 앞에 async / fetch 앞에 await 넣어줘야함
