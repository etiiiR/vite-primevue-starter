<script setup lang="ts">
import { useProductStore } from '@/store/product'
const prods = useProductStore()
const models = ref([])
function valueHelp(field: string) {

}
// watch if the models change and update the v-models
watch(models, (val) => {

})
</script>

<template>
  <div>
    <VariantManagement class="mb-2" />
    <div class="grid grid-cols-4 gap-4 pb-2">
      <div v-for="col in prods.columns" :key="col.header" class="relative mt-2 rounded-md shadow-sm">
        <input id="account-number" type="text" name="account-number" class="block w-full border-0 rounded-md py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-7 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset" placeholder="Input">
        <div class="pointer-events-none absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
          <i class="sap-icon--search cursor-pointer" @click="valueHelp(col.field)" />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div>
        <!-- Add your content here if you want something to the left of the middle button -->
      </div>
      <div class="relative">
        <Button class="absolute left-1/2 top-[-1/4] translate-x-[-50%]" label="Middle Button" raised />
      </div>
      <div class="flex">
        <Button class="mr-2" label="Go" raised />
        <Button label="Adapt Filters" text plain />
      </div>
    </div>
  </div>
</template>
