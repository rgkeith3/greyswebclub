//let's take a sec to talk about Grey Keith's preferred naming convention
//api_util functions should use words like fetch when possible
//thunk actions should use words like request
//actions should use words like receive

export const fetchPosts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/posts'
  })
)

export const fetchExplorePosts = (count) => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/explore?offset=${count}`
  })
)

export const fetchUsersPosts = id => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/user?user_id=${id}`
  })
)

export const fetchNewPost = formData => (
  $.ajax({
    method: 'POST',
    url: '/api/posts',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
)

export const fetchOnePost = ( id ) => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${id}`
  })
)

export const fetchUpdatePost = post => (
  $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: { post }
  })
)

export const fetchDestroyPost = ( id ) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`
  })
)
