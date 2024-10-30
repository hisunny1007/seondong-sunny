// 4. 모든 게시글과 댓글
// 모든 `posts` 와 `comments` 의 객체를 출력한다.
// 이때, 개별 `posts` 에 연관된 `comments`를 구분해서 출력한다.

const posts = [
  { id: 1, title: '첫 번째 포스트', content: '첫 번째 포스트 내용' },
  { id: 2, title: '두 번째 포스트', content: '두 번째 포스트 내용' },
  { id: 3, title: '세 번째 포스트', content: '세 번째 포스트 내용' },
];

const comments = [
  { id: 1, postId: 1, content: '첫 번째 댓글' },
  { id: 2, postId: 2, content: '두 번째 댓글' },
  { id: 3, postId: 1, content: '세 번째 댓글' },
  { id: 4, postId: 2, content: '네 번째 댓글' },
  { id: 5, postId: 3, content: '다섯 번째 댓글' },
  { id: 6, postId: 2, content: '여섯 번째 댓글' },
  { id: 7, postId: 3, content: '일곱 번째 댓글' },
  { id: 8, postId: 3, content: '여덟 번째 댓글' },
  { id: 9, postId: 1, content: '아홉 번째 댓글' },
  { id: 10, postId: 3, content: '열 번째 댓글' },
];


// console.log(posts[0])
// comments.forEach((comment) => {
//   if (comment.postId === 1) {
//     console.log(comment)
//   }
// })

// console.log(posts[1])
// comments.forEach((comment) => {
//   if (comment.postId === 2) {
//     console.log(comment)
//   }
// })

// console.log(posts[2])
// comments.forEach((comment) => {
//   if (comment.postId === 3) {
//     console.log(comment)
//   }
// })


for (let i = 0; i <=2; i++) {
  console.log(`${i + 1}번 post`)  // 1번 post
  console.log(posts[i]) // { id: 1, title: '첫 번째 포스트', content: '첫 번째 포스트 내용' }
  console.log(`${i + 1}번 post의 Comments`)

  comments.forEach((comment) => {
  if (comment.postId === i + 1) {
    console.log(comment)
  }
})
}

// 강사님 풀이 //
posts.forEach((post) => {
  let postId = post.id
  console.log(`${postId}번 Post`)
  console.log(post)

  console.log(`${postId}번 Post의 Comments`)
  comments.forEach((comment) => {
    let commentPostid = comment.postId
    if (commentPostid === postId) {
      console.log(comment)
    }
  })
})
