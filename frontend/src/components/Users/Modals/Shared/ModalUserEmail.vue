<template>
  <div class="row q-mb-sm">
    <q-input
      @input="$emit('update:cost', $event)"
      label="Cost"
      class="col"
      ref="cost"
      :value="cost"
      v-select-all
      outlined
      :rules="[(val) => !!val || 'Client is required']"
      autofocus
    >
      <template v-slot:append>
        <q-icon
          v-if="cost"
          @click="$emit('update:cost', '')"
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
  props: ["cost"],
  directives: {
    selectAll,
  },
  methods: {},
};
</script>
