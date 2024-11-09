
const arr5 = [
  {
    name: "jun",
    age: 18,
  },
  {
    name: "alex",
    age: 28,
  },
  {
    name: "ken",
    age: 38,
  },
  {
    name: "beemo",
    age: 48,
  },
  {
    name: "lynda",
    age: 8,
  },
];

const people = arr5.filter((el) => {
  return el.age <= 30
})

const result = people.map((el) => {
  return el.name
})
console.log(result)

const result2 = arr5.filter((el) => {
  
})