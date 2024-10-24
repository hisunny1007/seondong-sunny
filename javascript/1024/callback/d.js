// const fruits = ['사과', '바나나', '딸기'];

// const [a, b, c] = fruits

// console.log(a)
// console.log(b)
// console.log(c)

const numbers = [1,2,3,4]

const [a, , c, ] = numbers

console.log(a)
// console.log(b)
console.log(c)
// console.log(d)

const double = numbers.map((num) => {
  returen num * 2
})