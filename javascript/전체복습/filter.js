const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// 양수이면서 홀수인 원소만 모은 새로운 배열을 만들고 출력
// num > 0 && num % 2  / filter (불리언, 새로운 배열)

let oddNumbers = arr.filter((num) => {
  return num > 0 && num % 2
})

console.log(oddNumbers)


// let result = []

// for (let num of arr) {
//   if (num > 0 && num % 2) {
//     result.push(num)
//   }
// }

// console.log(result)