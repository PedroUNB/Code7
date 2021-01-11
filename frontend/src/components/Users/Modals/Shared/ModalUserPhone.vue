<template>
  <div class="row q-mb-sm">
    <q-input
      @input="$emit('update:phone', $event)"
      label="Phone"
      class="col"
      ref="phone"
      :value="phone"
      v-select-all
      outlined
      autofocus
      mask="(##) ####-####"
      hint="Mask: (##) ####-####"
    >
      <template v-slot:append>
        <q-icon
          v-if="phone"
          @click="$emit('update:phone', '')"
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
  props: ["phone"],
  directives: {
    selectAll,
  },
};
</script>
