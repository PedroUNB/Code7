<template>
  <div class="row q-mb-none">
    <q-input
      @input="$emit('update:description', $event)"
      label="Description"
      class="col"
      ref="description"
      :value="description"
      v-select-all
      outlined
      autofocus
      :rules="[(val) => !!val || 'Client is required']"
    >
      <template v-slot:append>
        <q-icon
          v-if="description"
          @click="$emit('update:description', '')"
          name="close"
          class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
import selectAll from "src/directives/select-all.js";
export default {
  props: ["description"],
  directives: {
    selectAll,
  },
  methods: {},
};
</script>
