import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav>
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
        </ul>
      </nav>
      <h2>홈 화면</h2>
    </>
  );
}
