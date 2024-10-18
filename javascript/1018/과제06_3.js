//3. 자료형 확인

let variable = 2;

console.log(variable);
console.log(typeof variable);

if (typeof variable == 'number') {
  console.log('숫자형');
}

//if-else구문 연습//
let variable2 = '배고파';

console.log(variable2);
console.log(typeof variable2);

if (typeof variable2 !== 'number') {
  console.log('문자형');
}

if (typeof variable2 == 'number') {
  console.log('숫자형');
} else {
  console.log('문자형');
}
