const nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// 1. 열들의 합의 값으로 리스트를 만드세요
//     - [1 + 4 + 7, 2 + 5 + 8, 3 + 6 + 9]

// //j = 0 [1,4,7]
// total += nums [0][0]
// total += nums [1][0]
// total += nums [2][0]

// //j = 1 [2,5,8]
// total += nums [0][1]
// total += nums [1][1]
// total += nums [2][1]

// //j = 2 [3,6,9]
// total += nums [0][2]
// total += nums [1][2]
// total += nums [2][2]


let total = 0

for (let j = 0; j < 3; j++) {
  total += nums[0][j]
  total += nums[1][j]
  total += nums[2][j]
}
console.log(total)



nums [0][0]
nums [1][0]
nums [2][0]
// 위 3개 합ㄱ계 더하기
// 더한 것을 array 에 넣어주기

nums [0][1]
nums [1][1]
nums [2][1]

nums [0][2]
nums [1][2]
nums [2][2]