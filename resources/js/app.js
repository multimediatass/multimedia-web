import Vue from 'vue'

import router from '@/js/router/'
import store from '@/js/store/'
import vuetify from '@/js/plugins/vuetify.js'

import App from '@/js/views/App'

const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    render: h => h(App)
})

export default app