<template>
  <div class="hello">
  <div>{{ getCurrent }} </div>
  <button @click="startProcess">Get Next</button>
 </div>
</template>

<script>
export default {
  name: "SortingVis",
  data: getData,
  methods: {
    startProcess() {
      setInterval(() => {
        if (this.currentArray <= this.rawArray.length) {
          this.currentArray++;
        }
      }, 1000);
    }
  },
  computed: {
    getCurrent() {
      return `<p>${this.rawArray[this.currentArray]}</p>`;
    }
  },
  props: {}
};
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
</style>
