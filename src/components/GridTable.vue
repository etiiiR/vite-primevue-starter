<script setup>
import { onMounted, ref } from 'vue'
import { useProductStore } from '@/store/product'
const prods = useProductStore()
const filters = ref()
const dt = ref()
const selectedColumns = ref(prods.columns)
const settingsVisible = ref()
onMounted(() => {
  prods.setProducts()
})

function exportCSV() {
  dt.value.exportCSV()
}

function onToggle(val) {
  selectedColumns.value = prods.columns.filter(col => val.includes(col))
}

function openSettingsDialog() {
  settingsVisible.value = !settingsVisible.value
}
</script>

<template>
  <div>
    <SettingsDialog :settings="settingsVisible" @update:settings="settingsVisible = $event" />
    <DataTable
      ref="dt"
      v-model:filters="filters"
      :virtual-scroller-options="{ itemSize: 20 }"
      :total-records="prods.totalCount"
      lazy
      :rows-per-page-options="[20, 50, 100, 200, 500, 1000, 2000]" scroll-height="80vh" column-resize-mode="fit"
      :value="prods.products"
      :rows="20"
      data-key="id" filter-display="menu" :loading="prods.loading" show-gridlines
      resizable-columns scrollable
      paginator table-style="min-width: 50rem" @page="prods.onPage($event)" @sort="onSort($event)" @filter="onFilter($event)"
    >
      <template #header>
        <div class="justify-content-between flex">
          <div id="header_left">
            10 / {{ prods.totalCount }}
          </div>
          <div id="header_right" class="ml-auto">
            <button class="fd-button fd-button--transparent mr-4" @click="openSettingsDialog">
              <span class="sap-icon--action-settings sap-icon--color-information" />
            </button>
            <button class="fd-button fd-button--transparent" @click="exportCSV($event)">
              <span class="sap-icon--color-information sap-icon--excel-attachment" />
            </button>
          </div>
        </div>
      </template>
      <Column v-for="col of selectedColumns" :key="col.field" :style="col.style" :data-type="col.type" :field="col.field" :header="col.header" />
    </DataTable>
  </div>
</template>
