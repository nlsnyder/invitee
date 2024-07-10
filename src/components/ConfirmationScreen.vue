<template>
  <div class="w-full m-auto rounded shadow-2xl bg-slate-800">
    <div class="flex flex-col items-center justify-center gap-2 text-green-500 p-6">
      <font-awesome-icon class="text-5xl" :icon="['fas', 'circle-check']" />
      <h3>Accepted</h3>
    </div>
    <div class="border-t border-solid border-slate-300 px-[10%] py-6 text-slate-300">
      <div class="flex flex-col items-between justify-center gap-8">
        <h5 class="font-semibold text-center">Event</h5>
        <div class="info-section">
          <span class="detail-tag">Date:</span>
          <div class="date-card">
            <font-awesome-icon :icon="['far', 'calendar']" />
            <span>8-14-2024</span>
          </div>
        </div>
        <div class="info-section">
          <span class="detail-tag">Time:</span>
          <div class="time-card">
            <font-awesome-icon :icon="['far', 'clock']" />
            <span>7PM</span>
          </div>
        </div>
        <div class="info-section">
          <span class="detail-tag">Details:</span>
          <p class="italic text-base">
            Brewers game
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.info-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

@media (min-width: 576px) {
  .info-section {
    flex-direction: row;
    gap: 0px;
  }
}

.detail-tag {
  font-weight: 500;
  font-size: 16px;
}

.date-card,
.time-card {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>
