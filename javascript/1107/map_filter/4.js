const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 를 활용하여
// 짝수만 들어있는 array를 만들어보자.

// 짝수이면서 5이상인 숫자만 들어있는 array를 만들어보자.

// 짝수만 들어있는 array
const evenArray = arr4.filter((num) => {
  return num % 2 === 0;
});

console.log(evenArray);

// 짝수이면서 5이상인 숫자만 들어있는 array

const evenArray1 = arr4.filter((num) => {
  return num % 2 === 0 && num >= 5;
});

console.log(evenArray1);

////////////////////////////////////////////////////////

// 특정 조건 하에 push
const newArr4 = [];
for (let num of arr4) {
  if (!(num % 2)) {
    newArr4.push(num);
  }
}
console.log(newArr4);

// 특정 조건 하에 push? => filter 이용해봐
const newFilteredArr4 = arr4.filter((el) => {
  return !(el % 2);
});
console.log(newFilteredArr4);


const newFilteredArr4_2 = arr4.filter((el) => {
  return !(el % 2) && el >= 5;
});
console.log(newFilteredArr4_2);

// 조건 좀 더 명확하게 보임
// filter, map은 모두 arr를 리턴함 . 메서드 중첩해서 사용 가능

const newFilteredArr4_3 = arr4
  .filter((el) => !(el % 2))
  .filter((el) => el >= 5);

console.log(newFilteredArr4_3)
