// 5. 댓글의 수
// 개별 posts 당 연관된 comments 의 수를 출력한다.

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


for (let post of posts) {
  let postsId = post.id
  // console.log(`${postsId}번 게시글의 댓글 수`)

  let commentNum = 0
  for (let comment of comments) {
    let commentId = comment.postId
    if (commentId === postsId) {
      commentNum += 1
    }
  }
  console.log(`${postsId}번 게시글의 댓글 수 ${commentNum}`)
  
}





// commentNum = 0
// for (let comment of comments) {
//   let commentId = comment.postId
//   if (commentId === posts.id) {
//     commentNum += 1
//   }
// }
// console.log(commentNum)

// commentNum = 0
// for (let comment of comments) {
//   let commentId = comment.postId
//   if (commentId === posts.id) {
//     commentNum += 1
//   }
// }
// console.log(commentNum)
