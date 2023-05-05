<script setup lang="ts">
const visible = ref(false)
const saveAsVisible = ref(false)
const op = ref()
const selectedVariant = ref()
function toggle(event) {
  op.value.toggle(event)
}
function setvisible() {
  visible.value = !visible.value
}
const products = ref([{ name: 'Standard' }, { name: 'world' }, { name: '!' }, { name: 'gar nix' }, { name: 'df' },
  { name: 'df' }, { name: 'df' }, { name: 'df' }])
</script>

<template>
  <div>
    <div class="h-14" @click="toggle">
      <div class="float-left text-4xl font-bold text-blue-600" aria-haspopup="true" aria-controls="overlay_panel">
        Standard
      </div>
      <button class="ml-1 mt-1 inline-flex items-center rounded bg-light-blue-100 px-2 py-1 pt-1 font-bold text-gray-800 hover:bg-gray-400">
        <i class="sap-icon--slim-arrow-down fill-dark-200" />
      </button>
    </div>
    <OverlayPanel ref="op" append-to="body">
      <div>
        <p class="pb-3 text-lg">
          My Views
        </p>
      </div>
      <div class="pb-4">
        <Listbox v-model="selectedVariant" :options="products" option-label="name" class="w-full md:w-14rem" />
      </div>
      <div class="text-right">
        <Button label="Save As" raised @click="saveAsVisible = true" />
        <Button label="Manage" text @click="setvisible()" />
      </div>
    </OverlayPanel>
    <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
      <p class="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p class="mb-5">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
        ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
      <p class="mb-5">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
        non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
      </p>
      <p class="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p class="mb-5">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
        ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
      <p class="mb-5">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
        non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
      </p>
    </Dialog>
    <Dialog v-model:visible="saveAsVisible" modal header="Header" :style="{ width: '50vw' }">
      <div class="flex flex-col gap-3">
        <label for="username">View:</label>
        <InputText id="username" v-model="value" class="float-left" aria-describedby="username-help" />
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
  </div>
</template>
