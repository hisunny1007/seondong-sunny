// forEach()
// 배열의 각 원소에 대해 콜백 함수를 실행한다
// -> array 각 원소에 함수 실행함
// 반환값이 없음 - 배열 순회하면서 원소에 대해 콜백 함수를 실행

// **forEach 는 실행 / map은 반환

const numbers = [1, 2, 3, 4];

numbers.forEach((num) => {
  console.log(num * 3);
});

// numbers 각 원소에 함수 실행함


const numbers = [1, 2, 3, 4];

console.log('일반적인 사용법');

numbers.forEach((num) => {
  console.log(num); // 1, 2, 3, 4
});


console.log('위의 코드를 분해한 코드');

const cb = (num) => {
  console.log(num);
};

numbers.forEach(cb);



console.log('아래 코드와 같은 의미.');
console.log(
  'array에서 직접 실행 가능한 메서드 => array를 입력 받는 함수로 변경된 코드'
);
function myForEach(arr, func) {
  for (let value of arr) {
    func(value);
  }
}

myForEach([1, 2, 3, 4], console_log);

console.log('콜백함수의 function자리 input값으로 call이 들어가면 안됨');
numbers
  .forEach
  // console_log() // 괄호가 있으면 함수의 결과값을 넘기는 것
  ();
