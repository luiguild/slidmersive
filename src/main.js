import Vue from 'vue'
import router from './router'
import store from './vuex'

import Slidmersive from './components/Slidmersive'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(Slidmersive)
}).$mount('#slidmersive')
