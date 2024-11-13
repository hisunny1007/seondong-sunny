import React from "react";
import { Link, Outlet } from "react-router-dom";
import WebtoonMain from "../pages/WebtoonMain";
import WebtoonDay from "../pages/WebtoonDay";

export default function WebtoonLayout() {
  const days = ["월", "화", "수", "목", "금", "토", "일"];

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
              {days.map((day) => {
                return (
                  <li className="padding">
                    <Link to={`/webtoon/${day}`}>{day}요일</Link>
                  </li>
                );
              })}
            </ul>


            {/* 만약에 사용자가 url주소에 이상한 거 쓰면 잘못됐다고 말해주거나 다시 웹툰으로(리다이렉트=다른 곳으로 보내버려)할 수도 있음 */}
            {/* 태그 안에 자바스크립트 코드를 작성하려면 중괄호를 작성해야 한다. */}
            {/* return에는 변수 선언할 필요 없음 */}
            {/* <Link to="/webtoon/mon">월</Link>, <Link to="/webtoon/tue">화</Link>
            , <Link to="/webtoon/wed">수</Link>,{" "}
            <Link to="/webtoon/thu">목</Link>, <Link to="/webtoon/fri">금</Link>
            , <Link to="/webtoon/sat">토</Link>,
            <Link to="/webtoon/sun">일</Link> */}
          </li>
        </ul>
      </header>
      <Outlet></Outlet>
      <footer></footer>
    </>
  );
}
