// 새싹이는 주말이거나 일과시간 이후면 휴식을 취할 수 있다. 단, 주말의 일과시간 이후에는 자기개발을 할 예정이다. 
// 일과시간이 09시 ~ 18시일 때, 변수의 상태에 따라 일 / 휴식/ 자기개발을 출력하시오.

const isWeekend = true
const nowTime = 17


if (isWeekend && nowTime <= 18) {
  console.log("일")
} else if (!isWeekend || nowTime > 18) {
  console.log("휴식")
}

// if (nowTime > 18) {
//   console.log("휴식")
// } else {
//   console.log("일")
// }

// if (isWeekend == "False") {
//   console.log("휴식")
// } else if (isWeekend == "False" && nowTime > 18) {
//   console.log("자기개발")
// }