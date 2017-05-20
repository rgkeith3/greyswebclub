export const fetchNewLike = () => (
  $.ajax({
    method: 'POST',
    url: '/api/likes',
    data:
  })
)

export const fetchDestroyLike = ( like ) => (
  $.ajax({
    method: 'DELETE',
    url: '/api/likes'
  })
)
