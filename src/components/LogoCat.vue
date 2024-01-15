<template>
  <router-link to="/" class="logoIcon">
    <img class="logoIcon-icon" src="images/logo.png" alt="logo">
    <img class="logoIcon-shadow" src="images/logoSh.png" alt="logoSh">
    <span>Cuddly <br> Cat</span>
  </router-link>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.logoIcon {
  all: unset;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  height: 9vh;
  margin-bottom: 6vh;


  span {
    color: #2d9bf0;
    font-size: 24px;
    margin-left: 3vw;
  }

  &-icon {
    width: 4vw;
    z-index: 2;
    position: absolute;
    left: 0;
  }

  &-shadow {
    width: 4vw;
    position: absolute;
    z-index: 1;
    left: -0.3vw;
  }
}
</style>