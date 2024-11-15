import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../store/slices/loginSlice";

export default function Header() {
  const {isLogin} = useSelector((state) => state.login)
  // console.log(isLogin)
  const dispatch = useDispatch()

  return (
    <header>
      <div>
        {{isLogin} ? <button>로그인</button> : <button>로그아웃</button>}
      </div>
      {/* onClick 이벤트 발생 */}
      <ul>
        <li>
          <Link to="/">Home으로</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/posts">게시글로</Link>
        </li>
        <li>
          <Link to="/posts/create">게시글 생성</Link>
        </li>
      </ul>
    </header>
  );
}
