function greet() {
  console.log(`안녕하세요. 저의 이름은 ${this.name} 입니다.`);
}


// //이 함수의 역할은 this.name 값을 출력하는 것
// 중요한 부분은 this가 어떤 객체를 참조하느냐에 따라 출력되는 결과가 달라진다
// 그럼, this는 뭘 참조?
// this는 함수가 실행될 때, 그 함수를 호출한 객체를 참조합니다. 
// 이 말은, greet 함수가 어떤 객체 안에서 실행되냐에 따라 this가 달라진다는 뜻이에요.

// greet 함수는 객체에 따라 다르게 동작. 왜? this가 호출된 객체 참고함
//this는 함수가 어디서 호출되는지에 따라 다르게 동작



const boy =  {
  name: '철수',
  greet_boy: greet
};

const girl = {
  name: '영희',
  greet_girl: greet
};
boy.greet_boy() // boy 객체 안에 있는 greet_boy 호출함 -> greey_boy는 greet 함수 참조함!
girl.greet_girl()