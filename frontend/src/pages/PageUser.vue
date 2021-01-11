<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <q-scroll-area
        style="display: flex; flex-grow: 1"
        class="q-scroll-area-tasks"
      >
        <!-- <q-list bordered separator>
          <q-item
            v-for="(user, key) in users"
            :id="key"
            :key="key"
            class="bg-green-1"
          >
            <q-item-section>
              <q-item-label>{{ user.name.toUpperCase() }}</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ user.cpf }}</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ user.email }}</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label class="phone">
                {{ user.phone || "Unknow" }}
              </q-item-label>
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
            </q-item-section>
          </q-item>
        </q-list> -->
        <div class="relative-position">
          <UserList
            :users="users"
            headerText="Completed"
            bgColor="bg-primary"
          />
        </div>
      </q-scroll-area>

      <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn
          @click="showAddUser = true"
          class="all-pointer-events"
          color="primary"
          size="24px"
          icon="add"
          round
        />
      </div>

      <q-dialog v-model="showAddUser">
        <AddUser @close="showAddUser = false" />
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import AddUser from "components/Users/Modals/AddUser.vue";
import UserList from "components/Users/Modals/UserList.vue";
export default {
  data() {
    return {
      showAddUser: false,
      showEditUser: false,
    };
  },
  methods: {
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to delete the user?",
          ok: {
            push: true,
          },
          cancel: {
            color: "negative",
          },
          persistent: true,
        })
        .onOk(() => {
          console.log("ook");
        });
    },
    showEditUserModal() {
      this.showEditUser = true;
    },
  },
  computed: {
    ...mapState("users", ["users"]),
    ...mapGetters("users", ["users"]),
  },
  components: {
    AddUser,
    UserList,
  },
};
</script>

<style lang="stylus">
@media screen and (max-width: 768px) {
  .email {
    display: none;
    visibility: hidden;
  }
}

@media screen and (max-width: 960px) {
  .phone {
    display: none;
    visibility: hidden;
  }
}

.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>

