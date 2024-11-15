import React, { useState } from 'react'

export default function Login() {

  const [isLogin, setIsLogin] = useState();

  function handleClick () {
    {isLogin ? "로그인 됨" : "로그아웃 됨"}
    
  }

  return (
    <>
      <h2>로그인</h2>
      <button onClick={handleClick}>버튼</button>
    </>
  )
}
