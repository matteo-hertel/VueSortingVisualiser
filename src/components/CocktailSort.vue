<template>
    <SortingVis :snapshots="snapshotsPool"  :rows="iterations" :square="square" :columns="fill"/>
</template>

<script>
import _ from "lodash";
import SortingVis from "./SortingVis.vue";

export default {
  name: "CocktailSort",
  data: () => getData(),
  components: { SortingVis }
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
  let iterations = 50;
  let square = 8;
  let fill = 50;
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
