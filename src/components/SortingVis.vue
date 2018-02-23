<template>
<canvas v-bind:width="canvasWidth" v-bind:height="canvasHeight" ref="canvas"></canvas>
</template>

<script>
import { delayWithData, getColorWithValues } from "./../libs/utils";
export default {
  name: "SortingVis",
  props: {
    snapshots: Array,
    rows: Number,
    square: {
      type: Number,
      default: 10
    },
    columns: Number,
    canvasWidth: {
      type: Number,
      default: 500
    },
    canvasHeight: {
      type: Number,
      default: 500
    },
    delay: {
      type: Number,
      default: 100
    }
  },
  mounted() {
    fillCanvasWithSnapshostAsync.bind(this)(this.$refs.canvas.getContext("2d"));
  }
};

async function fillCanvasWithSnapshostAsync(ctx) {
  const getColor = getColorWithValues(1, this.columns);
  this.snapshots.map(async (snapshots, j) => {
    for (let delay of snapshots
      .filter((i, idx, arr) => {
        if (idx === arr.length - 1) return true;
        return idx % 2 === 0;
      })
      .map(delayWithData)) {
      let snapshot = await delay(this.delay);
      snapshot.map(getColor).forEach((i, idx) => {
        ctx.fillStyle = i;
        let n = this.rows * this.square / this.columns;
        ctx.fillRect(idx * n, j * n, n, n);
      });
    }
  });
}
</script>
