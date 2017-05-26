export const fetchSearch = (query) => (
  $.ajax({
    method: 'GET',
    url: `/api/search?query=${query}`
  })
)
