<template>
  <v-container class="pa-8">
    <v-row>
      <v-col cols="12">
        <v-btn
          icon="mdi-arrow-left"
          variant="text"
          @click="router.push('/')"
        />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-h3 mb-4 text-center">About</h1>
        <v-card
        class="mx-auto"
        prepend-avatar="/raider.png"
        subtitle="Version 0.1"
        title="Buscador de Películas"
      >
        <v-card-text>Meta 2.3 - Desarrollo de Aplicaciones Web 2026-1</v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>
