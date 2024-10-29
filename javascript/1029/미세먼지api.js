// 필요한 url 가져와
// 데이터한테 요청 받는거 fetch / 재활용하려면 변수 필요해 response만들어 / fetch는 비동기함수니까 await 필요함
// await 있으면 async 필요함. await는 반드시 async 함수 필요해



async function fetchDustInfo() {
  const URL =
    'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=rlP4%2FmHe7%2FQs6jsqbLw3ks5xeF1VIjfeZSe0UuMq7ZSReex0UxGm62flHXMrbkDMFN7l7B32LwtcsT3GBtJzSA%3D%3D&returnType=json&numOfRows=100&pageNo=1&sidoName=%EC%84%9C%EC%9A%B8&ver=1.0';
  const res = await fetch(URL);
  let data = await res.json();

  data = data.response.body.items // 우리가 필요한 데이터

  console.log(data);
}

fetchDustInfo()


//1. 숫자가 아니면 걸러
//2. "-" 면 걸러

//if문 활용할 때 예기치 
// 통신장애 데이터를 거르고 싶다
data = 거르기(data)

// string 대소 비교  -> 숫자로 바꿔줘 . parseInt