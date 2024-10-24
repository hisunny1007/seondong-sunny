// function 함수이름(입력값) {
//   입력값을 사용한 기능

//   return 출력값
// }


// 1. 2를 곱하는 함수를 만들어보자
// 숫자를 입력 받아서 2를 곱한 값을 return

function func_name(입력값) {
  기능
  return 출력값
}

function mul2(num) {
  let mul2num = num * 2;

  return mul2num;
}

// 2. 소수를 판별하는 함수를 만들어보자.
// 숫자를 입력 받아서 소수 여부를 return 하고 싶다

let num = 17;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
  }
}
console.log(isPrime);

// function 함수이름(입력값) {
//   입력값을 사용한 기능

//   return 출력값
// }


function checkPrime(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
    isPrime = false;
    return isPrime
    }
  }  
  return isPrime // return 소수 여부
}

return 함수 끝낼 때도 사용함


