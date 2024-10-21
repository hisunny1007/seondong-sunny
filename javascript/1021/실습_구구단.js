// nums가 다음과 같을 때, 구구단 3단을 출력하시오

// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12

// 3 * num = 결과

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = nums[index];


//  array, string, set
// key값을 활용하는 것이 아니라, 바로 value로 접근 가능
for (let num of nums) {
  console.log(`3 * ${num} = ${3 * num}`);
}
