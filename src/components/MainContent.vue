<template>
  <main class="mainContent">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.mainContent {
  padding: 1vh;
  border-radius: 15px;
  height: 66vh;
  overflow: auto;
  box-shadow:
    0px 0px 4px 0px rgba(0, 0, 0, .2),
    inset 0px 0px 2px 0px rgba(0, 0, 0, .4),
    inset 0px 0px 2px 0px rgba(255, 255, 255, .4);
}
</style>