<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div class="q-mb-lg">
      <q-list separator bordered>
        <User v-for="(user, key) in users" :key="key" :user="user" :id="key" />
      </q-list>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
import User from "components/Users/Modals/User.vue";

export default {
  props: ["users"],

  computed: {
    ...mapState("settings", ["settings"]),
  },

  components: {
    User,
  },
};
</script>

<style>
</style>
