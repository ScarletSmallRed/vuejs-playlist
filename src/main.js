import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import VueRouter from "vue-router"
import routes from "./routes"

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.prototype.$axios = axios;

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
