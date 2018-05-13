<template lang="pug">
  a-entity(
    :position="getPosition",
    :rotation="getCameraRotation",
    material="color: #000; opacity: 0;"
    :geometry="getGeometry"
  )
    SlideBase
      a-entity(:is="getContainer")
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
  data: () => ({}),
  created () {},
  mounted () {},
  updated () {},
  destroyed () {},
  components: {
    SlideBase
  },
  computed: {
    ...mapGetters('aframe', [
      'getCameraInfo'
    ]),
    ...mapGetters('slides', [
      'getActualSlide'
    ]),
    getCameraRotation () {
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
    },
    getPosition () {
      if (this.getActualSlide.style) {
        return this.getActualSlide.style.position
      }
    },
    getGeometry () {
      if (this.getActualSlide.style) {
        const height = this.getActualSlide.style.height
        const width = this.getActualSlide.style.width

        return `primitive: plane; height: ${height}; width: ${width};`
      }
    },
    getContainer () {
      if (this.getActualSlide.component) {
        return load(`molecules/${this.getActualSlide.component}`)
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
