// 6. 배열 내 객체 출력하기 2

let todos = []

  todos.push({
    "todoId": 1,
    "content": "예습하기",
    "isCompleted": false
  },
  {
    "todoId": 2,
    "content": "강의듣기",
    "isCompleted": true
  },
  {
    "todoId": 3,
    "content": "복습하기",
    "isCompleted": true
  }
)


// let todos = [ {
//     "todoId": 1,
//     "content": "예습하기",
//     "isCompleted": false
//   },
//   {
//     "todoId": 2,
//     "content": "강의듣기",
//     "isCompleted": true
//   },
//   {
//     "todoId": 3,
//     "content": "복습하기",
//     "isCompleted": true
//   }
// ]

// for (let arr of todos) {
//   if (arr.isCompleted === true) {
//     console.log(arr)
//   }
// }

todos.forEach((arr) =>{
  if (arr.isCompleted === true) {
    console.log(arr)
  }
})

