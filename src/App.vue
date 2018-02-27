<template>
<div>
	<BubbleSort/>
</div>
</template>

<script>
import InsertionSort from "./components/InsertionSort.vue";
import CocktailSort from "./components/CocktailSort.vue";
import BubbleSort from "./components/BubbleSort.vue";

export default {
  name: "app",
  components: {
    CocktailSort,
    InsertionSort,
    BubbleSort
  }
};
</script>
