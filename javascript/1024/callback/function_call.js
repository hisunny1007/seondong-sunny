function add(x, y) {
  return x + y;
}

const value = add(1, 2);
console.log(value);

//////
const func = add; // add 함수를 func라는 변수에 할당한 것 *func도 add 함수와 같은 동작을 함  (add는 함수 이름이기 때문에 함수 자체를 나타내고 이를 변수 func에 할당)

const value2 = func(1, 2); // func(1,2)를 호출하면 add(1,2)와 동일한 것
console.log(value2);

//////////////////////////////

function pi() {
  return 3.141592;
}

const piValue = pi();
const piFunc = pi;



// 괄호 있다= 실행했다는 것!

// pivalue 는 실행 o 
// 아래꺼는 실행x

// 객체 안에 있는 함수가 메서드