import Vue from 'vue'
import router from './router'
import store from './vuex'
import VueAframe from './assets/js/vue-aframe'

import Slidmersive from './components/Slidmersive'

Vue.config.productionTip = false

Vue.use(VueAframe)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(Slidmersive)
}).$mount('#slidmersive')
