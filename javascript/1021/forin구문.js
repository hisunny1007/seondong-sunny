// const names = ['jun', 'beemo', 'ken']
// const ages = [18, 28, 37] 일 때,
//
// 18살 jun
// 28살 beemo
// 37살 ken
// 을 출력하시오.

// const names = ['jun', 'beemo', 'ken']
// const ages = [18, 28, 37]

// // // ages[0]살 names[0]
// // // ages[1]살 names[1]
// // ages[2]살 names[2]

// // console.log(ages[0], names[0])


const names = ['jun', 'beemo', 'ken', 'lynda']

for (let index in names) {
  let name = names[index]
  console.log(index, name)
}

const fruits = ['apple', 'banana', 'cherry'];

for (let index in fruits) {
    console.log(index, fruits[index]);
}




