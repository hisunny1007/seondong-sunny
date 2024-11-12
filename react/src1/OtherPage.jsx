import AdminPage from "./AdminPage";
import UserPage from "./UserPage";
import ManagerPage from "./ManagerPage";

// export default function OtherPage() {
  // let userType = "user";
  // let result

  // if (userType === 'admin') {
  //   result = <AdminPage></AdminPage>
  // } else if (userType === 'manager') {
  //   result = <ManagerPage></ManagerPage>
  // } else if (userType === 'user') {
  //   result = <UserPage></UserPage>
  // } else {
  //   result = null
  // }

//   let result =
//     userType === "admin" ? (
//       <AdminPage></AdminPage>
//     ) : userType === "manager" ? (
//       <ManagerPage></ManagerPage>
//     ) : userType === "user" ? (
//       <UserPage></UserPage>
//     ) : null;
//   return (
//     <>
//       <h1>나의 앱</h1>
//       <div>{result}</div>
//     </>
//   );
// }



export default function OtherPage() {
  const userType = 'user'

  const mappingPage = {
    admin :  <AdminPage></AdminPage>,
    manager : <ManagerPage></ManagerPage>,
    user :  <UserPage></UserPage>,
  }

  const result = mappingPage[userType]
  console.log(result)

  return (
    <>
    <h1>나의 앱</h1>
    <div>{result}</div>
    </>
  )
}
