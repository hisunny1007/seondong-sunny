import React from "react";

// 이건 일반적인 자바스크립트 함수임
// getImageUrl 함수는 객체가 아니라 개별적인 값 person과 size를 직접 전달받음
function getImageUrl(person, size) {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
// function Avatar(props) {
//   const person = props.person;
//   const size = props.size || 100; // 기본값 설정
//   ...
//   이렇게 안 쓰려고 props 자리에 중괄호로 넣어줘

// // React에서는 컴포넌트의 props가 항상 객체로 전달되기 때문에 구조 분해 할당을 사용해야 합니다.
// React에서는 컴포넌트의 props를 하나의 객체로 전달하기 때문입니다.
// props 객체 하나만 매개변수로 전달받음

// props = { person: { name: 'Lin Lanying', imageId: '1bX5QH6' }, size: 50 };
// props는 하나의 객체이기 때문에 구조 분해 할당을 사용해야
// 개별적인 값을 꺼낼 수 있음
//  props 자리에 {person, size = 100}

function Avatar({ person, size = 100 }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// 프로필이 부모가 되어서 , avatar한테 넘겨
export default function Profile() {
  return (
    <div>
      <Avatar
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
}
