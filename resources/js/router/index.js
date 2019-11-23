import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/js/views/Home'
import About from '@/js/views/About'
import Product from '@/js/views/Product'
import Peminjaman from '@/js/views/Peminjaman'
import Activity from '@/js/views/Activity'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        fullHeight: true,
        title: 'Home',
        subtitle: 'Subtitle'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        fullHeight: false,
        title: 'About',
        subtitle: 'Subtitle'
      }
    },
    {
      path: '/product',
      name: 'Product',
      component: Product,
      meta: {
        fullHeight: false,
        title: 'Product',
        subtitle: 'Subtitle'
      }
    },
    {
      path: '/peminjaman',
      name: 'Peminjaman',
      component: Peminjaman,
      meta: {
        fullHeight: false,
        title: 'Peminjaman Barang',
        subtitle: 'Multimedia Research Laboratory FIT'
      }
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity,
      meta: {
        fullHeight: false,
        title: 'Activity',
        subtitle: 'Subtitle'
      }
    }
  ]
})
