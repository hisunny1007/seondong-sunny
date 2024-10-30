// 1. 배열 원소 출력
// 3가지 방법으로 배열의 원소를 출력한다.

const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20]

for (let num of arr) {
  console.log(num)
}

for (let num in arr) {
  let el = arr[num]
  console.log(el)
}

arr.forEach((num) => {
  console.log(num)
})

// 강사님 풀이 //

// 방법 1: for 반복문 사용
console.log('for 반복문');
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 방법 2: for...of 반복문 사용
console.log('for ... of 반복문');
for (const num of arr) {
  console.log(num);
}

// 방법 3: forEach 메서드 사용
console.log('forEach 반복문');
arr.forEach((num) => console.log(num));
