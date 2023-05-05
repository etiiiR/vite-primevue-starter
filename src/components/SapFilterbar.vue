<script setup lang="ts">
import { useProductStore } from '@/store/product'
const prods = useProductStore()
const models = ref([])
const visible = ref(false)
const settingsVisible = ref()
function valueHelp(field: string) {

}

function openSettingsDialog() {
  settingsVisible.value = !settingsVisible.value
}

function OpenValueHelp(col: any) {
  visible.value = true
}
// watch if the models change and update the v-models
watch(models, (val) => {

})
</script>

<template>
  <div>
    <ValueHelpDialog :settings="settingsVisible" @update:settings="settingsVisible = $event" />
    <div>
      <div class="grid grid-cols-4 gap-4 pb-2">
        <div v-for="col in prods.columns" :key="col.header" class="relative mt-2 rounded-md shadow-sm">
          <div class="fd-form-item">
            <label class="fd-form-label" for="aqwsde120">{{ col.field }}</label>
            <div class="fd-input-group">
              <input id="aqwsde120" class="fd-input fd-input-group__input" type="text" placeholder="Search" name="" value="">
              <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-button fd-button--transparent fd-input-group__button" @click="openSettingsDialog">
                  <i class="sap-icon--value-help" />
                </button>
              </span>
            </div>
          </div>

          <div class="pointer-events-none absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
            <i class="sap-icon--search cursor-pointer" @click="valueHelp(col.field)" />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div>
        <!-- Add your content here if you want something to the left of the middle button -->
        </div>
        <div class="flex">
          <button class="fd-button fd-button--emphasized mr-1">
            Go
          </button>
          <button class="fd-button fd-button--transparent">
            Adapt Filters
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
