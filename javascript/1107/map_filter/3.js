const arr3 = [
  {
    name: 'jun',
    age: 18,
  },
  {
    name: 'alex',
    age: 28,
  },
  {
    name: 'ken',
    age: 38,
  },
];
// 를 활용하여
// const newArr3 = [18, 28, 38];
// 를 만들어보자.

const newArr3 = arr3.map((num) => {
  return num.age;
});
console.log(newArr3);

// return num['age'] 문자열이니까 쉼표 쓰고 키값으로 접근해


// for in 반복문 사용
const arr = [];
for (let el of arr3) {
  // console.log(el.age)
  arr.push(el.age);
}
console.log(arr);


// map 사용하기
const newMappedArr3 = arr3.map((el) => el.age);
console.log(newMappedArr3);
