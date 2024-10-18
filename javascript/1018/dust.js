let a = 300;

//
if (a > 250) {
  console.log('매우 나쁨');
} else {
  console.log('나쁨');
}
console.log('----------------');

// if (a > 250) {
//   console.log('매우 나쁨');
// } else if (a> 100 && a <= 250) {
//   console.log('나쁨')
// }

// 251
// 101~250
// 50~100
// 0~49

if (a >= 251) {
  console.log('매우 나쁨');
} else if (a >= 101) {
  console.log('나쁨');
} else if (a >= 50) {
  console.log('좋음');
} else if (a >= 0) {
  console.log('매우 좋음');
}


console.log('----------------');


const dust = 30

