<template>
  <div class="row q-mb-none">
    <q-input
      @input="$emit('update:client', $event)"
      label="Client"
      class="col"
      ref="client"
      :value="client"
      :rules="[(val) => !!val || 'Client is required']"
      v-select-all
      outlined
      autofocus
    >
      <template v-slot:append>
        <q-icon
          v-if="client"
          @click="$emit('update:client', '')"
          client="close"
          class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
import selectAll from "src/directives/select-all.js";
export default {
  props: ["client"],
  directives: {
    selectAll,
  },
};
</script>
