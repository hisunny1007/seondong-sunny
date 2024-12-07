// 화살표 함수 내부의 this
const person = {
  name: '철수',
  greet: () => {
    console.log(`안녕하세요. 저의 이름은 ${this.name} 입니다.`);
    // 화살표 함수의 this는 상위 컨텍스트의 this를 참조하므로 undefined이 출력된다.
    // 이 코드에서는 전역 컨텍스트 this를 참조한다.
  },
};

person.greet(); // 안녕하세요. 저의 이름은 undefined 입니다.

// 매서드 내부의 this
const person = {
  name: '철수',
  greet() {
    console.log(`안녕하세요. 저의 이름은 ${this.name} 입니다.`);
    // 안녕하세요. 저의 이름은 철수 입니다.
    // this는 객체 person을 참조한다.
  },
};

person.greet();