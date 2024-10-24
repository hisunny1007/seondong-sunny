// 변수 만드는데 어디다 쓸 수 있는데?

//let , const - block {}
// 중괄호 안에서만 접근이 가능함

if (true) {
  let value = 123;
  console.log(value); // 여기서만 사용 가능
}

// console.log(value) 여기서 사용 불가능

// 안 -> 밖 접근 가능
// 밖 -> 안 접근 불가능

//가장 밖에다가 선언해야지만 if문 안에서 변경 가능


// 나랑 가장 가까운 놈부터 접근 가능


let outerValue = "밖"

function func() {
  console.log(outerValue)
}

func()

// 
