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
      path: '/presentation/:type/slides/:id',
      name: 'Presentation',
      components: {
        content: load('pages/Presentation')
      },
      props: true,
      beforeEnter (to, from, next, state = store) {
        state.dispatch('slides/setSocketType', to.params.type)
        return state.dispatch('slides/getSlides')
          .then(() =>
            next(
              state.dispatch('slides/setActual', to.params.id)
            )
          )
      }
    },
    {
      path: '*',
      redirect: '/presentation/presenter/slides/0'
    }
  ]
})

export default router
