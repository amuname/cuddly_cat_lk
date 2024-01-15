<script setup lang="ts">
import { ref } from 'vue';
import type { SortType } from '@/types/SortType.type'


const DEFAULT_SORT = 'title'

const sortSelected = ref<SortType>(DEFAULT_SORT)

const emit = defineEmits<{
  changeSort: [type: SortType]
}>()
</script>



<template>
  <select v-model="sortSelected" @change="emit('changeSort', sortSelected)">
    <option value="title">По названию</option>
    <option value="sortMin">По цене (min)</option>
    <option value="sortMax">По цене (max)</option>
  </select>
</template>



<style lang="scss" scoped></style>