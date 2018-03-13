<template>
    <SortingVis delay="5" :snapshots="snapshotsPool" :rows="rows" :squareSize="squareSize" :columns="columns"/>
</template>

<script>
import _ from "lodash";
import SortingVis from "./SortingVis.vue";

export default {
  name: "InsertionSort",
  data: () => getData(),
  components: { SortingVis }
};
const insertionSort = nums => {
  const snapshots = [];
  const snapshot = array => snapshots.push(Array.from(array));
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      snapshot(nums);
      if (nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
  snapshot(nums);
  return snapshots;
};
function getData() {
  let rows = 50;
  let delay = 5;
  let squareSize = 5;
  let columns = 50;
  let snapshotsPool = new Array(rows)
    .fill()
    .map(() =>
      _.shuffle(new Array(columns).fill().map((_, index) => index + 1))
    )
    .map(insertionSort);
  return {
    snapshotsPool,
    rows,
    delay,
    columns,
    squareSize
  };
}
</script>
