import axios from 'axios'

export const key = 'f080850117e6c6c1df95cc119bb5c36b'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api