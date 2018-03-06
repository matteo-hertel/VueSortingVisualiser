<template>
  <v-app id="inspire" dark>
   <Header />
   <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-layout>
               <v-flex xs12>
                 <v-card>
                   <v-card-title primary-title>
                     <div>
                       <h3 class="headline mb-0">Heap Sort</h3>
                    </div>
                   </v-card-title>
                  <div>
                   <router-view></router-view>
                 </div>
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
import Footer from "./components/layout/Footer.vue";
export default {
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  },
  components: { Header, Footer }
};
</script>
