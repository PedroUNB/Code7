<template>
  <div class="row q-mb-none">
    <q-input
      @input="$emit('update:password', $event)"
      label="Password"
      class="col"
      ref="password"
      :value="password"
      :rules="[(val) => !!val || 'Password is required']"
      v-select-all
      outlined
      autofocus
      type="password"
    >
      <template v-slot:append>
        <q-icon
          v-if="password"
          @click="$emit('update:password', '')"
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
  props: ["password"],
  directives: {
    selectAll,
  },
};
</script>
