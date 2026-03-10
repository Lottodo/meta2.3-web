<template>
  <v-row>
    <v-col
      v-for="movie in movies"
      :key="movie.imdbID"
      cols="12"
      md="4"
      sm="6"
    >
      <v-card
        class="movie-card"
        hover
        @click="$emit('select-movie', movie.imdbID)"
      >
        <v-img
          cover
          height="260"
          :src="movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/300x445?text=No+Image'"
        />
        <v-card-title class="text-body-1 font-weight-bold">{{ movie.Title }}</v-card-title>
        <v-card-subtitle>{{ movie.Year }}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  defineProps<{
    movies: Array<{
      imdbID: string
      Title: string
      Year: string
      Poster: string
    }>
  }>()

  defineEmits<{
    'select-movie': [imdbID: string]
  }>()
</script>
