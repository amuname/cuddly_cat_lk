<script setup lang="ts">
import { ref } from 'vue';
import CompanyItem from './CompanyItem.vue';
import ProductListVue from './ProductList.vue';

const companies = [
  {
    title: 'Apple',
    type: "3123123",
    id: 123412341,
  },
  {
    title: 'OPPO',
    type: "645",
    id: 14234
  },
  {
    title: 'Microsoft',
    type: "9867",
    id: 134
  },
  {
    title: 'Microsoft',
    type: "9867",
    id: 134
  },
  {
    title: 'Microsoft',
    type: "9867",
    id: 134
  },
  {
    title: 'Samsung',
    type: "9867",
    id: 134
  },
]
companies.unshift({
  title: '',
  type: '0',
  id: 0
})

const mama = ref('')

function obra(brand: string) {
  mama.value = brand
}

</script>


<template>
  <div class="companyContainer">
    <CompanyItem v-for="company in companies" :company="company" :key="company.id" @change-brand="obra">
    </CompanyItem>
  </div>
  <ProductListVue :mama="mama"></ProductListVue>
</template>



<style scoped>
.companyContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  margin-bottom: 5px;
}
</style>