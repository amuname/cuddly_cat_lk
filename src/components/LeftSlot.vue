<template>
  <div class="emptyOne">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.emptyOne {
  margin-top: 10vh;
  background-color: #f2f2f2;
  width: 100%;
  height: 43.5vh;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>