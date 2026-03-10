<template>
  <v-card class="pa-4">
    <v-card-title class="mb-4">Buscar Películas</v-card-title>
    <v-card-text>
      <v-text-field
        v-model="query"
        class="mb-3"
        clearable
        label="Título"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
      />
      <v-select
        v-model="type"
        class="mb-3"
        :items="typeOptions"
        label="Tipo"
        variant="outlined"
      />
      <v-text-field
        v-model="year"
        class="mb-4"
        label="Año (opcional)"
        variant="outlined"
      />
      <v-btn
        block
        color="primary"
        :disabled="!query"
        @click="handleSearch"
      >
        Buscar
      </v-btn>
      <v-btn
        block
        class="mt-2"
        variant="text"
        @click="handleClear"
      >
        Limpiar
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const query = ref('')
  const type = ref('movie')
  const year = ref('')

  const typeOptions = [
    { title: 'Película', value: 'movie' },
    { title: 'Serie', value: 'series' },
    { title: 'Episodio', value: 'episode' },
  ]

  const emit = defineEmits<{
    'search-movies': [params: { query: string, type: string, year: string }]
    'clear-results': []
  }>()

  function handleSearch () {
    emit('search-movies', { query: query.value, type: type.value, year: year.value })
  }

  function handleClear () {
    query.value = ''
    year.value = ''
    type.value = 'movie'
    emit('clear-results')
  }
</script>
