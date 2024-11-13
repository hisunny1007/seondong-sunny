import React from 'react'
import { useParams } from 'react-router-dom'

export default function WebtoonDay() {
  const {webtoonDay} = useParams()
  console.log(webtoonDay)
  return (
    <div>{webtoonDay}요일 웹툰이야</div>
  )
}

// import React from 'react'

// export default function WebtoonDay() {
//   return (
//     <div>WebtoonDay</div>
//   )
// }

