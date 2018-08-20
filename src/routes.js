import addBlog from "./pages/addBlog.vue"
import showBlogs from "./pages/showBlogs.vue"
import singleBlog from "./pages/singleBlog.vue"
import signup from "./pages/signup"
import login from "./pages/login.vue"
import Vue from "vue"
import VueRouter from "vue-router"
import {store} from "./vuex/store"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: showBlogs
  },
  {
    path: "/add",
    component: addBlog,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/blog/:id",
    component: singleBlog
  },
  {
    path: "/signup",
    component: signup
  },
  {
    path: "/login",
    component: login
  }
]

const router = new VueRouter({
  routes
})

let email = window.localStorage.getItem('userEmail')
if (email) {
  store.commit("userStatus", email)
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
      console.log("isLogin:", store.getters.isLogin)
      if (store.getters.isLogin) {
          next();
      }
      else {
          next({
              path: '/login',
              query: {redirect: to.fullPath}
          })
      }
  }
  else {
      next();
  }
})

export default router
