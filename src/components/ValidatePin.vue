<template>
  <div class="validate-form">
    <FormKit type="form" form-class="form-width" submit-label="Submit" :submit-attrs="{
      inputClass: 'text-base border border-slate-200 p-2 rounded font-semibold transition hover:bg-slate-700 hover:text-white',
      wrapperClass: 'mt-4',
    }" :messages-class="{
  hidden: true,
}" @submit="validatePin">
      <FormKit id="pin" name="pin" type="text" label-class="$reset form-label-lg" input-class="$reset form-input"
        label="Enter Code" messages-class="error-wrapper" message-class="error-message"
        validation="required|number|length:4,4" :validation-messages="{
          required: 'Code is required.',
          number: 'Code must be a number.',
          length: 'Code must be 4 digits.'
        }" @focus="clearError" @input="clearError" />
    </FormKit>
    <div class="error-container">
      <div class="error-wrapper" v-if="state.formIsInvalid">
        <font-awesome-icon class="error-icon" :icon="['fas', 'circle-exclamation']" />
        <p class="error-message">Sorry, the
          code you entered
          is incorrect. Please try again!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormKit } from '@formkit/vue';
import code from "@/config/code.config";
import { setValidatedWithExpiration } from '@/config/localStorage.config'
import router, { RouteNames } from '@/router';
import { reactive } from 'vue';

const state = reactive({ formIsInvalid: false });

const validatePin = (pin: any) => {
  if (Number(pin.pin) === code.code) {
    setValidatedWithExpiration('validation', true, 900000);
    router.push(RouteNames.INVITE);
  } else {
    state.formIsInvalid = true;
  }
};

const clearError = () => {
  state.formIsInvalid = false;
};
</script>

<style scoped>
.form-width {
  width: 100%;
}
</style>