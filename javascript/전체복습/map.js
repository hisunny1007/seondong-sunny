const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// 각 원소에 곱하기 2한 값을 모은 새로운 배열을 만들고 출력
// 새로운 배열 -> map(반환 필요)

let result = arr.map((num) => {
  return num*2
})
console.log(result)

// // for (let num of arr) {
// //   console.log(num*2)
// // }

// for (let index in arr) {
//   console.log(arr[index]*2)
// }

arr.forEach((num) => {
  console.log(num*2)
}) // [] 아님