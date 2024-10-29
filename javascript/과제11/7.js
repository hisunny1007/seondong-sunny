// 7. x보다 큰 값

// 배열의 원소 중 변수 x보다 큰 원소만 모아서 새로운 배열 만들어서 출력

let x = 5;
console.log(x);

let arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

let newArr = [];
for (let num of arr) {
  if (num > x) {
    newArr.push(num);
  }
}

console.log(newArr);

let newArr2 = arr.filter((num) => {
  return num > x;
});

console.log(newArr2);

// 강사님 풀이
// x보다 큰 값만 새로운 배열에 추가
const greaterThanX = arr.filter((num) => num > x);
console.log(greaterThanX);
