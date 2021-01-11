<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions("auth", ["handleAuthStateChange"]),
    ...mapActions("users", ["setUsersLoaded"]),
  },
  mounted() {
    this.handleAuthStateChange();
  },
  created() {
    this.setUsersLoaded();
  },
};
</script>
