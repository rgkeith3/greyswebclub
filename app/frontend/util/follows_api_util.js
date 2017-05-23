export const fetchNewFollow = follow  => (
  $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: { follow }
  })
)

export const fetchDestroyFollow = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/follows/${id}`
  })
)
