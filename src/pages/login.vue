<template>
  <div id="login">
     <h2>Login</h2>
     <form v-if="!submitted">
       <label>Email:</label>
       <input type="email" name="email" v-model.lazy="user.email" required>
       <label>Password:</label>
       <input type="password" name="password" v-model.lazy="user.password" required>
      <button @click.prevent="postUser">Login</button>
     </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitted: false,
      user: {
        email: "",
        password: "",
      }
    };
  },
  methods: {
    postUser() {
      this.$axios({
        method: "post",
        url: "/users/login",
        baseURL: "http://localhost:4000",
        data: {
          user: this.user
        }
      })
        .then(response => {
          this.submitted = true;
          localStorage.setItem("userEmail", response.data.userEmail)
          this.$store.dispatch("setUser", response.data.userEmail)
          this.$router.push({ path: "/" })
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$axios({
        method: "get",
        url: "/users/logout",
        baseURL: "http://localhost:4000"
      })
        .then(response => {
          vm.$store.dispatch("setUser", null)
        })
    })
  }
};
</script>

<style scoped>
#login * {
  box-sizing: border-box;
}
#login {
  margin: 20px auto;
  max-width: 500px;
}
button {
  margin: 20px auto;
  max-width: 500px;
  box-sizing: border-box;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="email"],
input[type="password"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
