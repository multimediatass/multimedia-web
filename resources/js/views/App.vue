<template>
  <v-app>
    <!-- <appBar/> -->
    <navBar/>
    <Header :fullHeight="fullHeight" :title="title" :subtitle="subtitle"/>
    <v-content style="margin-bottom: 100px;">
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import appBar from '@/js/components/appBar.vue'
import navBar from '@/js/components/navBar.vue'
import Header from '@/js/components/header.vue'
import Footer from '@/js/components/footer.vue'

export default {
  name: 'App',
  components: {
    appBar,
    navBar,
    Header,
    Footer
  },
  created(){
    this.$router.beforeEach((to, from, next) => {
      setTimeout(() => {
        next();
      }, 300);
    })
  },
  computed: {
    fullHeight(){
      return this.$route.meta.fullHeight
    },
    title(){
      return this.$route.meta.title
    },
    subtitle(){
      return this.$route.meta.subtitle
    }
  },
  data: () => ({
    //
  }),
};
</script>
