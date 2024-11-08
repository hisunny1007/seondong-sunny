const arr1 = [1, 2, 3, 4, 5];
// 를 활용하여
// const newArr1 = [1, 4, 9, 16, 25];
// 를 만들어보자.

const newArr1 = arr1.map((num) => {
  return num * num;
});
console.log(newArr1);
///////////////////////////////////////////////////////////////////////////////////////
let num;
const myArr1 = [];

// num = 1;
// num = num * num;
// myArr1.push(num);
// num = 2;
// num = num * num;
// myArr1.push(num);
// num = 3;
// num = num * num;
// myArr1.push(num);

// num에 대한 할당 반복
// for(let num of arr1) {
//   num = num * num
//   myArr1.push(num)
// }

for (let num of arr1) {
  myArr1.push(num * num);
}

// const myMapArr1 = arr1.map((num) => {
//   return num * num
// })

// const myMapArr1 = arr1.map((num) => num * num);

// console.log(myMapArr1);

function square(num) {
  return num ** 2;
}

const myMapArr1 = arr1.map(square);
// const myMapArr1 = arr1.map(square()); // 함수가 아닌 함수의 결과값을 넣을 순 없음

console.log(myMapArr1)