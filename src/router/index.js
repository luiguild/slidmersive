import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const load = component => () => import(`@/components/${component}.vue`)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        content: load('pages/Home')
      }
    }
  ]
})

export default router
