class Person {
  constructor (name, age, tool) {
    this.name = name
    this.age = age
    this.tool = tool
  }
}

const computer = '내컴퓨터'
const jun = new Person ("jun", 16, computer)

console.log(jun.name)
console.log(jun.tool)