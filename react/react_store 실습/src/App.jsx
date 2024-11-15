import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <>
    {/* provider에 store 전달 */}
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

// app한테 전역관리상태 넘기는것 provider store={store} store안에 있는 데이터는 어디에서나 사용 가능