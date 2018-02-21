<template>
  <div class="hello">
<canvas v-bind:width="canvasWidth" v-bind:height="canvasHeight" ref="canvas"></canvas>
</div>
</template>

<script>
import { delayWithData, getColorWithValues } from "./../libs/utils";
export default {
  name: "SortingVis",
  props: {
    snapshots: Array,
    canvasWidth: {
      type: Number,
      default: 500
    },
    canvasHeight: {
      type: Number,
      default: 25
    },
    delay: {
      type: Number,
      default: 100
    }
  },
  mounted() {
    fillCanvasWithSnapshostAsync(
      this.snapshots,
      this.$refs.canvas.getContext("2d"),
      this.delay
    );
  }
};

async function fillCanvasWithSnapshostAsync(data, ctx, renderDelay) {
  const getColor = getColorWithValues(1, 20);
  for (let delay of data.map(delayWithData)) {
    let snapshot = await delay(renderDelay);
    snapshot.map(getColor).map((i, idx) => {
      ctx.fillStyle = i;
      let n = 500 / 20;
      ctx.fillRect(idx * n, 0, n, n);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding: 0;
  margin: 0;
  height: 25px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.grid-container {
  --grid-count: 20;
}
.grid-container {
  width: 550px;
  display: grid;
  grid-template-columns: repeat(var(--grid-count), 1fr);
  color: white;
  align-items: self-end;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
