//for in, for of 반복문 사용해보기
// 곱하기 2한 값을 구해봐

const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20]

// console.log(arr[0])
// console.log(arr.length) // 13

// for of 반복문
for (let num of arr) {
  console.log(num * 2)
} 

// for in 반복문

for (let index in arr) {
  console.log(index)
} // 인덱스 넘버가 나와 0 1 2 ... 12

// 인덱스 넘버 말고 직접 그 원소값을 구하고 싶어?

for (let index in arr) {
  console.log(arr[index] * 2)
}
