<template>
  <div class="hello">
<canvas width="500" height="25" ref="canvas"></canvas>
{{snapshotsComputed}}
</div>
</template>

<script>
export default {
  name: "SortingVis",
  methods: {},
  asyncComputed: {
    snapshotsCompute() {
      setTimeout(() => {
        test(this.snapshots, this.$refs.canvas.getContext("2d"));
      }, 1000);
      return "lol";
    }
  },
  props: {
    snapshots: Array
  }
};
async function test(data, ctx) {
  function delay(data) {
    return () => {
      return new Promise(resolve => {
        setTimeout(() => resolve(data), 20);
      });
    };
  }

  let p = data.map(delay);
  for (let i of p) {
    await i().then(arr => {
      arr.map(getColor).map((i, idx) => {
        ctx.fillStyle = i;
        let n = 500 / 20;
        ctx.fillRect(idx * n, 0, n, n);
      });
    });
  }
}
function getColor(input) {
  const max = 20;
  const value = input - 1;

  const spectrum = value / max;
  const red =
    spectrum < 0.5 ? Math.floor(Math.abs(spectrum - 0.5) * 2 * 255) : 0;
  const blue = spectrum > 0.5 ? Math.floor((spectrum - 0.5) * 2 * 255) : 0;
  const green = blue > 0 ? 255 - blue : 255 - red;

  return `rgb(${red},${green},${blue})`;
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
