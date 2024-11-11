import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostList from "../pages/PostList";
import Hello from "../pages/Hello";
import RootLayout from "../RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, // 부모가 가지고 있는 path 그대로 가지고 옴
        element: <Home />,
      },
      {
        path: "/posts",
        element: <PostList />,
      },
    ],
  },
]);

export default router;
