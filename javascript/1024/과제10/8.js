// 8. 이차원 배열의 합

const matrix = [
  [4, 2],
  [3, 2],
  [5, 7],
  [10, 1],
];

const evenNumbers = matrix.filter((arr) => {
  let sum = arr[0] + arr[1];
  return sum % 2 === 0;
});

const evenNumbersVer2 = matrix.filter((arr) => !((arr[0] + arr[1]) % 2));

console.log(evenNumbersVer2);
console.log(matrix.filter((arr) => !((arr[0] + arr[1]) % 2)));

// 강사님 풀이 //
let new_matrix = matrix.filter((arr) => {
  let total = arr[0] + arr[1];
  return total % 2 === 0;
});

console.log(new_matrix);
