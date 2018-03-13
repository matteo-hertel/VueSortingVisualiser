<template>
    <SortingVis :delay="delay" :max="80000000" :snapshots="snapshotsPool" :rows="rows" :squareSize="squareSize" :columns="columns"/>
</template>

<script>
import SortingVis from "./SortingVis.vue";

export default {
  name: "InsertionSort",
  data: () => getData(),
  components: { SortingVis }
};
const radixSort = array => {
  const snapshots = [];
  const snapshot = array => snapshots.push(Array.from(array));
  function getDigit(number, place, longestNumber) {
    const string = number.toString();
    const size = string.length;

    const mod = longestNumber - size;
    return string[place - mod] || 0;
  }

  function findLongestNumber(array) {
    let longest = 0;
    for (let i = 0; i < array.length; i++) {
      const currentLength = array[i].toString().length;
      longest = currentLength > longest ? currentLength : longest;
    }
    return longest;
  }

  snapshot(array);
  const longestNumber = findLongestNumber(array);

  const buckets = new Array(10).fill().map(() => []); // make an array of 10 arrays

  for (let i = longestNumber - 1; i >= 0; i--) {
    while (array.length) {
      const current = array.shift();
      buckets[getDigit(current, i, longestNumber)].push(current);
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
    snapshot(array);
  }
  snapshot(array);
  return snapshots;
};
function getData() {
  let rows = 250;
  let delay = 500;
  let squareSize = 1;
  let columns = 250;
  let base = new Array(columns)
    .fill()
    .map(() => Math.floor(Math.random() * 80000000));
  let snapshotsPool = new Array(rows)
    .fill()
    .map(() => [...base])
    .map(radixSort);
  return {
    snapshotsPool,
    rows,
    delay,
    columns,
    squareSize
  };
}
</script>
