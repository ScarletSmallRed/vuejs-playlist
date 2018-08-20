<template>
  <div id="signup">
     <h2>Sign Up a New User</h2>
     <form v-if="!submitted">
       <label>Email:</label>
       <input type="email" name="email" v-model.lazy="user.email" required>
       <label>Password:</label>
       <input type="password" name="password" v-model.lazy="user.password" required>
       <label>Password Confirmation:</label>
       <input type="password" name="cpassword" v-model.lazy="user.passwordConfirmation" required>
     </form>
     <button @click.prevent="postUser">Sign Up</button>
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
        passwordConfirmation: ""
      }
    };
  },
  methods: {
    postUser() {
      this.$axios({
        method: "post",
        url: "/users/signup",
        baseURL: "http://localhost:4000",
        data: {
          user: this.user
        }
      })
        .then(response => {
          this.submitted = true;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
#signup * {
  box-sizing: border-box;
}
#signup {
  margin: 20px auto;
  max-width: 500px;
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
