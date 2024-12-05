let number = [1,2,3,4,5]

// 홀수 구하기
number.map((num) => {
  if (num % 2 !== 0) {
    console.log(`${num} 홀수입니다`)
  }
})

// 홀수 개수 구하기
let oddNum = 0
number.map((num) => {
  if (num % 2 !== 0) {
    oddNum = oddNum + 1
  }
})
console.log(oddNum)