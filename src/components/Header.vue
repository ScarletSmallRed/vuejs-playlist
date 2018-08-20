<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Blog</router-link></li>
            <li><router-link to="/add" exact>Add a new blog</router-link></li>
            <li>
              <router-link to="/signup">Sign Up</router-link>
            </li>
            <li v-if="!isLogin">
              <router-link to="/login">Log in</router-link>
            </li>
            <li v-else>
              <a>{{currentUser}}</a> | <router-link to="/login" @click="logOut">Log out</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  computed: {
    isLogin () {
      let email = localStorage.getItem("userEmail")
      if (email) {
        this.$store.dispatch("setUser", email)
      } else {
        this.$store.dispatch("setUser", null)
      }

      return this.$store.getters.isLogin
    },
    currentUser () {
      return this.$store.getters.currentUser
    }
  },
  methods: {
    logOut () {
      console.log("Log out test.")
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active {
  background: #eee;
  color: #444;
}
</style>
