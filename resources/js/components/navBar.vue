<template>
<div>

    <v-app-bar
      app
      flat
      height="75"
      class="appbar px-2"
      color="transparent"
      dark
      elevate-on-scroll
      scroll-target="#header"
    >
      
      <v-toolbar-title>Multimedia</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" text>Home</v-btn>
        <v-btn to="/about" text>About</v-btn>
        <v-btn to="/product" text>Product</v-btn>
        <v-btn to="/activity" text>Activity</v-btn>
        <v-btn to="/peminjaman" text>Peminjaman</v-btn>
      </v-toolbar-items>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawerAct"></v-app-bar-nav-icon>
      
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      right
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://scontent-sin6-1.xx.fbcdn.net/v/t31.0-8/21368711_1501046613320872_5803188875072513101_o.png?_nc_cat=100&_nc_oc=AQmcghKOkNteC68MZyQB-6b0Csdd0pM_tlM5QMHnaMiHUZu-bWk-vQNfQVx2T6es4Sw&_nc_ht=scontent-sin6-1.xx&oh=3ab4f0077df6abead587bb8cb99e8b55&oe=5E41A5CB"
          transition="scale-transition"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Multimedia FIT</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</div>
</template>
<script>
export default {
    data: () => ({
        drawer: null,
        activeBtn: 1,
        items: [
          { title: 'Home', icon: 'mdi-home', link: '/' },
          { title: 'About', icon: 'mdi-account', link: '/about' },
          { title: 'Product', icon: 'mdi-launch', link: '/product' },
          { title: 'Activity', icon: 'mdi-timelapse', link: '/activity' },
          { title: 'Peminjaman', icon: 'mdi-timelapse', link: '/peminjaman' }
        ],
    }),
    computed: {
        // drawer(){
        //     return this.$store.state.drawer;
        // }
    },
    methods: {
        drawerAct(){
            this.drawer = !this.drawer
            // this.$store.commit('drawerAct');
        }
    }
}
</script>
<style lang="scss">
    
</style>