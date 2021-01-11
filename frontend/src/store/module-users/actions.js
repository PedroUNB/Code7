import { axiosInstance as axios } from 'src/boot/axios';
import { Loading } from 'quasar'
import showErrorMessage from 'src/functions/function.show-error-message';
import showNotifyMessage from 'src/functions/function.show-notify';

export function addUser({ commit }, payload) {
  Loading.show()
  payload.clientId = payload.client
  axios.post('/debit', payload)
    .then(data => {
      Loading.hide()
      commit('addUser', data.data)
      showNotifyMessage('Debit created successfully!', 'green', 'white')
    })
    .catch(error => {
      Loading.hide()
      console.log(error.response.data.error)
      showNotifyMessage(error.response.data.error, 'red', 'white')
    })
}

export function updateUser({ commit }, payload) {
  Loading.show()
  axios.put(`/debit/${payload._id}`, payload)
    .then(() => {
      Loading.hide()
      commit('updateUser', payload)
      showNotifyMessage('Debit created successfully!', 'green', 'white')
    })
    .catch(error => {
      Loading.hide()
      console.log(error.response.data.error)
      showNotifyMessage(error.response.data.error, 'red', 'white')
    })
}

export function setUsersLoaded({ commit }) {
  axios.get('/debit')
    .then(data => {
      commit('setUsersLoaded', data.data)
    })
    .catch(error => {
      console.log(error.response.data.error)
    })
}

export function deleteUser({ commit }, _id) {
  axios.delete(`/debit/${_id}`)
    .then(data => {
      commit('deleteUser', data.data)
      showNotifyMessage('Debit deleted with successfully!', 'green', 'white')
    })
    .catch(error => {
      showNotifyMessage(error.response.data.error, 'red', 'white')
    })
}
