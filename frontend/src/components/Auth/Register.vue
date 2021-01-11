<template>
  <form @submit.prevent="submit">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        Register to access the T2 app test.
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        outlined
        v-model="user.name"
        label="Name"
        stack-label
        class="col"
        :rules="[
          (val) => val.length >= 2 || 'Please enter at least 2 characters.',
        ]"
        lazy-rules
        ref="name"
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        outlined
        v-model="user.email"
        label="E-mail"
        stack-label
        class="col"
        :rules="[
          (val) =>
            isValidEmailAddress(val) || 'Please enter a valid email address.',
        ]"
        lazy-rules
        ref="email"
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
    <div class="row q-mb-md">
      <q-input
        outlined
        v-model="user.confirmPassword"
        label="Password Confirm"
        stack-label
        class="col"
        type="password"
        :rules="[
          (val) => val.length >= 6 || 'Please enter at least 6 characters.',
          (val) => val === user.password || 'Password do not match!',
        ]"
        lazy-rules
        ref="confirmPassword"
      />
    </div>
    <div class="row">
      <q-space />
      <q-btn color="primary" label="Register" type="submit" />
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    submit() {
      this.$refs.name.validate();
      this.$refs.email.validate();
      this.$refs.password.validate();
      this.$refs.confirmPassword.validate();

      if (
        !this.$refs.name.hasError &&
        !this.$refs.email.hasError &&
        !this.$refs.password.hasError &&
        !this.$refs.confirmPassword.hasError
      ) {
        this.registerUser(this.user);
      }
    },
    isValidEmailAddress(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
};
</script>

<style>
</style>
