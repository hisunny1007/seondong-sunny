import api from './axios'
// 여기서 api는 아까 만들었던 (axios.js파일의) instance임

// url response(메소드) data 세개가 반복되고 있음.
// url이랑 get. post이런 메소드만 달라지고 요청받는건 똑같아서
//하나로 관리하고 싶어~
// url은 api에 녹아들어있음



const postApi = {
  // 1. 리스트 GET (postlist)
  getPosts : async() => {
    const response = await api.get('')
    return response.data
  },
  // 2. 개별 GET (postdetail)
  getPostById : async(postId) => {
    const response = await api.get(`/${postId}`)
    return response.data
  },
  // 3. POST (postcreate)
  createPost : async(formData) => {
    const response = await api.post('', formData)
    return response.data
  },
}

export default postApi