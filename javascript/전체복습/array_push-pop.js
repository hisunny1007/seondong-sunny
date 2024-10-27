// 참조 자료형 - 배열

//내부에 저장된 값은 원소(요소)
//각 원소의 위치를 나타내는 인덱스 
// 인덱스는 0부터 시작, 대괄호를 사용해서 원소 접근 가능 

const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

for (let num of arr) {
  console.log(num * 2);
}

// 배열로 만들어볼까? -> map()함수 또는 push()

// map() 반환값을 모아 새로운 배열 반환, 변수 선언 필요

let result = arr.map((num) => {
  return num * 2
})

console.log(result)

// push() 빈 배열에 push하면 끝

let result = [];

for (let num of arr) {
  result.push(num * 2);
}

console.log(result);



// push() 배열의 끝에 원소 추가

// pop() 배열의 마지막 원소 제거하고 반환!

// unshift() 배열 앞에 원소 추가

// shift() 배열의 첫번째 원소 제거하고 반환!

// pop이랑 shift는 반환하기 때문에 결과값 확인하려면 변수 선언해


let numbers = [1,2,3]
numbers.push(5)
console.log(numbers) // [1,2,3,5]

let pop_number = numbers.pop()
console.log(pop_number)
