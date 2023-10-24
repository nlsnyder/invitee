<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-slate-800 h-screen">
    <RouterView v-slot="{ Component }">
      <Transition name="page-opacity" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 300ms ease all;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
</style>
