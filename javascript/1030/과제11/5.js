// 5. 배열 원소의 곱
// 배열의 모든 원소를 곱한 값을 출력한다.

const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// (초기값) 1 * 1 = 1
// 1 * 3 = 3
// 3 * 5 = 15
// 15 * -3 = -45
// -45 * 9 =

// 누적값 * 배열의 모든 원소

const newArr = arr.reduce((acc, cur) => {
  return acc * cur;
}, 1);

console.log(newArr);

// 강사님 풀이 //
// 모든 원소를 곱한 값 계산
const product = arr.reduce((acc, num) => acc * num, 1);
console.log(product);
