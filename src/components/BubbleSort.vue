<template>
    <SortingVis :delay="delay" :snapshots="snapshotsPool" :rows="rows" :squareSize="squareSize" :columns="columns"/>
</template>

<script>
import _ from "lodash";
import SortingVis from "./SortingVis.vue";

export default {
  name: "BubbleSort",
  data: () => getData(),
  components: { SortingVis }
};
const bubbleSort = nums => {
  const snapshots = [];
  const snapshot = array => snapshots.push(Array.from(array));

  do {
    var swapped = false;
    for (var i = 0; i < nums.length; i++) {
      snapshot(nums);
      if (nums[i] > nums[i + 1]) {
        var temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  snapshot(nums);
  return snapshots;
};

function getData() {
  let rows = 50;
  let squareSize = 5;
  let delay = 5;
  let columns = 50;
  let snapshotsPool = new Array(rows)
    .fill()
    .map(() =>
      _.shuffle(new Array(columns).fill().map((_, index) => index + 1))
    )
    .map(bubbleSort);
  return {
    columns,
    delay,
    rows,
    snapshotsPool,
    squareSize
  };
}
</script>
