// 2. 배열의 반목문 2
// 아래와 같은 배열이 있을 때 각 원소의 제곱을 출력하는 반복문을 작성한다.

arr = [1, 2, 3, 4, 5]

//원소의 제곱 ** 2

for(let num of arr) {
  console.log(num **2)
}

// 배열 원소의 제곱을 출력하는 for...of 반복문
for (let value of arr) {
  console.log(value * value);
}