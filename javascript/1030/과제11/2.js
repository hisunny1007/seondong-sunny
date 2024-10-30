// 2. 배열 원소 거꾸로 출력
// 배열의 원소를 거꾸로 출력한다.

const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// const newArr = arr.reverse((num) => {
//   return num;
// });
// console.log(newArr) // 배열로 나옴

const newArr = arr.reverse();
// console.log(newArr) // [20,  5, -10, 22, 44, -6, 23, 10,   9, -3,  5,  3, 1]
newArr.forEach((num) => {
  console.log(num);
});

// console.log(arr.length); // 13
// console.log(arr[12]); // 20
// console.log(arr[0]); // 1

for (let num of arr.reverse()) {
  console.log(num)
}

// 강사님 풀이 //
console.log('배열의 길이 활용');
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

console.log('reverse() 메서드 활용');
for (const num of arr.reverse()) {
  console.log(num);
}
