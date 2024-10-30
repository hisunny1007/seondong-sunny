const numbers = [1, 2, 3, 4];

// accumulator : 누적값
// currentValue : 배열 원소 값
const sum = numbers.reduce((accumulator, currentValue) => {
    
    console.log(accumulator, currentValue);
    // 0 1
    // 1 2
    // 3 3
    // 6 4
    return accumulator + currentValue;
}, 0);

console.log(sum); // 10


let number = [1,2,3]

0 1 = 1
1 2 = 3
3 3 = 6

누적