<template>
  <div id="app">
    <img src="./assets/logo.png">
    <SortingVis :snapshots="snapshotsPool" :delay="100" :rows="iterations" :square="square" :columns="fill"/>
  </div>
</template>

<script>
//<div v-for="item in snapshotsPool" :key="item.id" style="height:5px">
import _ from "lodash";
import HelloWorld from "./components/HelloWorld.vue";
import SortingVis from "./components/SortingVis.vue";

export default {
  name: "app",
  data: () => getData(),
  components: {
    HelloWorld,
    SortingVis
  }
};
const cocktailSort = arr => {
  const snapshots = [];
  const snapshot = array => snapshots.push(Array.from(array));
  function swap(arr, a, b) {
    snapshot(arr);
    if (a === b) return arr;

    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
  }

  var i,
    left = 0,
    right = arr.length - 1;

  while (left < right) {
    for (i = left; i < right; i++)
      if (arr[i] > arr[i + 1]) {
        arr = swap(arr, i, i + 1);
      }

    right--;
    for (i = right; i > left; i--)
      if (arr[i - 1] > arr[i]) {
        arr = swap(arr, i - 1, i);
      }

    left++;
  }
  snapshot(arr);
  return snapshots;
};
function getData() {
  let iterations = 100;
  let square = 5;
  let fill = 100;
  let snapshotsPool = new Array(iterations)
    .fill()
    .map(() => _.shuffle(new Array(fill).fill().map((_, index) => index + 1)))
    .map(cocktailSort);
  return {
    snapshotsPool,
    iterations,
    fill,
    square
  };
}
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
