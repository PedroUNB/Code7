<template>
  <q-item v-touch-hold:400.mouse="showEditUserModal" clickable v-ripple>
    <q-item-section>
      <q-item-label>{{ user.client.toUpperCase() }}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{
        user.cost.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
      }}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ user.createdAt }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditUserModal"
          flat
          round
          dense
          color="primary"
          icon="edit"
        />
        <q-btn
          @click="promptToDelete(user._id)"
          flat
          round
          dense
          color="red"
          icon="delete"
        />
      </div>

      <q-dialog v-model="showEditUser">
        <EditUser :user="user" :id="id" @close="showEditUser = false" />
      </q-dialog>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions, mapState } from "vuex";
import EditUser from "components/Users/Modals/EditUser.vue";

export default {
  props: ["user", "id"],
  data() {
    return {
      showEditUser: false,
    };
  },

  methods: {
    ...mapActions("users", ["updateUser", "deleteUser"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: `Are you sure you want to delete debit ?`,
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.deleteUser(id);
        });
    },
    showEditUserModal() {
      this.showEditUser = true;
    },
  },
  computed: {
    ...mapState("users", ["search"]),
    ...mapState("settings", ["settings"]),
  },
  filters: {
    niceDate(value) {
      return formatDate(value, "MMM D");
    },
    searchHighlight(value, search) {
      if (search) {
        let regex = new RegExp(search, "ig");
        return value.replace(regex, (match) => {
          return `<span class="bg-yellow-6">${match}</span>`;
        });
      }

      return value;
    },
  },
  components: {
    EditUser,
  },
};
</script>

<style>
</style>
