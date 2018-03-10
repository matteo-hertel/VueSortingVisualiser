<template>
    <div>
        <v-navigation-drawer
            clipped
            fixed
            v-model="drawer"
            app
            >
            <slot name="navigation"></slot> 
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{appName}}</v-toolbar-title>
        </v-toolbar>
    </div>
</template>
<script>
import manifest from "./../../manifest.json";

export default {
  name: "Header",
  data: () => ({
    appName: manifest.name,
    drawer: true
  })
};
</script>
