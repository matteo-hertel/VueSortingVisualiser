<template>
  <div id="app">
    <img src="./assets/logo.png">
<SortingVis />
<SortingVis />
<SortingVis />
<SortingVis />
<SortingVis />
<SortingVis />
<SortingVis />
<SortingVis />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SortingVis from "./components/SortingVis.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    SortingVis
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
