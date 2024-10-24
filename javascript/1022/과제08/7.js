// 과제2. 객체와 배열 1

// - 변수 `todos` 를 선언하고, 빈 배열을 할당한다.
// - 아래 객체 정보를 기반으로 생성한 객체 3개를 변수 `todos` 에 추가한다.
// - 객체 정보


// push()는 다양한 데이터 타입을 배열에 추가할 수 있으며,
// 숫자, 문자열, 불리언 값, 그리고 객체도 넣을 수 있습니다.

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