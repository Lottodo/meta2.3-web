<template>
  <v-card class="mt-4">
    <v-card-title class="d-flex align-center justify-space-between">
      <span>{{ movie.Title }} ({{ movie.Year }})</span>
      <v-btn icon="mdi-close" variant="text" @click="$emit('close-details')" />
    </v-card-title>

    <v-card-text>
      <v-row>
        <v-col cols="12" sm="4">
          <v-img
            rounded="lg"
            :src="movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/300x445?text=No+Image'"
          />
        </v-col>
        <v-col cols="12" sm="8">
          <p class="mb-2"><strong>Director:</strong> {{ movie.Director }}</p>
          <p class="mb-2"><strong>Genre:</strong> {{ movie.Genre }}</p>
          <p class="mb-2"><strong>Runtime:</strong> {{ movie.Runtime }}</p>
          <p class="mb-2"><strong>Rating:</strong> {{ movie.imdbRating }} / 10</p>
          <p class="mt-4 text-body-2">{{ movie.Plot }}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  defineProps<{
    movie: Record<string, string>
  }>()

  defineEmits<{
    'close-details': []
  }>()
</script>
