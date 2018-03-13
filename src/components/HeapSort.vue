<template>
    <SortingVis :delay="delay" :snapshots="snapshotsPool" :rows="rows" :squareSize="squareSize" :columns="columns"/>
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
  let rows = 50;
  let squareSize = 5;
  let delay = 50;
  let columns = 50;
  let snapshotsPool = new Array(rows)
    .fill()
    .map(() =>
      _.shuffle(new Array(columns).fill().map((_, index) => index + 1))
    )
    .map(heapSort);
  return {
    snapshotsPool,
    rows,
    delay,
    columns,
    squareSize
  };
}
</script>
