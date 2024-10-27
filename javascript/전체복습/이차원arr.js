const matrix = [[4,2], [3,2], [5,7], [10,1]]

// console.log(matrix[0][1])
// console.log(matrix[1][1])
// console.log(matrix[2][1])
// console.log(matrix[3][1])


// Q. 내부 배열의 두 번째 원소만 출력하기

// 반복문 사용

for(let num of matrix) {
  console.log(num[1])
}

for (let num in matrix) {
  console.log(matrix[num][1])
}

// 함수 사용

matrix.forEach((num) => {
  console.log(num[1])
})

// 배열로 구하려면 map
// const result = matrix.map((num) => {
//   return num[1]
// })
// console.log(result)
