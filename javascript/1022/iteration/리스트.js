const names = ['jun', 'beemo', 'ken'];
const ages = [18, 28, 37];

for (let index = 0; index < names.length; index++) {
  let name = names[index];
  let age = ages[index];
  console.log(`${age}살 ${name}`);
}

let index = 0;
while (index < names.length) {
  let name = names[index];
  let age = ages[index];
  console.log(age + '살' + name);
  console.log(age, '살', name);
  index++;
}

// 우리에게 필요한 것 : 0, 1, 2
// 알고있는 것 : length, 3이란 숫자
