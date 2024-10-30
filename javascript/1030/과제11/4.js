// 4. 새로운 배열
// 배열의 원소 중 양수이면서 짝수인 원소만 모아서 새로운 배열을 만들어서 출력한다.

const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20]

for (let num of arr) {
  if (num > 0 && !(num%2)) {
    console.log(num)
  }
} // 이건 배열 아니고 그냥 출력하기


let newArr2 = arr.filter((num) => {
    return num > 0 && num % 2 === 0
})
console.log(newArr2)


// // 강사님 풀이 //
// // 양수이면서 짝수인 원소만 새로운 배열에 추가
const newArr = arr.filter((num) => num > 0 && num % 2 === 0);
console.log(newArr);