<template>
  <div class="flex flex-col gap-4">
    <div>
      <span class="font-bold not-italic">Date: </span>
      <span>Dec 14, 2023</span>
    </div>
    <div>
      <span class="font-bold not-italic">Time: </span>
      <span>6PM</span>
    </div>
    <div class="flex flex-col">
      <span class="font-bold not-italic">Event: </span>
      <span>Start off the night with dinner. <br /> Possible options include but are not limited to:</span>
      <div class="dinner-option-container">
        <p class="italic text-left">The Statehouse</p>
        <img src="/statehouse-img-1.jpeg" alt="Fine dining pasta dish" class="rounded dinner-picture" />
        <img src="/statehouse-img-2.webp" alt="Fine dining fish dish" class="rounded dinner-picture" />
        <img src="/statehouse-img-3.jpeg" alt="Statehouse restaurant" class="rounded dinner-picture" />
      </div>
      <div class="dinner-option-container">
        <p class="italic text-left">Cento</p>
        <img src="/cento-img-1.jpeg" alt="Cento pasta dish" class="rounded dinner-picture" />
        <img src="/cento-img-2.jpeg" alt="Cento pizza dish" class="rounded dinner-picture" />
        <img src="/cento-img-3.jpeg" alt="Cento restaurant" class="rounded dinner-picture" />
      </div>
      <div class="dinner-option-container">
        <p class="italic text-left">The Old Fashioned</p>
        <img src="/old-fashioned-img-1.webp" alt="Old fashioned brat" class="rounded dinner-picture" />
        <img src="/old-fashioned-img-2.jpeg" alt="Old fashioned cheese curds" class="rounded dinner-picture" />
        <img src="/old-fashioned-img-3.jpeg" alt="Old fashioned restaurant" class="rounded dinner-picture" />
      </div>
      <div class="ice-skating-description">
        <p class="mb-4">End the night ice skating at the Edgewater.</p>
        <img src="/ice-skating-edgewater.jpg" alt="Statehouse restaurant" class="rounded dinner-picture" />
        <p class="mt-4">P.S. I really hope the ice skating rink is open. It's supposed to open the 13th if it's cold
          enough.</p>
      </div>
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

.dinner-picture {
  width: 100%;
}
</style>