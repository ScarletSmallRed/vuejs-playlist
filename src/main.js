import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import router from "./routes"
import {store} from "./vuex/store"

axios.defaults.withCredentials = true
Vue.prototype.$axios = axios;
// Vue.prototype.$axios.defaults.withCredentials = true

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
