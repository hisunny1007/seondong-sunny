// filter()
// 배열의 각 원소에 대해 콜백 함수의 반환값이 참(true)인 원소만 모아 새로운 배열을 반환한다.

// filter 함수 = 배열 안의 각 요소를 하나씩 확인하면서, 조건에 맞는 요소들만 골라 새로운 배열을 만들어 줍니다.
// => 배열에서 특정 조건에 맞는 요소들만 걸러내서 새 배열을 만드는 함수

const numbers = [1, 2, 3, 4];

// filter는 배열 안의 숫자 하나하나를 num이란 이름을 받아와서 (1,2,3,4) 짝수이면 새 배열에 넣음
const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});


console.log(evenNumbers); // [2, 4]

//

const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// filter를 가지고 소수 만 모아보기

function checkPrime(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      return isPrime;
    }
  }

  return isPrime;
}

const primeNums = nums.filter((num) => checkPrime(num));
console.log(primeNums);


// // 어떤 수가 존재할 때, 넌 소수가 맞아.
// // 2 ~ n-1로 나누어 볼게. 혹시 나누어 떨어지면 넌 소수가 아니야.

// let num = 17;
// // 넌 소수가 맞아.
// let isPrime = true;

// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//   }
// }

// console.log(isPrime);
