import axios from 'axios'

const API_KEY = 'tu_api_key_aqui' // Reemplaza con tu API key
const BASE_URL = 'https://www.omdbapi.com/'

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
})

export async function searchMovies (params) {
  const response = await api.get('', {
    params: {
      s: params.query,
      type: params.type || 'movie',
      y: params.year || '',
      page: params.page || 1,
    },
  })
  return response.data
}

export async function getMovieDetails (imdbID) {
  const response = await api.get('', {
    params: {
      i: imdbID,
      plot: 'full',
    },
  })
  return response.data
}
