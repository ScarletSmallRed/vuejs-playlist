<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./pages/addBlog"
import showBlogs from "./pages/showBlogs"
import header from "./components/Header"
export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs,
    "app-header": header
  },
  data() {
    return {

    };
  },
  methods: {
    greeting () {
      return "heeey cowboy";
    },
    updateTitle (updatedTitle) {
      this.title = updatedTitle;
    }
  }
};
</script>

<style>
h1 {
  color: purple;
}
</style>
