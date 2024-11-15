import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../store/slices/postsSlice";
import { useNavigate } from "react-router-dom";

export default function PostCreate() {
  const {isLogin} = useSelector(state => state.login)
// 로그인을 했는지 여부에 따라서 => 했으면 그냥 보여주기 => 안했으면 딴거 보여주기 아니면 다른데로 보내기




  const [formData, setFormData] = useState({ title: "", content: "" });
  const dispatch = useDispatch(); // reducer를 실행시키는 것
  const navigate = useNavigate();

  function handleChange(e) {
    // 우리의 state를 변경하고 싶어
    // input의 value를 우리의 state에 넣고 싶어.

    const inputValue = e.target.value;
    const key = e.target.name;
    // data = new formData(form) // 

    setFormData({
      ...formData, // setter는 값 일부분만 바꾸는 게 불가능함. content가 여러 개 일때 바꾸기 귀찮으니까 스프레드를 쓰면 알아서 들어감. 원본 데이터를 뿌려서 다 넣어주고 갈아끼울 것만 갈아끼우자자
      // title: inputValue,
      // content: formData.content,
      [key]: inputValue,
    });
  }

  function handleSubmit(e) {
    e.preventDefault(); // 새로고침 방지
    // console.log(formData)
    // dispatch(addPost(payload)) // payload는 전달하고자 하는 data
    const id = Date.now() // 임시 id
    dispatch(addPost({ ...formData, id})); // store에 있는 변수 쓰려면 useselector/ setter 쓰려면 dispatch 써야됨
    navigate(`posts/${id}`)
    // navigate('/posts')
  }

  // action이라는 url로 요청을 보내고, 응답을 받는다
  // 나의 브라우저는 새로운 응답을 렌더링 한다.

  return (
    <>
      <h3>Post Create</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">제목 : </label>
        <input
          type="text"
          name="title"
          id="title"
          // {/* 인풋에 입력이 되었을 때 우리의 state를 변경하고 싶어 */}
          // input의 id는 label이랑 연결시키는 거라서 이렇게 쓰면 써줘야함
          onChange={handleChange}
        />

        {/* 입력받은 data는 input 태그의 value가 갖고 있음 -> 이걸 변수에 넣어주자 */}
        <label>
          내용 :
          <textarea name="content" id="" onChange={handleChange}></textarea>
        </label>
        {/* 여기는 id 지정해서 연결 안 시키고 그냥 label 태그 안에다가 textarea넣어줬으니까 id 필요없음 */}
        <button>제출</button>
      </form>

      {/* textarea는 넓은 input */}
    </>
  );
}

// 데이터를 입력 받아서 posts를 생성하는 것

// (1) 데이터를 입력받는다
// =>
//   컴포넌트 / 라우터 / 링크

// =>
//   입력태그 / form / state

// => 입력값을 state에 동기화

// (2) 입력받은 data로 posts를 생성하고 싶다
// posts는 store로 관리가 되고 있다
// posts에 변경을 하기 위해서는 setter를 써야 하고
// store로 관리되는 변수의 setter는 reducer라고 부르기로 함

// => 입력받은 data를 가지고 posts를 생성하는 reducer(함수)를 만들고 그것을 call해야함
