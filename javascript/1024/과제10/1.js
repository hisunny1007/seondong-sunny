// 1. 배열 생성 - 양수 출력

const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// arr.forEach(()=>{})

// arr.forEach((num) => {
//   console.log(num);
// });

arr.forEach((num) => {
  if (num > 0) {
    console.log(num)
  }
}); // [배열은 x ]

// 배열로 반환하고 싶으면?


const result = arr.filter((num) => {
  return num > 0
})

console.log(result)


// 반복문 사용 //

for (let num of arr) {
  if (num > 0) {
    console.log(num)
  }
}


// forEach()
// 배열의 각 요소에 대해 반복 작업을 수행해요.
// 반환값은 없어요, 주로 배열의 요소를 출력하거나 수정할 때 사용해요.

const fruits = ['사과', '바나나', '딸기'];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// 0: 사과
// 1: 바나나
// 2: 딸기
