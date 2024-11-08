import React from "react";

export default function App() {
  const names = ["jun", "alex", "ken", "beemo"];

  const name = "jun"; // ->   <div>jun</div>

  // (<div>{name}</div>)`${name}`;

  const mappedNames = names.map((name) => {
    return <div>{name}</div>;
  });

  const junTag = <div>jun</div>;

  const namesTags = [junTag, <div>alex</div>, <div>ken</div>];
  return (
    <div>
      {mappedNames}
      <div>{mappedNames}</div>
      <div>{names}</div>

      <div>jun</div>
      <div>alex</div>
      <div>ken</div>
    </div>
  );
}
