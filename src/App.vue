<template>
<div>
	<RadixSort delay="500"/>
</div>
</template>

<script>
import InsertionSort from "./components/InsertionSort.vue";
import CocktailSort from "./components/CocktailSort.vue";
import BubbleSort from "./components/BubbleSort.vue";
import HeapSort from "./components/HeapSort.vue";
import RadixSort from "./components/RadixSort.vue";

export default {
  name: "app",
  components: {
    CocktailSort,
    InsertionSort,
    BubbleSort,
    HeapSort,
    RadixSort
  }
};
</script>
