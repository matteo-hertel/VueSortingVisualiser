<template>
<div>
	<InsertionSort/>
</div>
</template>

<script>
import InsertionSort from "./components/InsertionSort.vue";
import CocktailSort from "./components/CocktailSort.vue";

export default {
  name: "app",
  components: {
    CocktailSort,
    InsertionSort
  }
};
</script>
