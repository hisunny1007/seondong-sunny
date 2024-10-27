const matrix = [[4,2], [3,2], [5,7], [10,1]]
// Q. 내부 배열의 원소의 합이 짝수인 배열만 모아서 새로운 이차원 배열 생성

for (let arr of matrix) {
  if ((arr[0]+arr[1]) % 2 === 0)
  console.log(arr)
}


const result = matrix.filter((arr) => {
  return ((arr[0]+arr[1]) % 2 === 0)
})

console.log(result)

////////////////////
const result2 = matrix.filter((arr) => {
  let sum = arr[0]+arr[1]
  return !(sum%2)
}
)

console.log(result2)
//////////////////////////