import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null
  },
  mutations: {
    drawerAct(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {
  },
  modules: {
  }
})
