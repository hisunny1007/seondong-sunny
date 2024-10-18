let name = '차윤선';
console.log('안녕 나는 차윤선이야');
console.log('안녕 나는 name이야');
console.log('안녕 나는 ${name}이야');

let age = 18;
age = 19;

const gender = 'M';
// gender = 'F'; 불가능

let number = 10;

number + 1; // 10과 1을 더해서 11이란 숫자를 만들었어
let added_number = number + 1;
// 11이란 숫자를 활용하고 싶어. 어떻게 하면 좋을까? -> 변수로 저장
number++;

let num1 = 1;

let num2 = '1';

console.log(num1 === num2);
console.log(num1 !== num2);

// and에 대한 상황
let money = 10000;
let hungry = 100;

// 돈이 1000원보다 많으면 돈이 충분
console.log(money > 10000);

// 배고픔이 50보다 많으면 배고픈 것
console.log(hungry > 1000);

// 돈이 1000원보다 많으면 돈이 충분
money > 1000

// 배고픔이 50보다 많으면 배고픈 것
hungry > 50

// && and 연산자 => 돈이 충분하고 배가 고플때 만 true
console.log(money > 1000 && hungry > 50);




