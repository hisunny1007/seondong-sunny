import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
    },
    logout: (state, action) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;

// slice를 만들어서 로그인 상태 저장
// store만들어서 slice 저장
