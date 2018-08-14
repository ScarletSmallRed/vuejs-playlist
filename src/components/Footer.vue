<template>
    <footer>
        <p>{{ copyright }} {{title1}}</p>
    </footer>
</template>
<script>
import { bus } from "./../main.js";
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      copyright: "Copyright 2017 Vue Ninjas",
      title1: "Title 1"
    };
  },
  created() {
    bus.$on("titleChanged", data => {
      console.log("new title:", data)
      this.title1 = data;
    });
  }
};
</script>
<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
