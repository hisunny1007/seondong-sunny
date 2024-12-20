// 3. 양수 홀수 배열
// 배열 함수 filter() 를 활용하여 양수이면서 홀수인 원소만 모은 새로운 배열을 만들고 출력한다.

const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

const newarr = arr.filter((num) => {
  return num > 0 && num % 2 
})

console.log(newarr)


// 강사님 풀이 //

// let oddNumbers = arr.filter((num) => num > 0 && num % 2 !== 0);

let oddNumbers = arr.filter(function (num) {
  return num > 0 && num % 2 !== 0;
});

console.log(oddNumbers);
