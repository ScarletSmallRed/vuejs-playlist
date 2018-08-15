<template>
  <div>
    <show-blogs></show-blogs>
  </div>
</template>

<script>
import addBlog from "./components/addBlog"
import showBlogs from "./components/showBlogs"
export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs
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
