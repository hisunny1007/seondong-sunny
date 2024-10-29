// 5. 배열 원소의 곱
// 배열의 모든 원소를 곱한 값을 출력하시오.

const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];
// let firstnum = 1
// for (let i = 1, i <= arr.length; i++)

  // 1 * 1 = 1
  // 1 * 3 =3
  // 3 * 5 = 15
  // 15 * 9 = default

let newNumarr = arr.reduce((acc,cur) => {
  return acc * cur
})
console.log(newNumarr)
// reduce 초기값 잊지마!

// 강사님 풀이
const product = arr.reduce((acc, num) => acc * num, 1);
console.log(product);
