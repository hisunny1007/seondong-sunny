// 5. 배열 내 객체 출력하기 1

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

// let todo = [
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

//
