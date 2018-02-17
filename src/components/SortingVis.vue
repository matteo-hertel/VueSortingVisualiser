<template>
  <div class="hello">
  <div class="grid-container" v-html="getCurrent"></div>
  <button @click="startProcess">Get Next</button>
 </div>
</template>

<script>
export default {
  name: "SortingVis",
  data: getData,
  methods: {
   getPixel(colour){
return `<div class="item" style="height:25px;background-color:${colour}"></div>`;
},
 startProcess() {
      setInterval(() => {
console.log(this.currentArray , this.rawArray.length);
        if (this.currentArray < this.rawArray.length) {
          this.currentArray++;
        }
      }, 300);
    }
  },
  computed: {
    getCurrent() {
      return this.rawArray[this.currentArray].map(getColor).map(this.getPixel).join("");
    }
  },
  props: {},
}
function getColor(input) {
  const max = 25;
  const value = 25 - input;

  const spectrum = value / max;
  const red =
    spectrum < 0.5 ? Math.floor(Math.abs(spectrum - 0.5) * 2 * 255) : 0;
  const blue = spectrum > 0.5 ? Math.floor((spectrum - 0.5) * 2 * 255) : 0;
  const green = blue > 0 ? 255 - blue : 255 - red;

  return `rgb(${red},${green},${blue})`;
}
function getData() {
  return {
    currentArray: 0,
    rawArray: [
      [
        1,
        8,
        18,
        23,
        16,
        13,
        20,
        21,
        9,
        5,
        6,
        7,
        17,
        4,
        25,
        15,
        3,
        22,
        11,
        10,
        24,
        2,
        12,
        19,
        14
      ],
      [
        1,
        8,
        18,
        16,
        23,
        13,
        20,
        21,
        9,
        5,
        6,
        7,
        17,
        4,
        25,
        15,
        3,
        22,
        11,
        10,
        24,
        2,
        12,
        19,
        14
      ],
      [
        1,
        8,
        18,
        16,
        13,
        23,
        20,
        21,
        9,
        5,
        6,
        7,
        17,
        4,
        25,
        15,
        3,
        22,
        11,
        10,
        24,
        2,
        12,
        19,
        14
      ],
      [
        1,
        8,
        18,
        16,
        13,
        20,
        23,
        21,
        9,
        5,
        6,
        7,
        17,
        4,
        25,
        15,
        3,
        22,
        11,
        10,
        24,
        2,
        12,
        19,
        14
      ],
      [
        1,
        8,
        18,
        16,
        13,
        20,
        21,
        23,
        9,
        5,
        6,
        7,
        17,
        4,
        25,
        15,
        3,
        22,
        11,
        10,
        24,
        2,
        12,
        19,
        14
      ],
      [
        1,
        8,
        18,
        16,
        13,
        20,
        21,
        9,
        23,
        5,
        6,
        7,
        17,
        4,
        25,
        15,
        3,
        22,
        11,
        10,
        24,
        2,
        12,
        19,
        14
      ],
      [
        1,
        8,
        18,
        16,
        13,
        20,
        21,
        9,
        5,
        23,
        6,
        7,
        17,
        4,
        25,
        15,
        3,
        22,
        11,
        10,
        24,
        2,
        12,
        19,
        14
      ],
      [
        1,
        8,
        18,
        16,
        13,
        20,
        21,
        9,
        5,
        6,
        23,
        7,
        17,
        4,
        25,
        15,
        3,
        22,
        11,
        10,
        24,
        2,
        12,
        19,
        14
      ],
      [
        1,
        8,
        18,
        16,
        13,
        20,
        21,
        9,
        5,
        6,
        7,
        23,
        17,
        4,
        25,
        15,
        3,
        22,
        11,
        10,
        24,
        2,
        12,
        19,
        14
      ],
      [
        1,
        8,
        18,
        16,
        13,
        20,
        21,
        9,
        5,
        6,
        7,
        17,
        23,
        4,
        25,
        15,
        3,
        22,
        11,
        10,
        24,
        2,
        12,
        19,
        14
      ],
      [
        1,
        8,
        18,
        16,
        13,
        20,
        21,
        9,
        5,
        6,
        7,
        17,
        4,
        23,
        25,
        15,
        3,
        22,
        11,
        10,
        24,
        2,
        12,
        19,
        14
      ],
      [
        1,
        8,
        18,
        16,
        13,
        20,
        21,
        9,
        5,
        6,
        7,
        17,
        4,
        23,
        15,
        25,
        3,
        22,
        11,
        10,
        24,
        2,
        12,
        19,
        14
      ]
    ]
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
  --grid-count: 25
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
