<template>
<canvas v-bind:width="columns" v-bind:height="rows" ref="canvas"></canvas>
</template>

<script>
import { time, colour, filter } from "./../libs";

export default {
  name: "SortingVis",
  props: {
    snapshots: Array,
    squareSize: {
      type: Number,
      default: 10
    },
    optimise: {
      type: Boolean,
      default: true
    },

    columns: {
      type: Number,
      default: 500
    },
    rows: {
      type: Number,
      default: 500
    },
    delay: {
      type: Number,
      default: 50
    },
    max: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    adjustCanvas.bind(this)();
    fillCanvasWithSnapshostAsync.bind(this)();
  }
};
function adjustCanvas() {
  this.$refs.canvas.width = this.columns * this.squareSize;
  this.$refs.canvas.height = this.rows * this.squareSize;
}

function getFilter(optimise) {
  return optimise ? filter.skipEveryOtherButLast : filter.filterNone;
}

async function fillCanvasWithSnapshostAsync() {
  const ctx = this.$refs.canvas.getContext("2d");
  const getColour = colour.getColourWithValues(
    1,
    this.max ? this.max : this.columns
  );

  this.snapshots.map(async (snapshots, j) => {
    let snaps = snapshots
      .filter(getFilter(this.optimise))
      .map(time.delayWithData);

    for (let delay of snaps) {
      let snapshot = await delay(this.delay);
      snapshot.map(getColour).map((i, idx) => {
        ctx.fillStyle = i;
        let n = this.rows * this.squareSize / this.columns;
        ctx.fillRect(idx * n, j * n, n, n);
      });
    }
  });
}
</script>
