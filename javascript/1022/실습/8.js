
// let people = [
//  { 이름 : "jun",
//   나이 : 15,
//   성별 : "M",
//  },
//  { 이름 : "ken",
//   나이 : 26,
//   성별 : "F",
//  },
//  { 이름 : "alex",
//   나이 : 37,
//   성별 : null,
//  }
// ]

// 배열이니까 of로 했는데 object형태로 나와서 in 써서 뜯어서
for (let person of people) {
  // console.log(persoen)
  for (let key in person) {
    let value = person[key];
    console.log(key, value);
  }
  console.log();
}

// 이름이 alex인 사람에 대한 정보를 출력하시오
//전체 사람에 대해 한 사람씩 확인을 합니다.

for (let person of people) {
  //그 사람이 alex인지 확인합니다
  //그 사람의 이름이 alex인지 확인
  const name = person.name
  if (name === alex) {
    console.log(person)
  }
}

//person.name 
//person[name]

// array => index
// object => key 


