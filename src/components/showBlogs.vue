<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs" />
        <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.title">
          <router-link :to="'/blog/' + blog.id">
            <h2 v-rainbow>{{ blog.title | toUpperCase }}</h2>
          </router-link>
          <article>{{ blog.body }}</article>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$axios({
      method: "get",
      url: "/posts",
      baseURL: "http://jsonplaceholder.typicode.com/"
    }).then(res => {
      this.blogs = res.data.slice(0, 10);
    });
  },
  filters: {
    /*'to-uppercase': function(value){
            return value.toUpperCase();
        }*/
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}
#show-blogs a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
