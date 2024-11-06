// let N = 5
// let total = 0

// for (let i = 1; i <= N; i++) {
//   // console.log(i)
//   if (i % 2 === 0) {
//     total += i
//   }
// }
// console.log(total)

// // 홀수의 합 [1 2 3 4 5 6 7]

// let arr = [1,2,3,4,5,6,7]

// let total = 0

// for (let num of arr) {
//   if (num % 2 !== 0) {
//     total += num
//   }
// }
// console.log(total)

// // let N = 7
// // let total = 0

// // for (let i = 1; i <= N; i++) {
// //   if (i % 2) {
// //     total += i
// //   }
// // }
// // console.log(total)

// 짝수의 개수

// let N = 5
// let count = 0

// for (let i = 1; i <= N; i++) {
//   if (i % 2 === 0) {
//     // count = count + 1
//     count += 1
//   }
// }
// console.log(count)

// 반복문 제어
let arr = [1, 9, 3, 11, 4, 5, 2, 7];

for (let num of arr) {
  if (num % 2 === 0) {
    break;
  }
  console.log(num)
}

for (let value of arr) {
  // console.log(value)
  if (value % 2 === 0) {
    break
  }
  console.log(value)
}

