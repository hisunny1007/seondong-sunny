import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import WebtoonLayout from "../Layout/WebtoonLayout";
import BookLayout from "../Layout/BookLayout";
import WebtoonMain from "../pages/WebtoonMain";
import WebtoonDay from "../pages/WebtoonDay"
import BookMain from "../pages/BookMain";
import BookDetail from "../pages/BookDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/book",
    element: <BookLayout />,
    children: [
      {
        index: true,
        element: <BookMain />
      },
      {
        path: "/book/:bookGenre",
        element: <BookDetail />
      }
    ]
  },
  {
    path: "/webtoon",
    element: <WebtoonLayout />,
    children: [
      {
        index: true,
        element: <WebtoonMain />,
      },
      {
        path: "/webtoon/:webtoonDay",
        element: <WebtoonDay />,
      },
    ],
  },
]);

export default router;

// {webtoondatil}에 loader로 새로운 키 값 넣어서 관리할 수 있음