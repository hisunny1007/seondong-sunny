// money car 조합해서 False 가 나오도록
// money car result
// T     T   F
// T     F   T
// F     T   T
// F     F   F

// XOR 라는 것은, OR는 OR인데, T - T 쌍인 경우를 제외한 것

(money || car) && !(moeny && car)

if (money == true)

let money = true;
let car = true;

// console.log(money && car);
// console.log(money || car);
// console.log(!money);
// console.log(!car);

console.log(!money || car);
console.log(!money && car);
console.log(!money && !car);
console.log(money && !car);
console.log(money && !car);

console.log(!money && !car);
