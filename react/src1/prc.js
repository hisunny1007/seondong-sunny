const arr1 = [1, 2, 3, 4, 5];
// 를 활용하여
const newArr1 = [1, 4, 9, 16, 25];
// 를 만들어보자.

const newArr = arr1.map((el) => {
  return el * el
})

console.log(newArr)