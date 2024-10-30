// 3. 양수 출력
// 배열의 원소 중 양수만 출력한다.

const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20]

// for (let num of arr) {
//   if (num > 0) {
//     console.log(num)
//   }
// }

arr.forEach((num) => {
  if (num > 0) {
    console.log(num)
  }
})