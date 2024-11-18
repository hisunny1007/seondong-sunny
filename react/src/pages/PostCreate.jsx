import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../store/slices/postsSlice";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import postApi from "../api/postsApi";

// useSelector로 상태를 가져오고, useDispatch로 액션을 보내서 상태를 바꿈

export default function PostCreate() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ title: "", content: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 최초 한번, 또는 dependency가 바뀌었을 때
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  function handleFormInput(e) {
    // 우리의 state를 변경하고 싶어.
    // input의 value를 우리의 state에 넣고 싶어.
    const inputValue = e.target.value;
    const key = e.target.name;

    // form은 state 쓰고 있기 때문에 스테이트 변경하려면 세터(setfordata)를 통해서만 변경해야함
    setFormData({
      // value : formData.value,
      // haha : formData.haha,
      // hehe : formData.hehe,
      // -> 엄청 많아지면 ...formData 스프레드로 전체 다 들어가고
      // 바뀌는 것만 명시할 수 있음
      // 원본 데이터를 뿌려가지고 다 넣어준다음 갈아끼울 것만 갈아끼우자
      ...formData,
      // title : inputValue,
      // content : inputValue

      // key : inputValue 하면 스트링으로 들어가서
      // 변수처럼 쓰고 싶으니까 변수로 들어감 [key]
      [key]: inputValue,
    });
  }

  function handleSubmit(e) {
    // form은 action이라는 url로 요청을 보내고, 응답을 받는다.
    // 나의 브라우저는 새로운 응답을 렌더링 한다.
    // => 이거 안 하려고 form의 기본 동작인 제출 동작 action값을 막음
    e.preventDefault();

    async function createPost() {
      // const url = "http://localhost:3000/posts";
      // const response = await axios.post(url, formData)

      // const data = response.data

      const data = await postApi.createPost(formData);

      const id = data.id;
      navigate(`/posts/${id}`);
    }

    createPost();

    // const id = Date.now(); // 임시 id

    // dispatch(addPost({ ...formData, id }));
    // => axios로 대체 (url, method, data)

    // navigate(`/posts`)
  }
  return (
    <>
      <h3>PostCreate</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">제목 : </label>
        <input
          type="text"
          name="title"
          id="title"
          // 인풋에 입력이 되었을 때 우리의 state를 변경하고 싶어.
          onChange={handleFormInput}
        />

        <label>
          내용 :
          <textarea name="content" id="" onChange={handleFormInput}></textarea>
        </label>

        <button>제출</button>
      </form>
    </>
  );
}

// new FormData(form)
// form 태그를 입력받아서 그것을 data로 변환시켜주는 동작을 도와주는 class
// 이거 말고 state방식 쓸거임
