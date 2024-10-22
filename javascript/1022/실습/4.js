//  1 ~ 9 까지의 자연수 중 제곱한 수가 10 이상 50 이하인 자연수의 리스트를 출력해보세요.

// num = 1 ~ 9

// 10 <= num ** 2
// num ** 2 < ==50

// for (let num = 1; num <= 9 ; num ++) {
//   if ( 10 <= num ** 2 && num ** 2 <= 50) {
//     console.log(num)
//   }
// }

// 리스트 출력
const answer = [];

for (let num = 1; num <= 9; num++) {
  let square = num ** 2;

  if (square >= 10 && square <= 50) {
    answer.push(num);
    // console.log(num) 이건 그냥 값만
  }
}

console.log(answer);
