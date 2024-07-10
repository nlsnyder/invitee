<template>
  <div class="flex flex-col gap-4">
    <div>
      <span class="font-bold not-italic">Date: </span>
      <span>Aug 17, 2024</span>
    </div>
    <div>
      <span class="font-bold not-italic">Time: </span>
      <span>7PM</span>
    </div>
    <div class="flex flex-col justify-center items-center">
      <span class="font-bold not-italic">Event: </span>
      <span>You</span>
      <img src="/you.jpg" alt="Fingers pointing at you" class="invite-picture" />
      <span>Me</span>
      <img src="/me.png" alt="Me being cringe" class="invite-picture" />
      <span>Here</span>
      <img src="/amfamfield.jpg" alt="Fingers pointing at you" class="mb-4" />
      <img src="/whaddyasay.jpg" alt="Fingers pointing at you" />
    </div>
  </div>
</template>

<style scoped>
.dinner-option-container {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid lightskyblue;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.invite-picture {
  width: 50%;
  height: auto;
}
</style>