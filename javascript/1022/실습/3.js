// // const arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7] 일 때,
// 원소가  1, 4, 5, 7인 경우를 제외하고 출력하세요

const arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7];

// 제외? 건너뛰어.. continue?
// 배열이니까 for of 써보는거임

// [1,4,5,7]

// 저arr에  1,4,5,7이 들어있어? 확인

let ex = new Set([1, 4, 5, 7]);

for (let num of arr) {
  if (ex.has(num)) {
    continue;
  }

  console.log(num);
}
