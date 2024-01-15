<script setup lang="ts">
import type { ProductType } from '@/types/ProductType.type';
import { onMounted, ref } from 'vue';

const DEFAULT_TYPE = 'Product'
const isActive = ref(false)

function activeChange() {
  isActive.value = !isActive.value
}


const selected = ref<ProductType>(DEFAULT_TYPE)

const emit = defineEmits<{
  changeProductType: [type: ProductType]
}>()

onMounted(() => {
  emit('changeProductType', DEFAULT_TYPE)
})
</script>


<template>
  <div class="selectContainer">
    <select @click="activeChange" v-model="selected" class="select" name="123" id="sel"
      @change="emit('changeProductType', selected)">
      <option class="option" disabled value="">Выберите из списка</option>
      <option value="Product">Приобрести</option>
      <option value="Bonus">Потратить</option>
    </select>
    <div class="arrow" :class="{ _A: isActive }"></div>
  </div>
</template>



<style lang="scss" scoped>
.selectContainer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}


.select {
  all: unset;
  position: relative;
  padding: 4px;
  background-color: #eaf5fd;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: 300ms;
}

.select:focus {
  border: 1px solid #2d9bf0;
  border-radius: 15px;
  padding: 4px;
}

.option {
  color: #2d9bf0;
  border-radius: 5px;
  border: none;
}

.arrow {
  position: absolute;
  top: 10px;
  right: 6px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 8px 10px;
  border-color: transparent transparent #2d9bf0 transparent;
  transform: rotate(180deg);
}
</style>