const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];
// 양수만 출력한다 -> 숫자가 0보다 크다
// 출력한다

arr.forEach((num) => {
  if (num > 0) {
    console.log(num)
  }
})


// 배열로 반환하고 싶으면?


const result = arr.filter((num) => {
  return num > 0
})

console.log(result)


const result2 = arr.filter((num) => {
  if (num > 0 ) {
    return num
  }
})
console.log(result2)