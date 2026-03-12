<template>
  <v-container class="pa-8">
    <v-row>
      <v-col cols="12" class="d-flex align-center justify-space-between">
        <h1 class="text-h3 mb-6">🎬 Buscador de Películas</h1>
        
        <v-btn variant="outlined" to="/about">About</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <movie-search
          @clear-results="handleClear"
          @search-movies="handleSearch"
        />
      </v-col>

      <v-col cols="12" md="8">
        <loading-spinner :loading="loading" />

        <movie-list
          v-if="movies.length > 0"
          :movies="movies"
          @select-movie="handleMovieSelect"
        />

        <movie-details
          v-if="selectedMovie"
          :movie="selectedMovie"
          @close-details="handleCloseDetails"
        />

        <v-alert
          v-if="error"
          class="mt-4"
          type="error"
        >
          {{ error }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'
  import LoadingSpinner from '@/components/LoadingSpinner.vue'
  import MovieDetails from '@/components/MovieDetails.vue'
  import MovieList from '@/components/MovieList.vue'
  import MovieSearch from '@/components/MovieSearch.vue'
  import { getMovieDetails, searchMovies } from '@/services/movieApi'

  const movies = ref([])
  const selectedMovie = ref(null)
  const loading = ref(false)
  const error = ref('')

  async function handleSearch (searchParams) {
    loading.value = true
    error.value = ''

    try {
      const response = await searchMovies(searchParams)
      if (response.Search) {
        movies.value = response.Search
      } else {
        movies.value = []
        error.value = 'No se encontraron películas'
      }
    } catch (error_) {
      error.value = 'Error al buscar películas'
      console.error(error_)
    } finally {
      loading.value = false
    }
  }

  async function handleMovieSelect (imdbID) {
    loading.value = true
    try {
      selectedMovie.value = await getMovieDetails(imdbID)
    } catch (error_) {
      error.value = 'Error al cargar detalles de la película'
      console.error(error_)
    } finally {
      loading.value = false
    }
  }

  function handleCloseDetails () {
    selectedMovie.value = null
  }

  function handleClear () {
    movies.value = []
    selectedMovie.value = null
    error.value = ''
  }
</script>
