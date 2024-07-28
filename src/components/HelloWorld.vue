
<template>
  <h1 class="page-title">Feliz Aniversário !!!</h1>
  <div class="fullscreen" id="container">
    <canvas id="birthday"></canvas>
    <div class="book">
      <Book />
    </div>
    <v-btn color="#5865F2" class="discord-btn" size="large" @click="startDiscord">
      <img width="36" :src="DiscordIcon" />
      <span>Abrir Discord</span>
    </v-btn>
    <Modal v-if="showLoaderDiscord && !showDiscord" :modal="{ name: 'discord-modal-loader'}">
      <template #content>
        <Loader />
      </template>
    </Modal>
    <Modal v-if="showDiscord" :modal="{ name: 'discord-modal'}">
      <template #content>
        <DirectMessage @close="() => showDiscord = false" />
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import Birthday from '../controllers/Birthday';
import Book from './Book.vue';
import Modal from './Modal.vue';
import Loader from './discord/Loader.vue';
import DirectMessage from './discord/DirectMessage.vue';
import DiscordIcon from '../assets/discord.png';
import { ref } from 'vue';

export default {
  components: {
    Book,
    Loader,
    Modal,
    DirectMessage,
  },
  methods: {
    startDiscord() {
      this.showLoaderDiscord = true;
      setTimeout(() => {
        this.showLoaderDiscord = false;
        this.showDiscord = true;
      }, 3000);
    }
  },
  setup() {
    const showDiscord = ref(false);
    const showLoaderDiscord = ref(false);
    const start = () => {
      if (!Birthday.getCanvas()) {
        return setTimeout(() => {
          start();
        }, 1000);
      }
      Birthday.start();
      Birthday.resize();
    }
    onMounted(() => {
      start();
    });
    // setTimeout(() => {
    //   showDiscord.value = true;
    // }, 3000);
    window.onload = function() {
      const container = document.getElementById('container');
      if (container) {
        // container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
        container.scrollLeft = container.clientWidth / 2;
      }
    };
    return {
      showDiscord,
      showLoaderDiscord,
      DiscordIcon,
    }
  }
}
</script>

<style>
canvas{display:block}
.discord-btn {
  position: absolute;
  top: 10%;
  left: 5%;
  img {
    margin-right: 1rem;
  }
}
.book {
  position: absolute;
  left: 40%;
}
.page-title {
  position: absolute;
  /* top: 20%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  color: #fff;
  width: 100%;
  font-family: "Source Sans Pro";
  font-size: 2rem;
  font-weight: 900;
  -webkit-user-select: none;
  text-align: center;
  background-color: #242424;
  user-select: none;

  /* ----- LUIZ -------
  background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
  -webkit-background-clip: text;
  color: transparent; */
}
.fullscreen {
  width: 100%;
  height: 100%;
}
.discord-modal-loader {
  .v-overlay__content {
    width: auto;
    .v-card {
      width: auto;
      padding: 0 !important;
    }
  }
}
</style>
