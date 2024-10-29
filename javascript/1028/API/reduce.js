const numbers = [1, 2, 3];

const max = numbers.reduce((acc, cur) => {
  return acc + cur;
});

console.log(max); // 6

// 지금 코드에 초기값이 설정되지 않았기 때문에 acc는 첫 번째 요소 1부터 시작하게 되고, 두 번째 요소 2부터 연산이 시작돼요. 따라서 계산 과정은 다음과 같습니다:

// 첫 번째 요소: acc = 1, cur = 2 → acc + cur = 1 + 2 = 3
// 두 번째 요소: acc = 3, cur = 3 → acc + cur = 3 + 3 = 6
// 최종적으로 6이 출력됩니다.

// 초기값이 없으면 빈 배열에서 오류 발생할 수 있기 때문에 설정하는 게 좋음

const max2 = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(max2)