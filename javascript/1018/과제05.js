//1. 변수와 상수
let let_variable = 'Hello World';
console.log(let_variable);

const const_variable = 'Hello World';
console.log(const_variable);

//2. 숫자형 변수와 문자열 변수
let number_variable = 1;
let string_variable = '1';

console.log(number_variable);
console.log(string_variable);
console.log(typeof number_variable);
console.log(typeof string_variable);

//3. 상수형 변수
let variable = '상수형 변수에는 재할당 할 수 없다.';
variable = '재할당';
console.log(variable);
//const -> let으로 바꾸기//

//4. 템플릿 리터럴

// let name = '정우영';
// console.log(`안녕하세요. ${name} 입니다.`)

let name = '정우영';
let hello = `안녕하세요. ${name} 입니다.`;

console.log(hello);

//5. 사칙연산
//6. 나머지
let number1 = 100;
let number2 = 200;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);

//7. 배열 생성과 인덱싱
let number_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(number_arr);
console.log(number_arr[0]);
console.log(number_arr[2]);
console.log(number_arr[8]);
console.log(number_arr[9]);
console.log(number_arr[0], number_arr[2], number_arr[8], number_arr[9]);

//8. 빈 배열과 원소 추가
let arr = [];
arr.push(10, 20, 30, 40, 50);

console.log(arr);

// let numbers = [1,2,3]
// numbers.push(4)
// console.log(numbers)

//9. 객체 값 접근
let todo = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};

console.log(todo.userId);
console.log(todo.id);
console.log(todo.title);
console.log(todo.completed);

// 마침표(.)key를 활용한 value 접근

//10. 객체 생성
let person = {
  name: '정우영',
  age: 20,
  city: '서울',
  location: '성동',
  language: ['HTML', 'CSS', 'JavaScript'],
};
console.log(person);
