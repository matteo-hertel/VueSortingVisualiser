<template>
   <h3 class="headline mb-0">{{appName}}</h3> 
</template>
<script>
import manifest from "./../manifest.json";

export default {
  name: "Home",
  data: () => ({
    appName: manifest.name
  })
};
</script>
