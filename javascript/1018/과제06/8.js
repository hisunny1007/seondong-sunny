//8. 짝수 / 홀수

let number_1 = 0
console.log(number_1)

// if (number_1 === 0) {
//   console.log('영')
// } else if (number_1 % 2 === 0) {
//   console.log('짝수')
// } else if (number_1 % 2 === 1) {
//   console.log('홀수')
// } 2로 나눴을 때 나머지는 0 아니면 1이기 때문에
// 굳이 마지막 조건 필요 없음

// 조건문: 0인지, 짝수인지, 홀수인지 확인
if (number_1 === 0) {
  console.log('영');
} else if (number_1 % 2 === 0) {
  console.log('짝수');
} else {
  console.log('홀수');
}