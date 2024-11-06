// 4. 객체의 반복문1
// 아래와 같은 객체가 있을 때 객체의 키와 값을 출력하는 반복문을 작성한다.

let person = {
  name: '홍길동',
  age: 30,
  job: '개발자',
};

// console.log(person)
// -> 결과값 { name: '홍길동', age: 30, job: '개발자' }

for (let key in person) {
  // console.log(key) // name age job
  let value = person[key];
  console.log(`${key}, ${value}`);
}

// console.log(person.name) // 홍길동
// console.log(person.age) // 30
// console.log(person.job) // 개발자

// for (let ps in person) {
//   // console.log(ps) // name age job
//   // console.log(person[ps]) // 홍길동 30 개발자
//   console.log(`${ps}, ${person[ps]}`)
// }

// 객체의 키와 값을 출력하는 for...in 반복문
for (let key in person) {
  console.log(`${key}, ${person[key]}`);
}
