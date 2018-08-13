<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <ninjas></ninjas>
  </div>
</template>

<script>
import ninjas from "./Ninjas";
export default {
  components: {
    ninjas
  },
  data() {
    return {
      title: "Your first Vue file, wooo!"
    };
  },
  methods: {
    greeting: function() {
      return "heeey cowboy";
    }
  }
};
</script>

<style>
h1 {
  color: purple;
}
</style>
