<script setup>
import { useProductStore } from '@/store/product'
const props = defineProps({
  settings: Boolean,
})
const emit = defineEmits(['update:settings'])
const metaKey = ref(true)
const selectedProduct = ref()
const display = ref(false)
const Tab = ref('columns')
const prods = useProductStore()

const tabs = ref([{ title: 'columns' }, { title: 'sort' }])

watch(() => props.settings, (val) => {
  display.value = val
})

function Tabactive(name) {
  Tab.value = name
}

function onHide() {
  display.value = false
  emit('update:settings', false)
}

function onRowReorder(event) {
  prods.columns = event.value
  toast.add({ severity: 'success', summary: 'Rows Reordered', life: 3000 })
}
</script>

<template>
  <div class="bg-gray-600">
    <Dialog v-model:visible="display" header="Select Columns" :style="{ width: '75vw' }" maximizable modal :content-style="{ height: '70vh' }" @hide="onHide">
      <template #header>
        <div class="">
          <p class="pb-3 text-2xl">
            View Settings
          </p>
          <TabView>
            <TabPanel header="Search and Select">
              <span class="p-input-icon-left p-0">
                <i class="pi pi-search" />
                <InputText v-model="value1" placeholder="Search" />
              </span>
            </TabPanel>
            <TabPanel header="Define Conditions">
              <Conditions />
            </TabPanel>
          </TabView>
        </div>
      </template>
      <template #footer>
        <div class="flex items-center justify-between bg-white">
          <div>
            <!-- Add your content here if you want something to the left of the middle button -->
          </div>
          <div class="flex">
            <Button class="mr-2" label="OK" raised />
            <Button label="Cancel" text plain />
          </div>
        </div>
      </template>
      <DataTable v-if="Tab === 'sfsf'" v-model:selection="selectedProduct" scrollable scroll-height="flex" :value="prods.columns" data-key="field" table-style="min-width: 20rem" @rowReorder="onRowReorder">
        <Column selection-mode="multiple" header-style="width: 3rem" />
        <Column field="field" :reorderable-column="false" header="Columns" />
      </DataTable>
    </Dialog>
  </div>
</template>

<style>
.p-dialog-header {
  padding-bottom: 0px !important;
}

.p-tabview {
  padding-bottom: 0px !important;
}
</style>
