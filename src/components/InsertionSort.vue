<template>
    <SortingVis delay="5" :snapshots="snapshotsPool" :rows="iterations" :square="square" :columns="fill"/>
</template>

<script>
import _ from "lodash";
import SortingVis from "./SortingVis.vue";

export default {
  name: "InsertionSort",
  data: () => getData(),
  components: { SortingVis }
};
const cocktailSort = nums => {
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
  let iterations = 80;
  let square = 2;
  let fill = 120;
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
