import React from "react";
import BookMain from "../pages/BookMain";
import BookDetail from "../pages/BookDetail";
import { Link, Outlet } from "react-router-dom";

export default function BookLayout() {
  const movieGenre = ["판타지", "로맨스", "호러물", "수사극"]
  return (
    <>
      <header>
        <ul className="dotremove flex">
          <li className="padding">
            <Link to="">홈</Link>
          </li>
          <li className="padding">
            <Link to="/webtoon">웹툰</Link>
          </li>
          <li className="padding">
            <Link to="/book">소설</Link>
          </li>

          <li>
            <ul className="dotremove flex">
            {movieGenre.map((genre) => {
              return (
                <li className="padding">
                  <Link to={`/book/${genre}`}>{genre}</Link>
                </li>
              )
            })}
            </ul>
          </li>
          {/* <li>
            <Link to="/book/genre2">장르2</Link>
          </li>
          <li>
            {" "}
            <Link to="/book/genre3">장르3</Link>
          </li>
          <li>
            {" "}
            <Link to="/book/genre4">장르4</Link>
          </li>
          <li>
            <Link to="/book/genre5">장르5</Link>
          </li>
          <li>
            {" "}
            <Link to="/book/genre6">장르6</Link>
          </li>
          <li>
            <Link to="/book/genre7">장르7</Link>
          </li> */}
        </ul>
      </header>
      <Outlet></Outlet>
      <footer></footer>
    </>
  );
}
