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
    icon: "home",
    iconColour: "blue-grey darken-2"
  },
  {
    path: "/bubble-sort",
    name: "BubbleSort",
    component: BubbleSort,
    icon: "label",
    iconColour: "blue-grey darken-2"
  },
  {
    path: "/cocktail-sort",
    name: "CocktailSort",
    component: CocktailSort,
    icon: "label",
    iconColour: "blue-grey darken-2"
  },
  {
    path: "/heap-sort",
    name: "HeapSort",
    component: HeapSort,
    icon: "label",
    iconColour: "blue-grey darken-2"
  },
  {
    path: "/insertion-sort",
    name: "InsertionSort",
    component: InsertionSort,
    icon: "label",
    iconColour: "blue-grey darken-2"
  },
  {
    path: "/radix-sort",
    name: "RadixSort",
    component: RadixSort,
    icon: "label",
    iconColour: "blue-grey darken-2"
  }
];
