<template>
  <div class="bg-slate-100 h-screen w-screen flex items-center justify-center background-image">
    <Transition appear name="open" mode="out-in">
      <div class="envelope" v-if="!state.envelopeOpened && !state.acceptClicked && !state.declineClicked">
        <img class="text-slate-100" src="/message-closed-envelope.png" alt="Closed invitation" />
        <button
          class="open-envelope bg-slate-200 shadow-lg text-slate-900 hover:bg-slate-900 hover:text-slate-100 transition-colors border-2 border-slate-900"
          @click="openEnvelope">Open</button>
      </div>
      <div v-else-if="state.acceptClicked" class="w-4/5 md:w-2/5 lg:w-1/3 -translate-y-20">
        <ConfirmationScreen />
      </div>
      <div v-else-if="state.declineClicked" class="decline-invitation">
        <h1 class="text-center">You weren't supposed to click that :(</h1>
      </div>
    </Transition>
  </div>

  <InvitationModal :is-open="state.envelopeOpened">
    <template #modal-header>
      <h2 class="text-3xl">You're invited</h2>
    </template>
    <template #default>
      <InvitationTemplate />
    </template>
    <template #modal-footer>
      <button type="button" class="accept-btn" @click="acceptInvitation">
        <font-awesome-icon :icon="['fas', 'check']" />
        Accept
      </button>
      <button type="button" class="decline-btn" @click="declineInvitation">
        <font-awesome-icon :icon="['fas', 'xmark']" />
        Decline
      </button>
    </template>
  </InvitationModal>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import InvitationModal from './InvitationModal.vue';
import InvitationTemplate from './InvitationTemplate.vue';
import ConfirmationScreen from './ConfirmationScreen.vue'

const state = reactive({ envelopeOpened: false, acceptClicked: false, declineClicked: false });

const openEnvelope = () => {
  state.envelopeOpened = true;
}

const acceptInvitation = () => {
  state.envelopeOpened = false;
  state.acceptClicked = true;
};

const declineInvitation = () => {
  state.envelopeOpened = false;
  state.declineClicked = true;
};
</script>

<style scoped>
.open-enter-active,
.open-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.open-enter-from,
.open-leave-to {
  opacity: 0;
}

.envelope {
  width: 80%;
  height: auto;
  margin: 0 auto;
  transform: translateY(-50px);
}

@media (min-width: 576px) {
  .envelope {
    width: 50%;
  }
}

@media (min-width: 768px) {
  .envelope {
    width: 30%;
  }
}

.open-envelope {
  position: absolute;
  font-size: 24px;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px 30px;
  border-radius: 50%;
  font-weight: 700;
}

.background-image {
  background: url('/christmas-bg-image.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>