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
    adjustCanvas.bind(this)();
    fillCanvasWithSnapshostAsync.bind(this)(this.$refs.canvas.getContext("2d"));
  }
};
function adjustCanvas() {
  this.$refs.canvas.width = this.columns * this.square;
  this.$refs.canvas.height = this.rows * this.square;
}
function* emitData(arr) {
  while (arr.filter(i => i.length).length) {
    yield arr.map(a => a.shift());
  }
}
async function fillCanvasWithSnapshostAsync(ctx) {
  const getColor = getColorWithValues(1, this.columns);
  const generateSnapshot = emitData(this.snapshots);
  console.log(this.delay);
  let interval = setInterval(() => {
    let snap = generateSnapshot.next();
    if (!snap.value) return clearInterval(interval);
    snap.value.map((s, j) => {
      if (!s) return;
      s.map(getColor).map((i, idx) => {
        ctx.fillStyle = i;
        let n = this.rows * this.square / this.columns;
        ctx.fillRect(idx * n, j * n, n, n);
      });
    });
  }, this.delay);
  //this.snapshots.map(async (snapshots, j) => {
  //  for (let delay of snapshots.map(delayWithData)) {
  //    let snapshot = await delay(this.delay);
  //    snapshot.map(getColor).map((i, idx) => {
  //      ctx.fillStyle = i;
  //      let n = this.rows * this.square / this.columns;
  //      ctx.fillRect(idx * n, j * n, n, n);
  //    });
  //  }
  //});
}
//.filter((i, idx, arr) => {
//        if (idx === arr.length - 1) return true;
//        return idx % 2 === 0;
//      })
</script>
