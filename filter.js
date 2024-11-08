Map

[x, y, z] => [f(x), f(y), f(z)]
f(..)를 모아서 새로운 array를 만든다.Map

arr1.map((el) => {
  f : 무언가의 기능을 하는 것
  return el + 1
  // return f(el)
})


Filter

[x,y,z] => f(x), f(y), f(z) => [x,z]
f(..)의 결과가 T인 경우만 모아서 새로운 array를 만든다.


[1,2,3,4,5].forEach (
  (el, index, array) => {}
)

[1,2,3,4,5].map(
  (el, index, array) => parseInt(el, index, array)
)