const url = 'https://jsonplaceholder.typicode.com/todos/1';

//
response = fetch(url);
json = response.json();
//

const data = fetch(url)
  .then((response) => {
    // 네트워크 요청 결과 데이터를 JSON 구조로 변환 후 반환
    return response.json();
  })
  .then((json) => {
    // JSON 구조로 변환된 데이터 처리
    console.log(json);
  })
  .catch((error) => {
    console.log(error);
  });

// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

// fetch는 비동기 (fetch도 promise임)
// promise 성공값은 다음then의 input값(respone로 감)

async function fetchUrl(url) {
  const response = await fetch(url); // fetch 동작이 완료되는 것을 기다린다.
  const data = await response.json(); // json() 동작이 완료되는 것을 기다린다.

  console.log(data);
}

//이거랑 같은 거임
