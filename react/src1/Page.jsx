import React from 'react'
import AdminPage from './AdminPage'
import UserPage from './UserPage'



export default function Page() {
  const userType = true

  let result = userType ? <AdminPage></AdminPage> : <UserPage></UserPage>

  // if (userType) {
  //   result = <AdminPage></AdminPage>
  // } else {
  //   result = <UserPage></UserPage>
  // }

  return (
    <>
      <h1>나의 앱</h1>
      <div>{result}</div>
    </>
  )
}

// export default function Page() {
//   const userType = false

//   if (userType) {
//     return (
//     <>
//       <h1>나의 앱</h1>
//       <AdminPage></AdminPage>
//     </>
//     ) 
//   } else {
//     return (
//       <>
//         <h1>나의 앱</h1>
//         <UserPage></UserPage>
//       </>
//       ) 
//     }
// }
