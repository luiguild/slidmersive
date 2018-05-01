import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const load = component => () => import(`@/components/${component}.vue`)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/presentation',
      name: 'Presentation',
      components: {
        content: load('pages/Presentation')
      }
    },
    {
      path: '*',
      redirect: '/presentation'
    }
  ]
})

export default router
