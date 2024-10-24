// 4. 첫 번째 5 찾기
// 배열 함수 findIndex() 를 활용하여 첫 번째로 나오는 5의 위치(index)를 출력한다.

const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

const newarr = arr.findIndex((num) => {
  return (num === 5);
});

console.log(newarr);
