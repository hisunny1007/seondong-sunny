// 출석번호

// names[0] = jun
// names[1] = beemo

const names = ['jun', 'beemo', 'ken', 'lynda'];

// for 반복문

for (let index = 0; index <= 3; index = index + 1) {
  let name = names[index];
  console.log(`${index + 1}번 ${name}`);
}

// while 반복문
let index = 0;

while (index < names.length) {
  let name = names[index];
  console.log(`${index + 1}번 ${name}`);
  index++;
}
