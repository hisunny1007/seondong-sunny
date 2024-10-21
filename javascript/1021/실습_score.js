// 1. 다음 점수에 따라 등급을 출력하는 코드를 작성하시오.
//     - 90 이상: "A" /  80 이상: "B" /  그 외: "C"
//     - 단, 100점은 A학점과 더불어 `교수님의 총애`를, 40점 미만은 C학점과 더불어 `학사경고`를 출력하시오.

const score = 100;

if (score >= 90) {
  console.log('A');
  if ((score = 100)) {
    console.log('교수님의 총애');
  }
} // 100점 둘 다 나오는 방법은? if 문 안에 if 문 또 넣기
else if (score >= 80) {
  console.log('B');
} else {
  if (score < 80) {
    console.log('C');
    if (score < 40) {
      console.log('학사경고');
    }
  }
}

if (score >= 90) {
  console.log('A');

  if (score === 100) {
    console.log('교수님의 총애');
  }
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
  if (score < 40) {
    console.log('학사경고');
  }
}
