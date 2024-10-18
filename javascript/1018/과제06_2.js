//2. 짝수
let number_1 = 5;

console.log(number_1);

// / 나누기
console.log(number_1 / 2);

// % 나머지
console.log(number_1 % 2);

// Math.floor(a/b) 몫
console.log(Math.floor(number_1 / 2));

// == 같냐
if (number_1 % 2 == 0) {
  console.log('짝수');
}

// !== 다르냐
if (number_1 % 2 !== 0) {
  console.log('홀수');
}

// if else 구문
if (number_1 % 2 == 0) {
  console.log('짝수');
} else {
  console.log('홀수');
}
