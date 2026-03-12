<template>
  <v-dialog max-width="900" :model-value="!!movie" @update:model-value="handleClose">
    <v-card v-if="movie" class="pa-4" elevation="6">
      <v-row>
        <v-col cols="12" md="4">
          <v-img
            cover
            height="400"
            :src="movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/600x400?text=No+imagen'"
          />
        </v-col>

        <v-col cols="12" md="8">
          <v-card-title>{{ movie.Title }}</v-card-title>
          <v-card-subtitle>{{ movie.Year }} • {{ movie.Genre }}</v-card-subtitle>
          <v-card-text class="mt-4">
            <p><strong>Director:</strong> {{ movie.Director }}</p>
            <p><strong>Actores:</strong> {{ movie.Actors }}</p>
            <p><strong>Duración:</strong> {{ movie.Runtime }}</p>
            <p><strong>Sinopsis:</strong> {{ movie.Plot }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="error" variant="elevated" @click="emit('close-details')">Cerrar</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script setup>
  defineProps({
    movie: {
      type: Object,
      default: null,
    },
  })
  const emit = defineEmits(['close-details'])

  function handleClose (value) {
    if (!value) {
      emit('close-details')
    }
  }
</script>
