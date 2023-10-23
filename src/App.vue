<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen">
    <RouterView v-slot="{ Component }">
      <Transition name='fade'>
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped></style>
