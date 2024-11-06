// // 1. 배열의 반목문 1
// 아래와 같은 배열이 있을 때 배열의 원소를 출력하는 반복문을 작성한다.

arr = [1, 2, 3, 4, 5];

for (let num of arr) {
  console.log(num);
}

for (let i = 1; i <= arr.length; i++) {
  console.log(i);
}

for (let index in arr) {
  let num = arr[index];
  console.log(num);
}

// 배열의 각 원소를 출력하는 for...of 반복문
for (let value of arr) {
  console.log(value);
}
