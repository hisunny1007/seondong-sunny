// nums[i][j]

// (세로) i = 0 / (가로) j = 0 , 1, 2

// total = 0

// total += nums[0][0]
// total += nums[0][1]
// total += nums[0][2]

// total += nums[1][0]
// total += nums[1][1]
// total += nums[1][2]

// total += nums[2][0]
// total += nums[2][1]
// total += nums[2][2]

const nums = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

const n = nums.length; // 3
const m = nums[0].length; // 3

let total = 0;

// for (let i = 0; i < n; i++) {
//   total += nums[i][0];
//   total += nums[i][1];
//   total += nums[i][2];
// }
// console.log(total)

for (let i = 0 ; i < n; i++) {
  for (let j = 0 ; j < m; j++) {
    total += nums[i][j]
  }
}
console.log(total)
