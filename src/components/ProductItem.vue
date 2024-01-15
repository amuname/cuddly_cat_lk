<script setup lang="ts">
import { ref } from 'vue';


const props = defineProps<{
  prod: {
    id: number,
    title: string,
    description: string,
    price: number,
    brand: string,
    type: string
  }
}>()

const InputValue = ref(0)

const emit = defineEmits<{
  change: [value: number, title: string, type: string, company: string]
}>()

</script>

<template>
  <div class="product">
    <div class="product__param">Название: {{ props.prod.title }} от {{ props.prod.brand }}</div>
    <div class="product__param">Описание: {{ props.prod.description }}</div>
    <div class="product__param-withCheckbox">Цена: {{ props.prod.price }} $
      <input v-model="InputValue" type="number" min="0" value="0"
        @change="emit('change', InputValue, props.prod.title, props.prod.type, props.prod.brand)">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  position: relative;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  border: 1px solid #2d9bf0;
  border-radius: 15px;
  padding: 5px;
  gap: 1px;
}

.product__param {
  font-size: 12px;
}

.product__param-withCheckbox {
  font-size: 12px;
  display: flex;
  justify-content: space-between;

  input {
    all: unset;
    padding: 1px;
    position: absolute;
    right: 5px;
    bottom: 3px;
    font-size: 12px;
    width: 30px;
    height: 15px;
    border-radius: 5px;
    background-color: #eaf5fd;
  }
}
</style>