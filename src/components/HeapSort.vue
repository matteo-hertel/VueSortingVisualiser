<template>
    <SortingVis delay="5" :snapshots="snapshotsPool" :rows="iterations" :square="square" :columns="fill"/>
</template>

<script>
import _ from "lodash";
import SortingVis from "./SortingVis.vue";

export default {
  name: "HeapSort",
  data: () => getData(),
  components: { SortingVis }
};
const heapSort = array => {
  const snapshots = [];
  const snapshot = array => snapshots.push(Array.from(array));

  snapshot(array);

  const createMaxHeap = array => {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      heapify(array, i, array.length);
    }
    return array;
  };

  const heapify = (array, index, heapSize) => {
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    let largestValueIndex = index;

    if (heapSize > left && array[largestValueIndex] < array[left]) {
      largestValueIndex = left;
    }

    if (heapSize > right && array[largestValueIndex] < array[right]) {
      largestValueIndex = right;
    }

    if (largestValueIndex !== index) {
      const temp = array[index];
      array[index] = array[largestValueIndex];
      array[largestValueIndex] = temp;
      heapify(array, largestValueIndex, heapSize);
      snapshot(array);
    }
  };
  array = createMaxHeap(array);
  let heapSize = array.length;
  let temp;
  for (let i = array.length - 1; i > 0; i--) {
    temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    heapSize--;
    heapify(array, 0, heapSize);
  }

  snapshot(array);
  return snapshots;
};
function getData() {
  let iterations = 90;
  let square = 20;
  let fill = 150;
  let snapshotsPool = new Array(iterations)
    .fill()
    .map(() => _.shuffle(new Array(fill).fill().map((_, index) => index + 1)))
    .map(heapSort);
  return {
    snapshotsPool,
    iterations,
    fill,
    square
  };
}
</script>
