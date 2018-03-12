<template>
  <v-app id="inspire" dark>
   <Header> 
	<div slot="navigation">
          <Navigation :routes="routes" />
        </div>
   </Header>
   <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-layout>
               <v-flex xs12>
                 <v-card>
                   <v-card-title primary-title>
                       <h3 :if="title" class="headline mb-0">{{title}}</h3>
                   </v-card-title>
                   <router-view></router-view>
                   <p :if="description">{{description}}</p>
		</v-card>
               </v-flex>
             </v-layout>
            </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Footer/>
</v-app>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Navigation from "./components/layout/Navigation.vue";
import Footer from "./components/layout/Footer.vue";
import routes from "./routes.js";

export default {
  data: () => ({
    drawer: true,
    routes
  }),
  props: {
    source: String
  },
  computed: {
    title() {
      return this.$route.name;
    },
    description() {
      return this.$route.meta.description;
    }
  },
  components: { Header, Navigation, Footer }
};
</script>
