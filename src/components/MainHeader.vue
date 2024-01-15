<template>
  <header class="mainHeader">
    <slot></slot>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.mainHeader {
  height: 9vh;
  background-color: tomato;
  margin-bottom: 3vh;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>