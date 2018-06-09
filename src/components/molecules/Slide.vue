<template lang="pug">
  a-entity(
    rotation="0 0 0",
    position="0 6 -10"
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
    actualPosition: '',
    pastPosition: '',
    nextPosition: '',
    animationTime: 1000
  }),
  created () {
    if (this.getActualSlide) {
      this.setPosition(this.getActualSlide.style.position)
    }
  },
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
      'getSocketType',
      'getActualSlide'
    ]),
    ...mapGetters('socket', [
      'getSocketDataReceived'
    ]),
    getCameraRotation () {
      if (this.getSocketType === 'presenter' &&
          this.getCameraInfo.rotation) {
        const rotation = this.getCameraInfo.rotation
        const x = rotation.x
        const y = rotation.y
        const z = rotation.z || 0

        return `${x} ${y} ${z}`
      }

      if (this.getSocketType === 'spectator' &&
          this.getSocketDataReceived.rotation) {
        const rotation = this.getSocketDataReceived.rotation
        const x = rotation.x
        const y = rotation.y
        const z = rotation.z

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
  watch: {
    getActualSlide (slide) {
      if (slide) {
        return this.setPosition(slide.style.position)
      }
    }
  }
}
</script>

<style lang="sass">
  // @import ../../static/sass/imports/_extend
</style>
