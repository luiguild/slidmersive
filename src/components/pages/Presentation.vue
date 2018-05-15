<template lang="pug">
Scene
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

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
  created () {
    return this.getSlides()
      .then(() => {
        return this.setActual(this.$route.params.id)
      })
  },
  mounted () {},
  // beforeRouteEnter (to, from, next) {
  //
  // },
  beforeRouteUpdate (to, from, next) {
    console.log('WATCH BEFORE UPDATE')
  },
  updated () {
  },
  destroyed () {},
  components: {
    Scene
  },
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions('slides', [
      'setActual',
      'getSlides'
    ])
  },
  filters: {},
  watch: {}
}
</script>

<style lang="sass">
// @import ../../static/sass/imports/_extend
</style>
