//7. 숫자 크기 비교4

let number_1 = 5;

console.log(number_1);
console.log(typeof number_1);

// 변수 number_1 선언 및 값 할당
let number_1 = 'Hello World';

// 변수 값 출력
console.log(number_1);

// 조건문: 자료형 확인 및 숫자 크기 비교
if (typeof number_1 === 'number') {
  if (number_1 < 10) {
    console.log('number_1은 10보다 작다.');
  } else if (number_1 > 10) {
    console.log('number_1은 10보다 크다.');
  } else {
    console.log('number_1은 10이다');
  }
} else {
  console.log('숫자가 아니다.');
}


let number_2 = 10
console.log(typeof number_2) // number or string

if (typeof number_2 === 'number') {
  if (number_2 < 10) {
    console.log('10보다 작음')
  } else if (number_2 > 10) {
    console.log('10보다 큼')
  } else {
    console.log('10임')
  }
} else {
  console.log('string임')
}
