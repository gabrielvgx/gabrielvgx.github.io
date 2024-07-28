<template>
  <!-- <v-row justify='center'> -->
    <v-dialog :model-value='true' :class="`modal ${modal?.className || ''} ${modal?.name || ''}`" @update:modelValue='changeValue'>
      <v-card class='px-5'>
        <v-row v-if="modal?.title">
          <v-col class='mb-3 px-0'>
            <v-label class='modal-title'>
              {{ modal?.title || '' }}
            </v-label>
          </v-col>
          <v-col class='pa-0'>
            <slot name='modal-header'></slot>
          </v-col>
          <v-col class='d-flex justify-end px-0'>
            <v-btn icon='mdi-window-close' color='primary' variant='text' density='comfortable'
              @click='closeModal'></v-btn>
          </v-col>
        </v-row>
        <div class='modal-body'>
          <slot name='content'></slot>
        </div>

        <!-- <Actions slotClass='d-flex justify-end modal-actions' :actions='actions' @action:click='onClickAction' /> -->

      </v-card>
    </v-dialog>
  <!-- </v-row> -->
</template>

<script lang='ts'>
// import { onMounted, onUnmounted } from 'vue';

export default {
  components: {
  },
  emits: ['close', 'confirm', 'cancel'],
  props: ['modal'],
  methods: {
    onClickOutside() {
      this.$emit('close');
    },
    changeValue() {
      return false;
    },
    closeModal() {
      this.$emit('close', { action: 'close' });
    },
  },
  setup() {
    // const listenEscKey = (ev: any) => {
    //   if (ev.key === 'Escape') {
    //     emit('close');
    //   }
    // };
    // onMounted(() => {
    //   window.addEventListener('keyup', listenEscKey);
    // });
    // onUnmounted(() => {
    //   window.removeEventListener('keyup', listenEscKey);
    // });
    return {
    };
  },
};
</script>

<style lang='scss'>
// .modal {
//   width: var(--default-modal-width) !important;
//   .v-overlay__content > .v-card {
//     margin-bottom: var(--modal-footer-height);
//   }
// }
// .modal-title {
//   font-size: 1.5rem !important;
//   color: var(--v-primary-base);
// }
</style>
