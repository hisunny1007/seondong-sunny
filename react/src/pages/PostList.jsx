import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import postApi from "../api/postsApi";

export default function PostList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  // (로딩 중) => 포스트에 대한 요청을 보내 => 받아 => 로딩 끝남 => 보여줘 
  // 요청 보내기 이전의 상태가 로딩 중으로 생각해 => 로딩 초기값 true

  // 에러 났을 때// 
  // 정상인 경우를 try에다 묶고 에러났을 경우를 catch로 묶어

  useEffect(() => {
    // const posts = useSelector((state) => state.posts);
    async function fetchPosts() {
      try{
        // const url = "http://localhost:3000/posts";
        // const response = await axios.get(url);
        // // const response = await axios({url: url});
  
        // const data = response.data;
        const data = await postApi.getPosts()
        setPosts(data);
      }

      
      catch (err) {
        setError('무엇인가의 error가 났어')
        // setLoading(false) 이거 쓰면 아래 if문 순서 안 바꿔도 돼 => finally 무조건 실행으로 대체
        console.error(err)
        console.log("에러남")
      } finally {
        setLoading(false)
      }

    }

    fetchPosts();
  }, []);
  
  if (loading) {
    return <div>로딩 중이얌</div>;
  }

  if (error) {
    return <div>{error}</div>
  }
  



  // useEffect(() => {
  //   // const posts = useSelector((state) => state.posts);
  //   async function fetchPosts() {
  //     const url = "http://localhost:3000/posts";
  //     const response = await axios.get(url);
  //     // const response = await axios({url: url});

  //     const data = response.data;
  //     setLoading(false);
  //     //데이터 나오기 전까지 로딩 중
  //     // 로딩 끝남
  //     setPosts(data);
  //   }

  //   fetchPosts();
  // }, []);


  // if (loading) {
  //   return <div>로딩 중이얌</div>;
  // }

  return (
    <div>
      <h2>posts</h2>
      <ul>
        {posts.map((post) => {
          const { id, title, content } = post;
          return (
            <li key={id}>
              <Link to={`/posts/${id}`} state={{ post }}>
                <h3>{title}</h3>
              </Link>
              <h3
                onClick={() => {
                  // 이동을 하고 싶다
                  navigate(`/posts/${id}`);
                }}
              >
                {title}
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// 비동기 동작은 useeffect에 넣자
//
// 디펜던시가 빈리스트면 한번 실행
// 뭐가 있으면 바뀔 때마다 실행
