<template>
  <div v-if="loading" class="loading-spinner">
    <v-progress-circular color="primary" indeterminate size="64" />
    <p class="mt-4 text-medium-emphasis">Loading...</p>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    loading: boolean
  }>()
  </script>

  <style scoped>
  .loading-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px;
  }
</style>
