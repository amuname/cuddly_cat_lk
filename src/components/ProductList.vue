<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import ProductItem from '@/components/ProductItem.vue';
import { getProducts } from '@/api/api'
import MySelect from '@/components/MySelect.vue'
import type { ProductType } from '@/types/ProductType.type';
import type { ProductState } from '@/types/ProductState.type';
import SortSelect from './SortSelect.vue';
// import { useSearchQueryByCompany } from '@/stores/searchQuery';

const productsProducts = ref({
  limit: 10,
  offset: 0,
  list: []
})
const bonusProducts = ref({
  limit: 10,
  offset: 0,
  list: []
})


const listProductType = ref<ProductType>('Product')

const listProducts = computed(() => listProductType.value === 'Product' ? productsProducts.value : bonusProducts.value)

const searchQuery: { value: string } = ref('')

const searchQueryByCompany: { value: string } = ref('')




const changeType = async (type: ProductType) => {
  // products.concat(...res)
  listProductType.value = type
  listProducts.value.list = listProducts.value.list.concat(await getProducts(listProducts.value.limit, listProducts.value.offset, type))
  listProducts.value.offset += listProducts.value.limit
  console.log(listProducts.value.list)
}

const prop = defineProps<{
  mama: string
}>()

watchEffect(() => searchQueryByCompany.value = prop.mama)

const searchedListProductsByTitleAndCompany = computed(() => {
  let temp = [...listProducts.value.list].filter((prod: ProductState) => prod.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  return temp.filter((prod: ProductState) => prod.brand.toLowerCase().includes(searchQueryByCompany.value.toLowerCase()))
})




// onMounted(async () => {
//   products.value = await getProducts()
// })

const selectedProducts: { value: ProductState[]; } = ref([])

const changeProduct = (value: number, title: string, type: string, brand: string) => {
  const selectedProduct: ProductState = { value, title, type, brand }
  selectedProducts.value.push(selectedProduct)
  console.log(selectedProduct, selectedProducts.value)
}



</script>

<template>
  <transition-group name=list>
    <div class="select">
      <SortSelect @change-sort="console.log"></SortSelect>
      <MySelect @change-product-type="changeType"></MySelect>
      <input class="productListInput" v-model="searchQuery" type="text">
    </div>
    <ProductItem v-for="prod in searchedListProductsByTitleAndCompany" :prod="prod" :key="prod" @change="changeProduct">
    </ProductItem>
  </transition-group>
</template>

<style scoped lang="scss">
.select {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
}


.productListInput {
  all: unset;
  background-color: #eaf5fd;
  border: 1px solid transparent;
  border-radius: 5px;
  margin-left: 5px;
  padding-left: 10px;
}

.productListInput:focus {
  border: 1px solid #2d9bf0;
  transition: 300ms;
  border-radius: 15px;
  margin-left: 5px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>