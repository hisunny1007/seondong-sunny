import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = [
  {
    id: 1,
    title: "첫 번째 프로젝트",
    content:
      "간단한 Todo 앱을 만들었습니다. UI 구성과 상태 관리의 중요성을 배웠습니다.",
  },
  {
    id: 2,
    title: "리액트와 함께한 성장",
    content:
      "리액트를 이용해 컴포넌트 기반 개발을 익히고 재사용성을 높이는 방법을 배웠습니다.",
  },
  {
    id: 3,
    title: "팀 프로젝트 경험",
    content:
      "팀 프로젝트에서 협업하여 일정 관리 앱을 개발했고, Git을 활용한 버전 관리와 코드 리뷰의 중요성을 배웠습니다.",
  },
];

// 리덕스에서 상태(state)를 관리하는 구조 중 하나로,
// 특정 상태나 기능에 관련한 액션과 리듀서를 한 곳에 모아놓은것
// 슬라이스 이름 / 초기 상태 / 리듀서 / 액션(상태를 어떻게 변경할지 정의)(addPost라는 액션)
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      // 리스트에.push(새로운 데이터를)
      state.push(action.payload);
    },
  },
});

// payload는 새로 업데이트 할 값
//  리듀서에서 action.payload를 통해 상태를 새로운 값으로 업데이트할 수 있음

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
