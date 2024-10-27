// 5. 배열 내 객체 출력하기 1
// 적절한 배열 함수를 선택해서 배열 내 객체를 하나씩 출력한다
let todo = [];

todo.push(
  {
    todoId: 1,
    content: '예습하기',
    isCompleted: false,
  },
  {
    todoId: 2,
    content: '강의듣기',
    isCompleted: false,
  },
  {
    todoId: 3,
    content: '복습하기',
    isCompleted: false,
  }
);

// console.log(todo)


for (let arr of todo) {
  console.log(arr);
}

todo.forEach((arr) => {
  console.log(arr);
});
////////////////
todo.forEach((arr) => console.log(arr));

////////////////////
const foo = function (arr) {
  console.log(arr);
};

todo.forEach(foo);
////////////////////
todo.forEach(other);

function other(arr) {
  console.log(arr);
}

// 강사님 풀이 //
let todos = [
  { todoId: 1, content: '예습하기', isCompleted: false },
  { todoId: 2, content: '강의듣기', isCompleted: false },
  { todoId: 3, content: '복습하기', isCompleted: false },
];

todos.forEach((todo) => console.log(todo));
