// import { isNull } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import postApi from "../api/postsApi";

export default function PostDetail() {
  const navigate = useNavigate();

  const { postId } = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  //post없다가 있으니까 state로 관리해

  // 이동하고 싶을 때 link 또는 navigate (usenavigate 훅 사용해)
  // return 다 보여지고 나서 useeffect 한 번 실행됨
  useEffect(() => {
    // const url = "http://localhost:3000/posts/id";
    // const url = `http://localhost:3000/posts/${postId}`;
    async function fetchPost() {
      try {
        // 원래 로직
        // const response = await axios.get(url);
        // const data = response.data;
        const data = await postApi.getPostById(postId)
        setPost(data);
      } catch (err) {
        // err 처리 로직
        // TODO : 나중에 고칠 것
        // navigate("/posts")
        navigate("/not-found", { replace: true });
        // 아예 낫파운드 페이지로 이동시킴
        // {replace:true} posts-> posts/123 -> notfound
        // posts/123을 notfound로 덮어버림
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, []);

  if (loading) {
    return <div>로딩 중..</div>;
  }

  // useEffect(() => {
  //   setPost(posts.find((post) => post.id === parseInt(postId)));
  // }, []);

  return (
    <div>
      detail
      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </div>
  );
}
