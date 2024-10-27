const matrix = [[4,2], [3,2], [5,7], [10,1]]

// matrix.forEach((arr) => {
//   console.log(arr[1])
// })


// for (let arr of matrix) {
//   console.log(arr[1])
// }

// for (let idx in matrix) {
//   console.log(matrix[idx][1])
// } // in key값 => 배열의 key값은 index , 오브젝트의 key값은 key


// matrix.forEach((arr) => {
//   let sum = arr[0] + arr[1]
//   if (sum % 2 ===0) {
//     console.log(sum)
//   }
// }) 
// 6
// 12

const evenNumbers = matrix.filter((arr) => {
  let sum = arr[0] + arr[1]
  return sum % 2 === 0
})

console.log(evenNumbers)