import axios from "axios";

// https://axios-http.com/kr/docs/instance
// axios라는 라이브러리한테 명령하는 게 아니라 instance한테 명령하는 거임
const instance = axios.create({
  // baseURL: "http://localhost:3000/posts",
  baseURL : import.meta.env.VITE_API_URL + '/posts'
});

// axios.get("http://localhost:3000/posts")
// axios.get(`http://localhost:3000/posts/${postId}`)
// 위의 코드를 아래처럼 사용할 수 있다.
// => 코드관리하기 쉽고 가독성 굿
// instance.get('')
// instance.get(`/${postId}`)

export default instance;
