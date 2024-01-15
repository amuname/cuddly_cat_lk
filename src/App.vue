<script setup lang="ts">
import LogoCat from '@/components/LogoCat.vue'
import NavMenu from '@/components/NavMenu.vue'
import LeftSlot from '@/components/LeftSlot.vue'
import SupBtn from '@/components/SupBtn.vue'
import MainHeader from '@/components/MainHeader.vue'
import MainContent from '@/components/MainContent.vue'
import MainFooter from '@/components/MainFooter.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import RightSlot from '@/components/RightSlot.vue'
import CompanyList from './components/CompanyList.vue'

</script>

<template>
  <div class="globalContainer">
    <div class="leftContainer">
      <LogoCat></LogoCat>
      <NavMenu></NavMenu>
      <LeftSlot></LeftSlot>
      <div class="supportBtnContainer">
        <SupBtn></SupBtn>
      </div>
    </div>
    <div class="mainContainer">
      <MainHeader>header</MainHeader>
      <MainContent>
        <CompanyList>
          <!-- <ProductList></ProductList> -->
        </CompanyList>

      </MainContent>
      <MainFooter></MainFooter>
    </div>
    <div class="rightContainer">
      <UserAvatar></UserAvatar>
      <RightSlot>
      </RightSlot>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  padding: 3vh;
}

.globalContainer {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
}

.leftContainer {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 15%;
}

.supportBtnContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 2vh;
  border-radius: 15px;
  padding: 1vh 1vh 0 1vh;
  height: 7.5vh;
}

.mainContainer {
  height: 100%;
  width: 60%;
  padding: 0 1.8vw 0 1.8vw;

}

.rightContainer {
  width: 25%;
  height: 100%;
}

::-webkit-scrollbar {
  background-color: #eaf5fd;
  border-radius: 15px;
  box-shadow:
    0px 0px 4px 0px rgba(0, 0, 0, .2),
    inset -2px -2px 3px 0px rgba(0, 0, 0, .4),
    inset 2px 2px 3px 0px rgba(255, 255, 255, .4);
}

// ::-webkit-scrollbar-button {
//   background-color: #2d9bf0;
//   border-radius: 15px;
// }
::-webkit-scrollbar-thumb {
  background-color: #5db7fc;
  border-radius: 50px;
  box-shadow:
    0px 0px 4px 0px rgba(0, 0, 0, .2),
    inset -4px -4px 5px 0px rgba(0, 0, 0, .4),
    inset 4px 4px 5px 0px rgba(255, 255, 255, .4);
}
</style>