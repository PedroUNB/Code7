import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3982'
})

Vue.prototype.$axios = axiosInstance


export { axiosInstance }
