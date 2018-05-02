import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const load = component => () => import(`@/components/${component}.vue`)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/presentation/slides/:id',
      name: 'Presentation',
      components: {
        content: load('pages/Presentation')
      },
      props: true
    },
    {
      path: '*',
      redirect: '/presentation/slides/0'
    }
  ]
})

export default router
