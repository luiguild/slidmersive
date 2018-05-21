import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex'

Vue.use(Router)

const load = component => () =>
  import(`@/components/${component}.vue`)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/presentation/slides/:id',
      name: 'Presentation',
      components: {
        content: load('pages/Presentation')
      },
      props: true,
      beforeEnter (to, from, next, state = store) {
        return state.dispatch('slides/getSlides')
          .then(() => next(
            state.dispatch('slides/setActual', to.params.id))
          )
      }
    },
    {
      path: '*',
      redirect: '/presentation/slides/0'
    }
  ]
})

export default router
