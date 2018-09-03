<template>
    <SortingVis :delay="delay" :snapshots="snapshotsPool" :rows="rows" :squareSize="squareSize" :columns="columns"/>
</template>

<script>
import _ from 'lodash';
import SortingVis from './SortingVis.vue';
import snapshotSortingProcess from './../libs/snapshotSortingProcess';
import BubbleSort from './../libs/algorithms/BubbleSort';

export default {
  name: 'BubbleSort',
  data: () => getData(),
  components: {SortingVis},
};

function getData() {
  let rows = 60;
  let squareSize = 10;
  let delay = 5;
  let columns = 60;
  let snapshotsPool = new Array(rows)
    .fill()
    .map(() =>
      _.shuffle(new Array(columns).fill().map((_, index) => index + 1)),
    )
    .map(arr => snapshotSortingProcess(arr, BubbleSort));
  return {
    columns,
    delay,
    rows,
    snapshotsPool,
    squareSize,
  };
}
</script>
