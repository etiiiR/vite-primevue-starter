<script setup lang="ts">
import GridTable from '../components/Gridtable.vue'

const isCollapsed = ref(false)
function toggle() {
  isCollapsed.value = !isCollapsed.value
}
</script>

<template>
  <div>
    <section class="fd-dynamic-page fd-dynamic-page--xl" aria-label="Dynamic Page Desktop Example">
      <header class="fd-dynamic-page__header">
        <div class="fd-dynamic-page__title-area" tabindex="0">
          <div class="fd-dynamic-page__main-container">
            <div class="fd-dynamic-page__breadcrumb-title-container">
              <nav aria-label="Breadcrumbs">
                <VariantManagement />
              </nav>
              <div class="fd-dynamic-page__title-container" />
            </div>
          </div>
          <div class="fd-dynamic-page__subtitle" />
        </div>
        <div class="fd-dynamic-page__collapsible-header-container">
          <div v-if="isCollapsed" id="fddplhvc7" class="fd-dynamic-page__collapsible-header" role="region" aria-label="Dynamic Page Desktop Header">
            <sap-filterbar />
          </div>
          <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
            <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient" />
            <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
              <button
                class="fd-button fd-button--compact fd-dynamic-page__collapse-button"
                aria-label="See More"
                aria-expanded="true"
                aria-haspopup="true"
                aria-controls="fddplhvc6"
                @click="toggle"
              >
                <i class="sap-icon--slim-arrow-up" />
              </button>
              <button
                class="fd-button fd-button--compact fd-dynamic-page__pin-button"
                aria-label="Pin this"
              >
                <i class="sap-icon--pushpin-off" />
              </button>
            </div>
            <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient" />
          </div>
        </div>
        <div class="fd-dynamic-page__tabs--overflow">
          <ul class="fd-tabs fd-tabs--l fd-dynamic-page__tabs fd-dynamic-page__tabs--add-shadow" role="tablist" />
        </div>
      </header>
      <div class="fd-dynamic-page__content">
        <div id="AiWfz165" class="fd-tabs__panel" aria-expanded="true" role="tabpanel">
          <GridTable />
        </div>
      </div>
    </section>
    <br><br>
  </div>
</template>
