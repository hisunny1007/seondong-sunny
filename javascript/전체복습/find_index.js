const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// 첫 번째로 나오는 5의 위치(index)를 출력해라
// find () 배열의 원소 중 콜백 함수의 반환값이 참(true)인 첫 번째 원소 반환
// findIndex() 배열의 원소 중 콜백 함수의 반환값이 참(true)인 첫 번째 원소의 인덱스 반환


const fiveNumber = arr.findIndex((num) => {
  return num === 5
  }
)

console.log(fiveNumber)





////////////////////////
const numbers = [1,2,3,4,2,5,2,2,2]

const result = numbers.find((num) => {
  return num > 2
})

console.log(result) // num > 2보다 큰 값 중 젤 첫 번째

const result2 = numbers.findIndex((num) => {
  return num % 2 ===0
})

console.log(result2) // 짝수인 수 중 젤 첫 번째의 인덱스 

