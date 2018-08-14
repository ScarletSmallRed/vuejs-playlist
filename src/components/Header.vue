<template>
    <header>
      <h1 v-on:click="changeTitle1">{{ title1 }}</h1>
    </header>
</template>
<script>
import {bus} from "./../main.js"
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      title1: "Title 1"
    };
  },
  methods: {
    changeTitle: function() {
      this.$emit("changeTitle", "Vue Ninjas");
    },
    changeTitle1 () {
      this.title1 = "Vue Ninjas"
      bus.$emit("titleChanged", this.title1)
    }
  }
};
</script>
<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
