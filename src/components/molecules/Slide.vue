<template lang="pug">
  a-entity(
    rotation="0 190 0",
    position="3.2 6 15"
  )
    a-entity(
      :position="actualPosition",
      :rotation="getCameraRotation",
      material="color: #FFFFFF; opacity: 0;"
      :geometry="getGeometry",
      :animation="getAnimation"
    )
      SlideBase
        a-entity(:is="getContainer")
</template>

<script>
import {
  mapGetters
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
    actualPosition: '',
    pastPosition: '',
    nextPosition: '',
    animationTime: 1000
  }),
  created () {},
  mounted () {
    console.log('aahasouhdouashdosuahdoasuhda', this.getActualSlide)
    if (this.getActualSlide) {
      this.setPosition(this.getActualSlide.style.position)
    }
    // this.getPosition()
  },
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
    getAnimation () {
      const animation = `
        property: position;
        dur: ${this.animationTime};
        delay: 0;
        from: ${this.pastPosition};
        to: ${this.nextPosition};
        dir: alternate;
        loop: 0;
        easing: easeInOutQuad;
      `
      return animation
    },
    getGeometry () {
      if (this.getActualSlide) {
        const height = this.getActualSlide.style.height
        const width = this.getActualSlide.style.width

        return `primitive: plane; height: ${height}; width: ${width};`
      }
    },
    getContainer () {
      if (this.getActualSlide) {
        return load(`molecules/${this.getActualSlide.component}`)
      }
    },
    getPosition () {
      if (this.getActualSlide) {
        return console.log('OIASDOASIHDOIASHDOISAHDIOPUASHDOPISAHD', this.getActualSlide)
      }
    }
  },
  methods: {
    setPosition (newPosition) {
      if (this.actualPosition === '') {
        this.actualPosition = newPosition

        return this.actualPosition
      } else {
        this.pastPosition = this.nextPosition
        this.nextPosition = newPosition

        return setTimeout(() => {
          this.actualPosition = newPosition

          return this.actualPosition
        }, this.animationTime)
      }
    }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="sass">
  // @import ../../static/sass/imports/_extend
</style>
