import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts);
  // useselector가 getter임
  // 전역에서 꺼내온다 => 뒤 .posts만 바꾸면 됨

  // const location = useLocation();

  // const { post } = location.state;
  // const { title, content } = post;

  const [post, setPost] = useState();
  // const post = posts.find((post) => )

  useEffect(() => {
    setPost(posts.find((post) => post.id === parseInt(postId)));
  }, []);
  // 렌더링이 완료가 됐을 때 실행됨. 무한루프 도는 걸 막음
  // 비동기동작

  return (
    <div>
      detail
      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </div>
  );
}
