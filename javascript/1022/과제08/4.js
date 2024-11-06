// 4. 짝수의 합

// - 변수 `N` 을 선언하고, 임의의 숫자형 값을 할당한다.
// - 변수 `total` 을 선언하고, `0` 을 할당한다.
// - 변수 `N` 의 값을 출력한다.
// - 1부터 `N` 까지의 숫자 중 짝수만 변수 `total` 에 더하는 반복문을 작성한다.
// - 변수 `total` 의 값을 출력한다.

let N = 7
let total = 0

console.log(N)

// 1부터 N까지 짝수의 합을 구하는 for 반복문
for (let i = 1 ; i <= N; i++) {
  if (i % 2 === 0) {
    total += i
  }
}

// total 출력
console.log(total)