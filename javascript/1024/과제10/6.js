// 6. 배열 내 객체 출력하기 2
// 적절한 배열 함수를 선택해서 배열 내 객체 중 isCompleted 가 true 인 객체만 출력한다.
let todos = [];

todos.push(
  {
    todoId: 1,
    content: '예습하기',
    isCompleted: false,
  },
  {
    todoId: 2,
    content: '강의듣기',
    isCompleted: true,
  },
  {
    todoId: 3,
    content: '복습하기',
    isCompleted: true,
  }
);

// for (let arr of todos) {
//   if (arr.isCompleted === true) {
//     console.log(arr)
//   }
// }

todos.forEach((arr) => {
  if (arr.isCompleted === true) {
    console.log(arr);
  }
});

// 강사님 풀이 //

let todos = [
  { todoId: 1, content: '예습하기', isCompleted: false },
  { todoId: 2, content: '강의듣기', isCompleted: true },
  { todoId: 3, content: '복습하기', isCompleted: true },
];

// let completedTodos = todos.filter((todo) => todo.isCompleted);

let completedTodos = todos.filter(function (todo) {
  return todo.isCompleted === true;
});

completedTodos.forEach((todo) => console.log(todo));

// 또는

todos.forEach((todo) => {
  if (todo.isCompleted === true) {
    console.log(todo);
  }
});
