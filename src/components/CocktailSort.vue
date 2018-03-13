<template>
    <SortingVis :snapshots="snapshotsPool"  :rows="rows" :squareSize="squareSize" :columns="columns"/>
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
  let rows = 50;
  let squareSize = 5;
  let columns = 50;
  let delay = 10;
  let snapshotsPool = new Array(rows)
    .fill()
    .map(() =>
      _.shuffle(new Array(columns).fill().map((_, index) => index + 1))
    )
    .map(cocktailSort);
  return {
    snapshotsPool,
    rows,
    delay,
    columns,
    squareSize
  };
}
</script>
