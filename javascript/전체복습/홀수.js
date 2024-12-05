// let number = [1,2,3,4,5]

// number.push(6)
// console.log(number)
// number.pop()
// console.log(number)
// number.shift()
// console.log(number)

// // 홀수 구하기
// number.map((num) => {
//   if (num % 2 !== 0) {
//     console.log(num)
//   }
// })

// number.forEach((num) => {
//   if (num % 2 !== 0) {
//     console.log(num)
//   }
// })

// for (let num in number) {
//   // console.log(number[num])
//   if (number[num] % 2 !== 0) {
//     console.log(number[num])
//   }
// }

// // 홀수 개수 구하기
// let oddNum = 0
// number.map((num) => {
//   if (num % 2 !== 0) {
//     oddNum = oddNum + 1
//   }
// })
// console.log(oddNum)

// let oddNum2 = 0
// number.forEach((num) => {
//   if (num % 2 !== 0) {
//     oddNum2 += 1
//   }
// })
// console.log(oddNum2)

// let person = {
//   name: "홍길동",
//   age: 30,
//   job: "개발자"
// }

// console.log(person.name)
// console.log(person['name'])
// console.log(person)

// for(let key in person) {
//   console.log(key)
// }

// for(let key in number) {
//   console.log(key)
// }

// // for~in은 array 배열에서 인덱스값 나오고
// // object 객체에서는 key값 나옴

const nums = [10, 6, 8, 5, 4, 2, 3, 11]

let minnum = nums[0]
for (let num of nums) {
  if (num < minnum) {
    minnum = num
  }
}
console.log(minnum)

let minnum2 = nums[0]
for (let i = 0; i<= nums.length; i++) {
  if (nums[i] < minnum2) {
    minnum2 = nums[i]
  }
}
console.log(minnum2)

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sumNum = 0
for (let num of nums2) {
  sumNum += num
}
console.log(sumNum)

const nums3 = [10, 6, 8, 5, 4]
const reversedNum = nums3.reverse()
console.log(reversedNum)

const names = ['jun', 'beemo', 'ken']
const ages = [18, 28, 37] 

for (let i in names) {
  console.log(`${ages[i]}살 ${names[i]}`)
}
// for (let name of names) {
//   for (let age of ages) {
//     console.log(`${age} ${name}`)
//   }
// }

for(let i = 0; i < names.length; i++) {
  console.log(`${ages[i]}살 ${names[i]}`)
}

const nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let num of nums4) {
  if (num % 3 === 0) {
    console.log(num)
  }
}

for (let num of nums4) {
  if (num % 2 === 0) {
    console.log(num)
  }
}

const names2 = ['jun', 'beemo', 'ken', 'lynda']

for (let i = 0; i < names2.length; i++) {
  console.log(`${i+1}번 ${names2[i]}`)
}                                             

for (let abc in names2) {
  let result = names2[abc]
  abc++
  console.log(`${abc}번 ${result}`)
}


// const nums5 = [10, 6, 8, 5, 4, 2, 3, 11]
// let smallnum = nums5[0]


const nums10 = [10, 6, 8, 5, 4]
const reversedNum2 = nums10.reverse()
console.log(reversedNum2)

for(let i = 3; i <= 40; i+=3) {
  console.log(i)
}

