<template>
  <v-container fluid class="pa-0 profile-dm">
    <v-container class="pa-0 d-flex profile-header align-center">
      <v-btn icon="mdi-arrow-left" variant="text" color="#6e6f74"
        @click="$emit('back')"
      ></v-btn>
      <v-container class="pa-0 d-flex align-center" style="gap: 0.5rem">
        <img width="36" height="36" :src="$props.message.image">
        <span class="nickname">{{ $props.message.nickname }}</span>
      </v-container>
    </v-container>
    <v-divider></v-divider>
    <v-container class='d-flex justify-end flex-column profile-msg' style="height: 90%;">
      <div class="d-flex" style="gap: 0.5rem">
        <img width="36" height="36" :src="$props.message.image">
        <div class="d-flex flex-column w-100">
          <div class="d-flex" style="gap: 0.5rem">
            <span class="nickname">{{ $props.message.nickname }}</span>
            <span class="timestamp">{{ $props.message.timestamp }}</span>
          </div>
          <span class="message" v-html="$props.message.text"></span>
        </div>
      </div>
    </v-container>
  </v-container>
</template>
<script lang="ts">
export default {
  props: ['message'],
  emits: ['back'],
  setup() {
    return {

    }
  }
}
/**
 * #2B2D31 -- cinza-escuro (background)
 * #404249 -- cinza-claro (botao em foco)
 * #F3EAE2 -- white (texto de botao selecionado)
 * #949BA4 -- cinza (botao não selecionado)
 * #5865F2 -- discord blue
 */
</script>
<style lang="scss">
.profile-dm {
  height: 90vh;
  background-color: #2B2D31;
}
.profile-header img, .profile-msg img:not(.msg) {
  border-radius: 50%;
}
.timestamp {
  color: #6e6f74;
  font-size: 0.75rem;
  font-weight: bold;
  align-content: center;
}
.message {
  color: white;
  white-space: pre-line;
}
img.msg, audio {
  width: 100%;
}
</style>