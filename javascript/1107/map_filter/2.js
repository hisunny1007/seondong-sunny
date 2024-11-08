const arr2 = ['1', 8, '2', '3', '4', '5'];
// 를 활용하여
// const newArr2 = [1, 2, 3, 4, 5];
// 를 만들어보자.

const newArr2 = arr2.map((num) => {
  return parseInt(num);
});

console.log(newArr2);

///////////////////////////////////////////////////////////////////////////////////////

// 강사님 풀이
const newMapArr2 = arr2.map((num) => parseInt(num));
console.log(newMapArr2);

// typeof 사용해보자.. 굳이지만.. filter -> map
const newArr22 = arr2.filter((num) => {
  return typeof num === 'string';
});
console.log(newArr2); // [ '1', '2', '3', '4', '5' ]

const result = newArr22.map((num) => {
  return parseInt(num);
});
console.log(result); // [1,2,3,4,5]

// 위 내용을 변수 하나로 선언해서 같이 묶을 수 있음
const result2 = arr2
  .filter((num) => {
    return typeof num === 'string';
  })
  .map((num) => {
    return parseInt(num);
  });
console.log(result2);

//
const result3 = arr2
  .filter((num) => typeof num === 'string')
  .map((num) => parseInt(num));
console.log(result3);

// 안에 문자가 아니고 숫자가 있으면 어칼거임?
nums = ['1', 0, '2', '3', '4', '5'];
result5 = nums
  .filter((num) => typeof num === 'string')
  .map((num) => parseInt(num));
console.log(result5);
