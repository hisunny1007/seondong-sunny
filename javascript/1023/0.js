// 1 ~ 9 순서대로 출력해보자.

// nums[0][0]  -> [1]

console.log('---------');

// 1~ 3 출력하자 / 4~6 /7 ~9

// for (let num of arr) {
//   console.log(num)
// }

// arr[0] <- [1,2,3]
// arr[1] <- [4,5,6
// arr[2] <- [7,8,9]

const nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// for (let arr of nums) {
// }
// 두 개는 같은 것
// // for (let i in nums) {
//   let arr = nums[i]
// }

for (let arr of nums) {
  for (let num of arr) {
    console.log(num);
  }
}

// [1,2,3] <- nums[0]
// [4,5,6] <- nums[1]
// [7,8,9] <- nums[2]

// arr = nums[0] // [1,2,3]
// arr = nums[1] //456

for (let i in nums) {
  let arr = nums[i];
  for (let j in arr) {
    let num = arr[j];
    console.log(num);
  }
}

//   for (let num of arr) {
//   console.log(num)
// }

// for (let j in arr) {
//   let num = arr[j]
//   console.log(num)
// }
