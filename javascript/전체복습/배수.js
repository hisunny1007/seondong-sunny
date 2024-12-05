//40 이하의 3의 배수를 출력하시오(3단의 확장). 

for (let i = 3; i <=40; i+=3) {
  console.log(i)
}

//1 ~ 100 중에 7의 배수의 개수를 출력하세요.
let result = 0
for (let i = 7; i <= 100; i+=7){
  // console.log(i)
  result += 1
}
console.log(result)

//2의 배수 혹은 3의 배수를 제외하고 1~30까지 숫자 출력하시오
for (let i = 1; i<= 30; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    console.log(i)
  }
}