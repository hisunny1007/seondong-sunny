// if (true) {
//   let value = 123;
//   console.log(value); // 여기서만 사용 가능
// }

// // console.log(value) 여기서 사용 불가능

// 안 -> 밖 접근 가능
// 밖 -> 안 접근 불가능

// global 환경에서 변수 선언 -> 블럭 안에서 사용 (o)
// global 환경에서 변수 선언 -> 블럭 안에서 변경 (블럭 안 변경 값)
// global 환경에서 변수 선언 -> 블럭 안에서 변경 -> global에서 사용 (블럭 안 변경 값)
// global 환경에서 변수 선언 -> 블럭 안에서 변수 선언 -> 블럭 안에서 사용 (블럭 안 변수 선언 값)
// global 환경에서 변수 선언 -> 블럭 안에서 변수 선언 -> global에서 사용 (glboal 변수 선언 값)

let number = '숫자';
if (true) {
  let number = '넘버';
}
console.log(number);

// scope가 달라지면 선언 가능  {요기 안에서 동일하게 선언 가능}

let num1 = 'num1';
{
  let num1 = 'num1';
}
console.log(num1);


// let 이 들어간 순간 선언!! 내가 그 변수 사용할 거야!!
// let 없어지면 변경하라고 하네, 할당하려고 하네, 그래서 가장 바깥에 있는 걸로 진행.. 

