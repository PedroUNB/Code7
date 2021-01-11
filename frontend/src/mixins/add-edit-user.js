import ModalHeader from 'components/Users/Modals/Shared/ModalHeader.vue'
import ModalUserName from 'components/Users/Modals/Shared/ModalUserName.vue'
import ModalUserEmail from 'components/Users/Modals/Shared/ModalUserEmail.vue'
import ModalUserPassword from 'components/Users/Modals/Shared/ModalUserPassword.vue'
import ModalUserCPF from 'components/Users/Modals/Shared/ModalUserCPF.vue'
import ModalUserPhone from 'components/Users/Modals/Shared/ModalUserPhone.vue'
import ModalButtons from 'components/Users/Modals/Shared/ModalButtons.vue'

export default {
  data() {
    return {
      userToSubmit: {
        client: '',
        cost: '',
        description: '',
      }
    }
  },
  methods: {

    submitForm() {
      let name = this.$refs.modalUserName.$refs.client;
      let cpf = this.$refs.modalUserCPF.$refs.description
      let cost = this.$refs.modalUserEmail.$refs.cost


      name.validate();
      cpf.validate()
      cost.validate()
      if (!name.hasError && !cpf.hasError && !cost.hasError) {
        this.submitUser();
      }
    }
  },

  components: {
    ModalHeader,
    ModalUserName,
    ModalUserEmail,
    ModalUserPassword,
    ModalUserCPF,
    ModalUserPhone,
    ModalButtons
  }
}
