// reduce 함수
// 배열의 원소를 순차적으로 누적하여 하나의 값으로 반환

const numbers = [1, 2, 3, 4];

// accumulator : 누적값
// currentValue : 배열 원소 값
const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  // 0 1
  // 1 2
  // 3 3
  // 6 4
  return accumulator + currentValue;
}, 0);

console.log(sum); // 10
