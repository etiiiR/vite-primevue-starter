<script setup lang="ts">
const visible = ref(false)
</script>

<template>
  <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }" />
  <Dialog
    v-model:visible="saveAsVisible"
    modal
    header="Header"
    :style="{ width: '50vw' }"
  >
    <div class="flex flex-col gap-3">
      <label for="username">View:</label>
      <InputText
        id="username"
        v-model="value"
        class="float-left"
        aria-describedby="username-help"
      />
      <div class="flex flex-col">
        <div class="align-items-center flex">
          <Checkbox v-model="pizza" input-id="ingredient1" name="pizza" value="True" />
          <label for="ingredient1" class="ml-2"> Set as Default</label>
        </div>
      </div>
    </div>
    <div class="text-right">
      <Button label="Save" raised @click="saveAsVisible = true" />
      <Button label="Cancel" text @click="setvisible()" />
    </div>
  </Dialog>
</template>
