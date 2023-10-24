<template>
  <Teleport to="#modal">
    <Transition name="fade">
      <div v-if="props.isOpen">
        <div class="overlay"></div>
        <div class="modal">
          <div class="modal-header">
            <slot name="modal-header"></slot>
          </div>
          <div class="modal-body-background bg-cover bg-no-repeat">
            <div class="modal-body">
              <slot></slot>
            </div>
          </div>
          <div class="modal-footer">
            <slot name="modal-footer"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  isOpen: boolean;
}>();
</script>

<style scoped>
.modal-body-background {
  background-image: url('/invitation-background.jpeg');
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>