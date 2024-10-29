async function getDust() {
  try {
    const URL = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'
    const serviceKey = '?erviceKey=rlP4%2FmHe7%2FQs6jsqbLw3ks5xeF1VIjfeZSe0UuMq7ZSReex0UxGm62flHXMrbkDMFN7l7B32LwtcsT3GBtJzSA%3D%3D'
    const returnType = 'xml'
    const numOfRows = '100'
    const sidoName = '%EC%84%9C%EC%9A%B8'
    const ver = '1.0'

// https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty
// ?serviceKey=rlP4%2FmHe7%2FQs6jsqbLw3ks5xeF1VIjfeZSe0UuMq7ZSReex0UxGm62flHXMrbkDMFN7l7B32LwtcsT3GBtJzSA%3D%3D
// &returnType=xml
// &numOfRows=100
// &pageNo=1
// &sidoName=%EC%84%9C%EC%9A%B8
// &ver=1.0

    const response = await fetch(`${URL}?${serviceKey})$`);
    const data = await response.xml();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getDust();
