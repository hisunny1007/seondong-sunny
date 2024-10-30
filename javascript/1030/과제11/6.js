// 6. 마지막 홀수
// 배열의 원소 중 마지막으로 나온 홀수의 값을 출력

const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// console.log(arr.reverse());

let arr_reverse = arr.reverse();
// const oddNumber = arr_reverse.find((num) => {
//   return num % 2
// })
// console.log(oddNumber)

let lastodd;
for (let num of arr_reverse) {
  if (num % 2 !== 0) {
    lastodd = num;
    break;
  }
}

console.log(lastodd);
