<template>
  <div id="app">
    <img src="./assets/logo.png">
    <SortingVis :snapshots="snapshots"/>
    <SortingVis :snapshots="snapshots"/>
    <SortingVis :snapshots="snapshots"/>
    <SortingVis :snapshots="snapshots"/>
    <SortingVis :snapshots="snapshots"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SortingVis from "./components/SortingVis.vue";

export default {
  name: "app",
  data: () => getData(tmp),
  components: {
    HelloWorld,
    SortingVis
  }
};
const snapshots = [];
const snapshot = array => snapshots.push(Array.from(array));
const cocktailSort = arr => {
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
  return arr;
};
function getData(arr) {
  snapshot(cocktailSort(arr));
  return {
    snapshots: snapshots
  };
}
const tmp = [
  7,
  14,
  4,
  15,
  8,
  13,
  6,
  3,
  1,
  18,
  2,
  5,
  10,
  16,
  12,
  17,
  19,
  11,
  9,
  20
];
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
