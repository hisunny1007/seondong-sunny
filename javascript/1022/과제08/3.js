// 3. 1부터 N까지의 합

// - 변수 `N` 을 선언하고, 임의의 숫자형 값을 할당한다.
// - 변수 `total` 을 선언하고, `0` 을 할당한다.
// - 변수 `N` 의 값을 출력한다.
// - 1부터 `N` 까지의 숫자를 변수 `total` 에 더하는 반복문을 작성한다.
// - 변수 `total` 의 값을 출력한다.

let N = 3
let total = 0

// console.log(N)


for (let num = 1; num <= N ; num++) {
  total += num
}
console.log(total)

// // 루프 내부에서는 total += num이 실행됩니다. 이는 total 변수에 현재 num 값을 더하는 것입니다. 예를 들어:
// 첫 번째 반복(num = 1): total은 0 + 1 = 1
// 두 번째 반복(num = 2): total은 1 + 2 = 3
// 세 번째 반복(num = 3): total은 3 + 3 = 6