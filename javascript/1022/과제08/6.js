// 6. 반복문 제어

// - 아래와 같은 배열이 있을 때 배열의 원소를 출력하는 반복문을 작성한다.
//     - 원소가 짝수라면 원소를 출력하지 않고, 반복문을 즉시 종료한다.

arr = [1, 9, 3, 11, 4, 5, 2, 7];

// 배열의 각 원소를 출력하는 for ... of 반복문
for (let num of arr) {
  // 원소가 짝수면 반복문을 종료하는 조건문
  if (!(num % 2)) {
    break;
  }
  console.log(num);
}

// 원소가 짝수라면 원소를 출력하지 않고, 반복문은 킵고잉? -

for (let num of arr) {
  if (!(num % 2)) {
    continue;
  }
  console.log(num);
}
