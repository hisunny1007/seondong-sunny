const arr5 = [
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
  {
    name: 'beemo',
    age: 48,
  },
  {
    name: 'lynda',
    age: 8,
  },
];
// 를 활용하여
// age가 30 이하인 사람들의 정보가 담긴 array를 만들어보자.

const arrInfo = arr5.filter((num) => {
  return num.age <= 30; // num['age']
});

console.log(arrInfo);

// 를 활용하여
// age가 30 이하인 사람들의 이름이 담긴 array를 만들어보자.

const arrNumber = arrInfo.map((num) => {
  return num.name;
});
console.log(arrNumber);

//////////////////////////////////////
console.log(arr5.filter((el) => el.age <= 30));

arr5.filter((el) => el.age <= 30).map((el) => el.name);

// 이건 좀 비추임
// const arr = []

// for(let el of arr5) {
//   if(el.age <= 30) {
//     arr.push(el.name)
//   }
// }
// console.log(arr)
