import { axiosInstance as axios } from 'src/boot/axios';
import { Loading } from 'quasar'
import showErrorMessage from 'src/functions/function.show-error-message';

const isValidEmailAddress = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function registerUser({ }, payload) {
  Loading.show()
  axios.post('/signup', payload)
    .then(data => {
      this.$router.go()
      Loading.hide()
    })
    .catch(error => {
      Loading.hide()
      showErrorMessage(error.response.data.error)
    })
}

export function loginUser({ commit }, payload) {
  Loading.show()
  if (isValidEmailAddress(payload.user)) {
    payload.email = payload.user
  } else {
    payload.cpf = payload.user
  }

  axios.post('/signin', payload)
    .then(res => {
      localStorage.setItem('__user__token__', JSON.stringify(res.data))
      commit('setLoggedIn', true)
      Loading.hide()
      this.$router.replace('/').catch(err => { })
    })
    .catch(error => {
      Loading.hide()
      showErrorMessage(error.response.data.error)
    })
}
export function logoutUser({ commit }) {
  Loading.show()
  localStorage.removeItem('__user__token__')
  commit('setLoggedIn', false)
  this.$router.replace('/auth').catch(err => { })
  Loading.hide()
}

export function handleAuthStateChange({ commit }) {
  Loading.show()
  const json = localStorage.getItem('__user__token__')
  let userData = {}

  if (typeof json === 'string') userData = JSON.parse(json)

  if (!userData) {
    commit('setLoggedIn', false)
    Loading.hide()
    return
  }

  axios.post('/validateToken', userData)
    .then(res => {
      if (res.data) {
        localStorage.setItem('__user__token__', JSON.stringify(userData))
        commit('setLoggedIn', true)
        Loading.hide()
        this.$router.push('/').catch(err => { })
      } else {
        localStorage.removeItem('__user__token__')
        commit('setLoggedIn', false)
        Loading.hide()
        this.$router.replace('/auth').catch(err => { })
      }
    })
    .catch((error) => {
      localStorage.removeItem('__user__token__')
      commit('setLoggedIn', false)
      console.log(error)
      Loading.hide()
      this.$router.replace('/auth').catch(err => { })
    })
}
