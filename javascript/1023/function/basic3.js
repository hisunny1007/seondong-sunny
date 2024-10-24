// // 함수 선언식 (함수 이름 O)
// -> 호이스팅 / 앞에다 add(1,2) 해도 결과o

// function add(x,y) {
//   return x + y
// }

//

const person = {
  name: '철수',
  greet: function () {
    console.log('안녕하세요. 반갑습니다.');
  },
  greet2() {
    console.log('안녕하세요. 반갑습니다');
    console.log(`${this.name}`);
  },
};

console.log(person.name);
person.greet();

//함수도 1급 객체라 value에 넣을 수 있음! greet의 value가 함수임
// this가 나. this가 철수


//화살표 함수 : this라는걸 바인딩하지 않는다!
