<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
    </div>
</template>

<script>
// Imports
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$axios({
      method: "get",
      baseURL: "http://localhost:4000",
      url: `/blogs/${this.id}`
    })
      .then(res => {
        this.blog = res.data.doc
      })
  }
};
</script>

<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
