<template>
  <q-card>
    <ModalHeader>Add Debit</ModalHeader>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <ModalUserName :client.sync="userToSubmit.client" ref="modalUserName" />
        <ModalUserCPF
          :description.sync="userToSubmit.description"
          ref="modalUserCPF"
        />
        <ModalUserEmail :cost.sync="userToSubmit.cost" ref="modalUserEmail" />
      </q-card-section>

      <ModalButtons />
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import AddEditUserMixin from "src/mixins/add-edit-user.js";

export default {
  mixins: [AddEditUserMixin],
  data() {
    return {
      userToSubmit: {
        name: "",
        client: "",
        description: "",
        cost: "",
      },
    };
  },
  methods: {
    ...mapActions("users", ["addUser"]),

    submitUser() {
      this.addUser(this.userToSubmit);
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>
