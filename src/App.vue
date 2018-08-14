<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from "./components/addBlog"
export default {
  components: {
    "add-blog": addBlog
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
