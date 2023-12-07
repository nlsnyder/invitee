<template>
  <div class="h-screen text-white flex items-center justify-center flex-col">
    <h3 class="text-slate-300 mb-3">Enter Code</h3>
    <div class="mb-8">
      <input v-for="i in 4" class="verification-code-square text-slate-900 text-2xl" :key="i" v-model="keyCode[i - 1]"
        @input="onCodeInput(i - 1)" @keydown="onInputKeyDown(i - 1, $event)" maxlength="1" />
    </div>
    <div class="w-[20rem]">
      <div class="grid grid-rows-3 grid-cols-3 gap-y-4">
        <button v-for="num in 9" class="text-slate-300 text-[2rem] flex items-center justify-center" :key="num"
          @click="onKeypadClick(num)"><span
            class="w-20 h-20 border  border-slate-300 rounded-full hover:bg-slate-300 hover:text-slate-900 transition-colors flex items-center justify-center font-semibold">{{
              num }}</span></button>
      </div>
      <div class="mt-3 grid grid-rows-1 grid-cols-3 gap-[0.75rem]">
        <button class="col-start-2 text-[2rem] flex items-center justify-center text-slate-300"
          @click="onKeypadClick(0)"><span
            class="w-20 h-20 border  border-slate-300 rounded-full hover:bg-slate-300 hover:text-slate-900 transition-colors flex items-center justify-center font-semibold">0</span></button>
        <button @click="deleteNumber" class="w-20 h-20"><font-awesome-icon class="h-8 w-8 hover:text-slate-500"
            :icon="['fas', 'delete-left']" /></button>
      </div>
      <div class="mt-4 flex flex-col gap-3 items-center justify-center w-full">
        <button @click="verifyCode" :disabled="!isCodeFull" type="submit"
          class="font-semibold bg-slate-600 text-slate-200 text-2xl py-2 px-4 rounded hover:bg-slate-300 hover:text-slate-800 transition-colors disabled:bg-slate-800 disabled:text-slate-300">Submit</button>
      </div>
    </div>
    <div class="mt-3 md:w-full w-[90%] flex justify-center">
      <div class="error-container" :style="{ visibility: state.formIsInvalid ? 'visible' : 'hidden' }">
        <div class="error-wrapper">
          <font-awesome-icon class="error-icon" :icon="['fas', 'circle-exclamation']" />
          <p class="error-message">Sorry, the
            code you entered
            is incorrect.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref, type Ref } from 'vue';
import code from '../config/code.config';
import { setValidatedWithExpiration } from '@/config/localStorage.config'
import router, { RouteNames } from '@/router';

const keyCode: Ref<string[]> = ref(["", "", "", ""]);
const state = reactive({ formIsInvalid: false });

const fullCode = computed(() => {
  return keyCode.value.join('');
});

const isCodeFull = computed(() => {
  return keyCode.value.find(value => value === "") === undefined;
});

const verifyCode = () => {
  const numCode = Number(fullCode.value);
  if (Number.isNaN(numCode)) {
    state.formIsInvalid = true;
  } else if (numCode !== code.code) {
    state.formIsInvalid = true;
  } else {
    setValidatedWithExpiration('validation', true, 900000);
    router.push(RouteNames.INVITE);
  }
};

const onCodeInput = (index: number) => {
  if (keyCode.value[index].length > 1) {
    keyCode.value[index] = keyCode.value[index][0];
  }
}

const onInputKeyDown = (index: number, event: KeyboardEvent) => {
  if (event.key >= '0' && event.key <= '9') {
    if (keyCode.value[index] === "") {
      keyCode.value[index] = event.key;
    } else {
      const nextEmptyIndex = keyCode.value.findIndex((digit, i) => i > index && digit === "");
      if (nextEmptyIndex !== -1) {
        keyCode.value[nextEmptyIndex] = event.key;
      }
    }
  }
};

const onKeypadClick = (num: number) => {
  const emptyInputIndex = keyCode.value.findIndex((digit) => digit === "");

  if (emptyInputIndex !== -1) {
    keyCode.value[emptyInputIndex] = num.toString();
  }
}

const deleteNumber = () => {
  state.formIsInvalid = false;
  for (let i = keyCode.value.length - 1; i >= 0; i--) {
    if (keyCode.value[i] !== "") {
      keyCode.value[i] = "";
      break; // Exit the loop after deleting the first non-empty instance
    }
  }
};
</script>

<style scoped>
.verification-code-square {
  width: 60px;
  /* Set the width to the desired size for a square input */
  height: 60px;
  /* Set the height to match the width for a square input */
  text-align: center;
  /* Center the text inside the input */
  border: 1px solid #ccc;
  /* Add a border for better visibility */
  font-size: 20px;
  /* Adjust the font size as needed */
  border-radius: 5px;
  /* Add a slight border radius for rounded corners */
  outline: none;
  /* Remove the default focus outline */
  padding: 0;
  /* Remove padding to make it a perfect square */
  margin: 5px;
}

.verification-input:hover,
.verification-input:focus {
  border: 1px solid #3498db;
  /* Change border color on hover or focus */
}
</style>
