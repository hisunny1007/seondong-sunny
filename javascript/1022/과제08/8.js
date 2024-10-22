// 과제2. 객체와 배열 2

// - 위 문제에서 만들어진 변수 `todos` 를 활용한다.
// - 배열에 저장된 객체의 키 `content` 와 `isCompleted` 의 값을 출력하는 반복문을 작성한다.

let todos = [
  {
    "todoId": 1,
    "content": "예습하기",
    "isCompleted": false
  },
  {
    "todoId": 2,
    "content": "강의듣기",
    "isCompleted": false
  },
  {
    "todoId": 3,
    "content": "복습하기",
    "isCompleted": false
  }
]

for (let num of todos) {
  console.log(`content: ${num.content}`)
}