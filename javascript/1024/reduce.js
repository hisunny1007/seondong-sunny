// const nums = [1,2,3,4]

// const mulNums = nums.reduce((acc, cur) => {
//   console.log(acc,cur)
//   return acc * cur
// },1)

// console.log(mulNums)
//함수 초기값

// //minValue를 reduce를 통해 계산하시오.

const numbers = [5, 8, 2, 5, 9, 4];

// let minNum = numbers[0];
// for (let arr of numbers) {
//   if (minNum > arr) {
//     minNum = arr;
//   }
// }
// console.log(minNum)

reduce에서는 acc가 minNum 대체

const minNum = numbers.reduce (
(min, cur) => { if(min > cur) {min=cur}} , 5)

console.log(minNum)


