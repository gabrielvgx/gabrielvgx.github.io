<!--
<template></template>
<script lang="ts"></script>
<style lang="scss"></style>
 -->

<template>
  <div class="loader-container">
    <img class='discord-loader' :src="Discord"></img>
  </div>
</template>
<script lang="ts">
import Discord from '../../assets/discord.gif';
export default {
  setup() {
    return {
      Discord,
    }
  }
}
</script>
<style lang="scss">
.discord-loader {
  float: left;
  // width: 294px;
  // height: 310px;
}
.loader-container {
  // position: absolute;
  width: 100%;
  height: 100%;
}
</style>