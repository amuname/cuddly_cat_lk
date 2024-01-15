<template>
  <div class="avatar">
    <img src="/images/altLogo.png" alt="altLogo">
    <div class="profile">
      <div class="profile__name">
        <span>Bob Hendrikson</span>
      </div>
      <div class="profile__money">
        <span>1290 rub</span>
        <div id="dropdown-arrow" class="dropdown-arrow-rotate"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9vh;
  margin-bottom: 1vh;

  img {
    width: 4vw;
    margin-right: 1vw;
  }

  .profile {
    width: 20vw;
    height: 1.5vw;
    border: 2px solid #2d9bf0;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    &__name {
      display: flex;
      font-size: 16px;
    }

    &__money {
      display: flex;
      align-items: center;
      color: #2d9bf0;
      gap: 10px;

      #dropdown-arrow {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0 8px 12px;
        border-color: transparent transparent #2d9bf0 transparent;
        transform: rotate(180deg);

        .dropdown-arrow-rotate {
          width: 0px;
          height: 0px;
          border-style: solid;
          border-width: 0 8px 12px;
          border-color: transparent transparent #2d9bf0 transparent;
          transform: rotate(0deg);
          transition: 500ms;
        }
      }
    }
  }
}
</style>