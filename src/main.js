import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import HeapSort from "./components/HeapSort.vue";

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.config.productionTip = false;
const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: "/heap-sort", component: HeapSort }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
