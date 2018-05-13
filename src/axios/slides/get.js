import http from '../http'

export const getAll = () =>
  http.get('/static/json/slides.json', {})
    .then(response => response.data)
    .then(data => data)
