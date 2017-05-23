export const fetchNewLike = like => (
  $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like }
  })
)

export const fetchDestroyLike = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/likes/${id}`
  })
)
