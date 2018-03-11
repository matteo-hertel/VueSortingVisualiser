import BubbleSort from "./components/BubbleSort.vue";
import CocktailSort from "./components/CocktailSort.vue";
import HeapSort from "./components/HeapSort.vue";
import Home from "./components/Home.vue";
import InsertionSort from "./components/InsertionSort.vue";
import RadixSort from "./components/RadixSort.vue";

export default [
  {
    path: "/",
    name: "",
    component: Home,
    meta: {
      icon: "home",
      iconColour: "blue-grey darken-2"
    }
  },
  {
    path: "/bubble-sort",
    name: "BubbleSort",
    component: BubbleSort,
    meta: {
      icon: "label",
      description: "The most basic sorting algo out there!",
      iconColour: "blue-grey darken-2"
    }
  },
  {
    path: "/cocktail-sort",
    name: "CocktailSort",
    component: CocktailSort,
    meta: {
      icon: "label",
      iconColour: "blue-grey darken-2"
    }
  },
  {
    path: "/heap-sort",
    name: "HeapSort",
    component: HeapSort,
    meta: {
      icon: "label",
      iconColour: "blue-grey darken-2"
    }
  },
  {
    path: "/insertion-sort",
    name: "InsertionSort",
    component: InsertionSort,
    meta: {
      icon: "label",
      iconColour: "blue-grey darken-2"
    }
  },
  {
    path: "/radix-sort",
    name: "RadixSort",
    component: RadixSort,
    meta: {
      icon: "label",
      iconColour: "blue-grey darken-2"
    }
  }
];
