import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchQueryByCompany = defineStore('searchByBrand', () => {
  const searchByBrand1 = ref('')
  function changeBrand (arg: string) {
    searchByBrand1.value = arg
  }
  return {searchByBrand1, changeBrand}
})


// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
