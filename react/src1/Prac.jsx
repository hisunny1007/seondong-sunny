import React from 'react'

export default function Prac() {
  const nameLi = [
    'Creola Katherine Johnson : mathematician',]
  
  const nameList = nameLi.map((name) => {
    return <li>{name}</li>
  })
  console.log(nameList)

  return (
    <>
    <ul>{nameList}</ul>
      {/* <ul>
        <li>Creola Katherine Johnson: mathematician</li>
        <li>Mario José Molina-Pasquel Henríquez: chemist</li>
        <li>Mohammad Abdus Salam: physicist</li>
        <li>Percy Lavon Julian: chemist</li>
        <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
      </ul> */}
    </>
  )
}
