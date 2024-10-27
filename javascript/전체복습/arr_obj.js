// 배열 내 객체 출력하기

const todos = [];

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

// 배열 내 객체 중 isCompleted가 true인 객체만 출력하기

// const result = todos.filter((num) => {
//   return num.isCompleted == true
// })
// console.log(result)

// num.isCompleted value 값에 "" 없음. 불리언임!
// 자체가 속성의 값을 그대로 반환하는 거기 때문에
// 굳이 == false 필요 없음
// 여기서는 filter 자체가 true인 속성 값을 그대로 반환하는 거기 때문에 false이면 반환 x

for (let num of todos) {
  if (num.isCompleted) {
    console.log(num);
  }
} // 불리언이 false인 거 구하려면 (!num.isCompleted)

const completedTodos = todos.filter((todo) => {
  return todo.isCompleted;
});
console.log(completedTodos);
