// 7. 이차원 배열 출력

const matrix = [
  [4, 2],
  [3, 2],
  [5, 7],
  [10, 1],
];

// console.log(matrix[0]); // [ 4, 2 ]
// console.log(matrix[1]); // [ 3, 2 ]
// console.log(matrix[2]); // [ 5, 7 ]
// console.log(matrix[3]); // [ 10, 1 ]

// for (let arr of matrix) {
//   let arr_2 = arr[1];
//   console.log(arr_2);
// }

// for (let arr of matrix) {
//   console.log(arr[1])
// }

matrix.forEach((arr) => {
  console.log(arr[1]);
});
