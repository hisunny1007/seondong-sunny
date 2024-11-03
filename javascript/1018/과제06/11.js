//11. 2와 3의 배수

let number_1 = 5
console.log(number_1)

// if (number_1 % 2 === 0  && number_1 % 3 ===0) {
//   console.log('6의배수')
// } else if (number_1 % 2 === 0 && number_1 % 3 !== 0) {
//   console.log('2의 배수')
// } else if (number_1 % 2 !== 0 && number_1 % 3 === 0) {
//   console.log('3의배수')
// } else {
//   console.log('2의 배수도 아니고 3의 배수도 아니다')
// }

// number_1 % 2 === 0 && number_1 % 3 !== 0 조건을 두 번째 조건에서 사용하지 않은 이유는:

// 첫 번째 조건에서 이미 6의 배수인지를 체크했기 때문에, 두 번째 조건에서 number_1 % 2 === 0만 확인해도 충분해요.
// number_1 % 3 !== 0를 굳이 확인하지 않아도, 첫 번째 조건이 거짓이라면 number_1이 6의 배수가 아니라는 뜻이므로, number_1이 3의 배수가 아니라는 사실을 이미 알고 있는 거죠.
// 그래서 불필요한 조건을 제거해도 같은 결과를 얻을 수 있어요!

// 조건문: 2와 3의 배수 여부 확인
if (number_1 % 2 === 0 && number_1 % 3 === 0) {
  console.log('6의 배수');
} else if (number_1 % 2 === 0) {
  console.log('2의 배수');
} else if (number_1 % 3 === 0) {
  console.log('3의 배수');
} else {
  console.log('2의 배수도 아니고, 3의 배수도 아니다.');
}
