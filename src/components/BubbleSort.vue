<template>
    <SortingVis delay="5" :snapshots="snapshotsPool" :rows="iterations" :square="square" :columns="fill"/>
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
  let iterations = 50;
  let square = 20;
  let fill = 50;
  let snapshotsPool = new Array(iterations)
    .fill()
    .map(() => _.shuffle(new Array(fill).fill().map((_, index) => index + 1)))
    .map(bubbleSort);
  return {
    snapshotsPool,
    iterations,
    fill,
    square
  };
}
</script>
