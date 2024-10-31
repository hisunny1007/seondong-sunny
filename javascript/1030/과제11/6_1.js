// 6. 마지막 홀수
// 배열의 원소 중 마지막으로 나온 홀수의 값을 출력

const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// 1번
let number = null

arr.forEach((num) => {
  if (num % 2 !== 0) {
    number = num
  }
})

console.log(number)

// 2번

const newArr = arr.reverse();
// 20, 5 , -10,,,

let number = null;
for (let num of newArr) {
  if (num % 2 !== 0) {
    number = num;
  break;
}
}
console.log(number);
