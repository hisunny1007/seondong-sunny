// while :
// condition이 true이면 계속 진행
// condition이 false이면 멈춰.
// => condition에는 반드시 변수가 필요함
// condition이 언젠가 바뀌어야 하기 때문
// while문의 body안에서 변수가 바뀌고,
// 바뀌면서 언젠가는 false로 변함

// 하고 싶은 것
// 1 ~ 9 까지의 숫자를 사용하고 싶다.

// 필요한 것
// let num = 1 // 초기값
// num을 하나씩 증가시킬 것.
// num 이 9가 되면 멈출 예정.
// 9가 되기 전에는 계속 실행.

// while -> 특정 조건에서 반복을 멈춥니다.

// while (true일 때 아래 코드를 실행 : condition){
//   // 반복될 코드
// }

let num = 1;

while (num < 9 + 1) {
  console.log(num);
  num++;
}

// 2, 4, 6, 8, 10을 출력하고 싶다.
// 언제 멈추면 좋겠다.
// while : 언제까지 쭉 반복해.
console.log('-------------------');
let num2 = 2;

while (true) {
  console.log(num2);
  num2 += 2;

  // 10일때 멈춰.
  if (num2 === 10) {
    break;
  }
}

// while () condition에 불리언(true) 들어가면 무한 루프 돌기 때문에 멈추는 거(break) 필요함



const arr = [2, 3, 5, 1, 3];

// let index = arr[index]

// while (index <= 4) {
//   console.log(index)
//   index++
// }

while (arr.length) {
  el = arr.pop();
  console.log(el);
}


// 빈 배열의 값은 true
if ([]) {
  console.log('빈 array도 true다.');
}



const array = [7, 10, 4, 6, 8]
const number = array.pop()

console.log(array)
console.log(number)