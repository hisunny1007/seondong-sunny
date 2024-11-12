import React from 'react'
import { useParams } from 'react-router-dom'

export default function BookDetail() {
  const {bookGenre} = useParams()
  // console.log(bookGenre)
  return (
    <div>{bookGenre} 페이지입니당</div>
  )
}
