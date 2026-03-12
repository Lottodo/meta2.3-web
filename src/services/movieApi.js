import axios from 'axios'


const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const BASE_URL = 'https://www.omdbapi.com/'

async function fetchAPI(params) {
  const searchParams = new URLSearchParams({
    apikey: API_KEY,
    ...params,
  })

  const response = await fetch(`${BASE_URL}?${searchParams}`)

  if(!response.ok) {
    throw new Error(`ERROR DE LLAMADA API: ${response.status}`)
  }

  return response.json();
}

export async function searchMovies (params) {
  return fetchAPI({
    s: params.query,
    type: params.type || 'movie',
    y: params.year || '',
    page:params || `,`
  })
}

export async function getMovieDetails (imdbID) {
  return fetchAPI({
    i: imdbID,
    plot: 'full',
  })
}
