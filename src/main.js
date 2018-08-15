import Vue from 'vue'
import App from './App.vue'
import axios from "axios"

Vue.prototype.$axios = axios;

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
