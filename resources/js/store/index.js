import Vue from 'vue'
import Vuex from 'vuex'
// import api from '@/plugins/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null
  },
  mutations: {
    drawerAct(state) {
      state.drawer = !state.drawer;
    },
    addPeminjaman(state, data) {
      // api.addPeminjaman({obj: data})
      // .then(result=>{
      //     console.log('berhasill')
      // })
      // .catch(err=>{
      //   console.log('err')
      // })
    }
  },
  actions: {
  },
  modules: {
  }
})
