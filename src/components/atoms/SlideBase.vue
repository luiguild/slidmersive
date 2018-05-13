<template lang="pug">
  a-entity
    a-plane(
      color="#CCC",
      :height="getHeight",
      :width="getWidth",
      position="0 0 0",
      rotation="0 0 0",
      :opacity="getOpacity"
    )

    a-entity#rightArrow
      a-entity.clickable(
        @click="nextSlide",
        @keyup.right="nextSlide",
        text-geometry=`
          value: ;
          font: #fontAwesomeSolid;
          height: 0.1;
          size: 1;
        `,
        position="6.6 -1.1 2",
        :material="getMaterial.right"
      )
      a-animation(
        attribute="position",
        dur="1123",
        delay="234"
        fill="forwards",
        easing="ease-in-out-sine",
        from="0 0 0",
        to="0 0 -0.2",
        direction="alternate",
        repeat="indefinite"
      )

    a-entity#leftArrow
      a-entity.clickable(
        @click="previousSlide",
        @keyup.left="previousSlide",
        text-geometry=`
          value: ;
          font: #fontAwesomeSolid;
          height: 0.1;
          size: 1;
        `,
        position="-8 -1.1 2",
        :material="getMaterial.left"
      )
      a-animation(
        attribute="position",
        dur="1314",
        delay="134",
        fill="forwards",
        easing="ease-in-out-sine",
        from="0 0 0",
        to="0 0 -0.2",
        direction="alternate",
        repeat="indefinite"
      )

    slot
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  computed: {
    ...mapGetters('slides', [
      'getActualSlide',
      'getActualSituation'
    ]),
    getOpacity () {
      if (this.getActualSlide.style) {
        return this.getActualSlide.style.opacity
      }
    },
    getHeight () {
      if (this.getActualSlide.style) {
        return this.getActualSlide.style.height
      }
    },
    getWidth () {
      if (this.getActualSlide.style) {
        return this.getActualSlide.style.width
      }
    },
    getMaterial () {
      const materialBase = 'color: white;'
      console.log(this.getActualSituation)
      if (this.getActualSituation === 'first') {
        return {
          left: `${materialBase} opacity: 0.4;`,
          right: `${materialBase} opacity: 1;`
        }
      } else if (this.getActualSituation === 'last') {
        return {
          left: `${materialBase} opacity: 1;`,
          right: `${materialBase} opacity: 0.4;`
        }
      } else {
        return {
          left: `${materialBase} opacity: 1;`,
          right: `${materialBase} opacity: 1;`
        }
      }
    }
  },
  methods: {
    ...mapActions('slides', [
      'setNextSlides',
      'setPreviousSlides'
    ]),
    nextSlide () {
      this.setNextSlides()
    },
    previousSlide () {
      this.setPreviousSlides()
    }
  },
  watch: {
    getActualSlide (change) {
      console.log('mudou', change)
    }
  }
}
</script>

<style lang="css">
</style>
