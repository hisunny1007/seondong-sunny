// 과제2. 객체와 배열 2

// - 위 문제에서 만들어진 변수 `todos` 를 활용한다.
// - 배열에 저장된 객체의 키 `content` 와 `isCompleted` 의 값을 출력하는 반복문을 작성한다.

let todos = []

todos.push(
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
)

console.log(todos)

// // let todos = [
//   {
//     "todoId": 1,
//     "content": "예습하기",
//     "isCompleted": false
//   },
//   {
//     "todoId": 2,
//     "content": "강의듣기",
//     "isCompleted": false
//   },
//   {
//     "todoId": 3,
//     "content": "복습하기",
//     "isCompleted": false
//   }
// ]




for (let todo of todos) {
  // console.log(todo.content) todo.content 는 객체 todo에 있는 content(key)의 속성값(value) 갖고 오는 것!
  console.log(`content: ${todo.content}, isCompleted: ${todo.isCompleted}`)
}