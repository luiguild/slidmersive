<template lang="pug">
  a-entity
    a-plane(
      color="#CCC",
      height="9",
      width="16",
      position="0 0 0",
      rotation="0 0 0",
      opacity="0.6"
    )

    a-entity#rightArrow(
      @click="nextSlide",
      text-geometry=`
        value: ;
        font: #fontAwesomeSolid;
        height: 0.1;
        size: 1;
      `,
      position="6.6 -1.1 2",
      material="color: white;"
    )

    a-entity#leftArrow(
      @click="previousSlide",
      text-geometry=`
        value: ;
        font: #fontAwesomeSolid;
        height: 0.1;
        size: 1;
      `,
      position="-8 -1.1 2",
      material="color: white;"
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
      'getActualSlide'
    ])
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
