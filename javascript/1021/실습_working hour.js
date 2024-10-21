// 새싹이는 주말이거나 일과시간 이후면 휴식을 취할 수 있다. 단, 주말의 일과시간 이후에는 자기개발을 할 예정이다.
// 일과시간이 09시 ~ 18시일 때, 변수의 상태에 따라 일 / 휴식/ 자기개발을 출력하시오.

const isWeekend = true;
const nowTime = 17;

// 주말이거나 일과 이후 => 휴식
// 주말의 일과이후 => 자기개발
// 일과시간 => 일

// (!일과시간 ===일과이후)
// 주말  일과시간
// true   true    휴식
// true   false   자기개발
// false  true    일
// false  false   휴식

let isworkingHour;

// 9~18시에는 workingHour = true
// 아닐 때는 workingHour = false

// if (9 <= nowTime <= 18)  이렇게 쓰면안됌!!!!

if (9 <= nowTime && nowTime <= 18) {
  isworkingHour = true;
} else {
  isworkingHour = false;
}

let toDO

if (isWeekend)   
{
  if (isworkingHour) {
    todo = '휴식'
  } else {
    todo = '자기개발'
  }
} else
{
  if (isworkingHour) {
    todo = '일'
  } else {
    todo = '휴식'
  }
}





// if (isWeekend && nowTime <= 18) {
//   //평일이고 일과시간일 때
//   console.log('일');
// } else if (!isWeekend && nowTime > 18) {
//   //주말이고 일과시간 이후일 때
//   console.log('자기개발');
// } else if (!isWeekend || nowTime > 18) {
//   //주말이거나 일과시간 이후일 때
//   console.log('휴식');
// }
