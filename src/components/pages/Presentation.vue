<template lang="pug">
.app
  LockIndicator
  Scene
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

import { LockIndicator } from '@/components/atoms'
import { Scene } from '@/components/organisms'

export default {
  props: {
    // prop: {
    //   type: String,
    //   required: false,
    //   validator: function (value) {
    //     return value
    //   },
    //   default: function () {
    //     return ''
    //   }
    // }
  },
  data: () => ({}),
  created () {},
  mounted () {},
  updated () {
  },
  destroyed () {},
  components: {
    Scene,
    LockIndicator
  },
  computed: {
    ...mapGetters('slides', [
      'getSocketType'
    ]),
    ...mapGetters('socket', [
      'getSocketDataReceived'
    ]),
  },
  methods: {
    ...mapActions('slides', [
      'setActual',
      'setToggleLockSlides'
    ])
  },
  filters: {},
  watch: {
    '$route' (route) {
      return Promise.all([
        this.setActual(route.params.id),
        this.setToggleLockSlides()
      ])
    },
    'getSocketDataReceived.slideIndex' (change) {
      if (this.getSocketType === 'spectator') {
        return this.setActual(change)
      }
    }
  }
}
</script>

<style lang="sass">
  .app
    height: 100vh
    width: 100vw
</style>
