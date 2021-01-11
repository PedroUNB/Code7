<template>
  <form @submit.prevent="submit">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        Login with email or cpf.
        <div class="text-weight-light">Using cpf enter only the numbers</div>
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        outlined
        v-model="user.user"
        label="Name"
        stack-label
        class="col"
        :rules="[(val) => val.length > 0 || 'Please enter a email to login.']"
        lazy-rules
        ref="user"
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        outlined
        v-model="user.password"
        :rules="[
          (val) => val.length >= 6 || 'Please enter at least 6 characters.',
        ]"
        label="Password"
        stack-label
        class="col"
        type="password"
        lazy-rules
        ref="password"
      />
    </div>
    <div class="row">
      <q-space />
      <q-btn color="primary" label="Login" type="submit" />
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    submit() {
      this.$refs.user.validate();
      this.$refs.password.validate();

      if (!this.$refs.user.hasError && !this.$refs.password.hasError) {
        this.loginUser(this.user);
      }
    },
  },
};
</script>

<style>
</style>
