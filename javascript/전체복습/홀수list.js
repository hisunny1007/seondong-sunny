// 마지막 홀수
// 배열의 원소 중 마지막으로 나온 홀수의 값을 출력한다.

let arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// // 3. 모든 홀수를 담은 list를 만들어보자.

let oddNum = arr.filter((num) => {
  return num % 2 !== 0;
});
console.log(oddNum); // 홀수인 list 전체

// // const lst = [1, 3, 5, 7][마지막인덱스]

let lastindex = oddNum.length - 1;
console.log(oddNum[lastindex])

console.log(oddNum.length); // 7
console.log(oddNum[oddNum.length - 1]); // 5
console.log(oddNum[lastindex]); // 5
console.log(oddNum[6]); // 5

