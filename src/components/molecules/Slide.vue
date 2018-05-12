<template lang="pug">
  a-entity(
    billboard,
    position="0 6 -9",
    :rotation="cameraRotation",
    height="9",
    width="16"
    material="color: #000; opacity: 0;"
    geometry="primitive: plane; height: 9; width: 16;"
  )
    SlideBase
      a-entity(:is="slideComponent")
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

import {
  SlideBase
} from '@/components/atoms'

const load = component => () => import(`@/components/${component}.vue`)

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
  data: () => ({
    slideComponent: ''
  }),
  created: function () {},
  mounted: function () {
    this.slideComponent = load('atoms/Welcome')
  },
  updated: function () {},
  destroyed: function () {},
  components: {
    SlideBase
  },
  computed: {
    ...mapGetters('aframe', [
      'getCameraInfo'
    ]),
    cameraRotation () {
      if (this.getCameraInfo.position) {
        const rotation = this.getCameraInfo.rotation
        const x =
          rotation.x >= 1.6
            ? rotation.x
            : 1.6
        const y = rotation.y
        const z = rotation.z || 0

        return `${x} ${y} ${z}`
      }
    }
  },
  methods: {
    ...mapActions([])
  },
  filters: {},
  watch: {}
}
</script>

<style lang="sass">
  // @import ../../static/sass/imports/_extend
</style>
