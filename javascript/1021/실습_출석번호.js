// 출석번호를 포함하여 '1번 jun', ..., '4번 lynda'의 형태로 출석을 부르시오.


// const names = ['jun', 'beemo', 'ken', 'lynda']

// for (let number of names) {
//   console.log('${names}') }


// # names = ['jun', 'beemo', 'ken']
// # ages = [18, 28, 37] 일 때,
// #
// # 18살 jun
// # 28살 beemo
// # 37살 ken
// # 을 출력하시오.


// 출석번호를 포함하여 '1번 jun', ..., '4번 lynda'의 형태로 출석을 부르시오.

names = ['jun', 'beemo', 'ken', 'lynda']

// 1번 jun
// 2번 beemo
// 3번 Ken

for (let index in names) {
  let name = names[index]
  index++
  console.log(index, name)
}



// 반복문-변수를 할당
// 변수는 내 마음대로 바꿀 수 있음 - 