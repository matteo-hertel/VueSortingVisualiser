<template>
<v-list dense>
<div v-for="route in routes" :key="route.path">
<v-list-tile v-on:click="navigateTo(route.path)">
          <v-list-tile-action>
            <v-icon :color="route.meta.iconColour">{{route.meta.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{route.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>       
</div>
</v-list>
</template>

<script>
export default {
  name: "Navigation",
  props: ["routes"],
  methods: {
    navigateTo: function(path) {
      this.$router.push(path);
    }
  }
};
</script>
