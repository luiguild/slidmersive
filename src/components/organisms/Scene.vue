<template lang="pug">
a-scene(antialias="true", cursor="rayOrigin: mouse")
  Assets
  Scenario
    Slide

  //- a-entity(fps-counter)

  a-entity(hand-controls="left")
  a-entity(hand-controls="right")

  a-entity(
    rotation="0 -170 0",
    position="0 0 -3",
  )
    a-camera(
      vuex-watcher=`
        attributes: rotation, position;
        actions: setCameraRotation, setCameraPosition;
      `,
      look-controls,
      wasd-controls
    )
</template>

<script>
// import {
//   mapGetters,
//   mapActions
// } from 'vuex'

import {
  Scenario,
  Slide
} from '@/components/molecules'

import {
  Assets
} from '@/components/bosons'

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
    // document.addEventListener('keyup', event => this.keyControls(event))
  },
  mounted () {},
  updated () {},
  destroyed () {},
  beforeDestroy () {
    // document.removeEventListener('keyup', event => this.keyControls(event))
  },
  components: {
    Scenario,
    Slide,
    Assets
  },
  computed: {
  //   ...mapGetters([])
  },
  methods: {
  //   ...mapActions([]),
    // keyControls (event) {
    //   if (event.keyCode === 73) {
    //     this.fps = !this.fps
    //   }
    // }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="sass">
  // @import ../../static/sass/imports/_extend
</style>
