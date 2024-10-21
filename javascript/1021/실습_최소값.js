const nums = [10, 6, 8, 5, 4, 2, 3, 11];

// let minNum = Infinity;
let minNum = nums[0];

for (let num of nums) {
  if (minNum > num) {
    minNum = num;
  }
}

console.log(minNum);
