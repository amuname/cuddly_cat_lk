<script setup lang="ts">
import { useSearchQueryByCompany } from '@/stores/searchQuery';

const prop = defineProps<{
  company: {
    title: string,
    type: string,
    id: number
  }
}>()

const emit = defineEmits<{
  changeBrand: [brand: string]
}>()

const { changeBrand } = useSearchQueryByCompany()

function changeBrandByItem(arg: string) {
  changeBrand(arg)
}

</script>


<template>
  <button class="companyBtn" @click="changeBrandByItem(prop.company.title), emit('changeBrand', prop.company.title)">
    <span><b>{{ prop.company.title }}</b></span>
  </button>
  <!-- TODO: разобраться со стором, сделать сброс продуктов к '' -->
</template>



<style scoped>
img {
  width: 20%;
}

.companyBtn {
  all: unset;
  cursor: pointer;
  border: 1px solid #2d9bf0;
  border-radius: 15px;
  padding: 5px;
  display: flex;
  font-size: 16px;
}

.companyBtn:hover {
  background-color: #eaf5fd;
  transition: 1000ms;
}

.companyBtn:active {
  background-color: #a7daff;
  transition: 100ms;
}
</style>