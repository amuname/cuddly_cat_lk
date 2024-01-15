<template>
  <nav class="navMenu">
    <router-link class="navMenu__el" to="">
      <img src="/images/usluga.png" alt="usluga">
      <span>Приобрести услугу</span>
    </router-link>
    <router-link class="navMenu__el" to="/">
      <img src="/images/pig.png" alt="pig">
      <span>Мои бонусы</span>
    </router-link>
    <router-link class="navMenu__el" to="/">
      <img src="/images/shop.png" alt="shop">
      <span>Потратить бонусы</span>
    </router-link>
    <router-link class="navMenu__el" to="/">
      <img src="/images/settings.png" alt="settings">
      <span>Настройки</span>
    </router-link>
  </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.navMenu {
  display: flex;
  flex-direction: column;
  height: 15vh;

  &__el {
    all: unset;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    font-size: 15px;
    // padding: 0.25vh;

    span {
      padding: 1vh;
      border-radius: 25px;
      border: 1px solid transparent;
    }

    span:hover {
      cursor: pointer;
      padding: 1vh;
      background-color: #eaf5fd;
      transition: 1000ms;
    }

    span:active {
      cursor: pointer;
      padding: 1vh;
      background-color: #a7daff;
      transition: 100ms;
    }

    img {
      width: 3vh;
    }
  }
}
</style>