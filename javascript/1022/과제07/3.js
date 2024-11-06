// 3. 배열의 반목문 3
// 아래와 같은 배열이 있을 때 원소가 짝수면 출력하는 조건문과 반복문을 작성한다.

arr = [0, 1, 2, 3, 4, 5]

// 짝수 => 2로 나눴을 때 나머지가 0

for (let value of arr) {
  if (value !== 0 && value % 2 ===0) {
    console.log(value)
  }
}

// if (num % 2) 2로 나눴을 때 나머지가 있다

// if (!(num%2)) 2로 나눴을 때 나머지가 없다
// if (num % 2 === 0) 2로 나눴을 때 나머지가 없다

for (let array of arr) {
  if (!(array % 2)) {
    console.log(array)
  }
}

for (let i = 0; i <= arr.length; i ++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}