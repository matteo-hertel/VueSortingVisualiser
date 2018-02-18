<template>
  <div class="hello">
	<div class="grid-container" v-html="getCurrent"></div> 
</div>
</template>

<script>
export default {
  name: "SortingVis",
  data: getData,
  methods: {
    getPixel(colour) {
      return `<div class="item" style="height:20px;background-color:${colour}"></div>`;
    },
    startProcess() {
      setInterval(() => {
        if (this.currentArray < this.snapshots.length) {
          this.currentArray++;
        }
      }, 300);
    }
  },
  computed: {
    getCurrent() {
      return this.snapshots[this.currentArray]
        .map(getColor)
        .map(this.getPixel)
        .join("");
    }
  },
  props: {
    snapshots: Array
  }
};
function getColor(input) {
  const max = 20;
  const value = 20 - input;

  const spectrum = value / max;
  const red =
    spectrum < 0.5 ? Math.floor(Math.abs(spectrum - 0.5) * 2 * 205) : 0;
  const blue = spectrum > 0.5 ? Math.floor((spectrum - 0.5) * 2 * 205) : 0;
  const green = blue > 0 ? 205 - blue : 205 - red;

  return `rgb(${red},${green},${blue})`;
}
function getData() {
  return {
    currentArray: 0
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
