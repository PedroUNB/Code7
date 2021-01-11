<template>
  <q-page padding>
    <q-card class="auth-tabs">
      <q-tabs
        v-model="tab"
        dense
        align="justify"
        narrow-indicator
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
      >
        <q-tab name="login" label="Login"></q-tab>
        <q-tab name="register" label="Register"></q-tab>
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <Login />
        </q-tab-panel>
        <q-tab-panel name="register">
          <Register />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import Register from "components/Auth/Register";
import Login from "components/Auth/Login.vue";

export default {
  data() {
    return {
      tab: "login",
    };
  },
  components: { Register, Login },
};
</script>

<style>
.auth-tabs {
  max-width: 500px;
  margin: 0 auto;
}
</style>
