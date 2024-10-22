// // 40 이하의 3의 배수를 출력하시오(3단의 확장).

// 3 6 9 12 ... 39

// for (let num= 3 ; num <= 39 ; num = num += 3 ) {
//   console.log(num)
// }

// for (let num = 1; num <= 40; num++) {
//   if (num % 3 == 0) {
//     console.log(num);
//   }
// }

// // 3 6 9 12 15 ...

// 1. 시작은 3으로
// 2. 3씩 커짐
// 3. 40으로 멈춤

for (let num = 3; num <= 40; num += 3) {
  console.log(num);
}

// 시작은 1로
// 1씩 커짐

// 그 값에서 * 3

// 1 * 3 = 3 (1*3)
// 2 * 3 = 6 (2*3)
// 3 * 3 = 9

for (let num = 1; num * 3 <= 40; num++) {
  console.log(num * 3);
}
