// function 함수이름(매개변수) {
//   기능
//   return 결과값
// }

// a, b 두개를 더하는 함수를 만든다.

function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
console.log(add(4, 10));


function greet(name = "Guest") {
  console.log(`안녕하세요, ${name}님!`);
}

greet(123)
greet('써니')
greet(); // 안녕하세요, ${Guest}님!

/// ...을 넣으면 n값 쭉
function sum(...nums) {
  console.log(nums)
}

sum(1,2,3,4)

function sum(...nums) {
  let total = 0
  // 더하기
  console.log(nums)
}

sum(1,2,3,4)