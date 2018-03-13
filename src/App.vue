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
                    <v-container fill-height>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                     <v-card-title primary-title>
          <div>
            <div :if="title" class="headline">{{title}}</div>
            <span :if="description">{{description}}</span>
          </div>
        </v-card-title>
                   <router-view></router-view>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn>
                  </v-card-actions>
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
