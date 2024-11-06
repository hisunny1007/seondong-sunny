import React from 'react';
import Profile from './Profile';

function Anothercomponent() {
  return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtDYC5Lrjf3MK-OAK9Zj0SnG8WLl9hSYA4w&s" alt="" />
}

function App() {
  return (
    <div>
      <Anothercomponent></Anothercomponent>
      <Profile></Profile>
    </div>
  );
}

export default App;

// import React from 'react';

// export default function App() {
//   return <div>App</div>;
// }
