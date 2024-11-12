let arr = [20, 10, 35, 30, 7]

let maxnum = 0

for (let i = 0; i<=4; i++) {
  if (arr[i] > maxnum) {
    maxnum = arr[i]
  }
}
console.log(maxnum)