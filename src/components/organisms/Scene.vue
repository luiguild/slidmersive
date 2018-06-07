<template lang="pug">
a-scene(
  antialias="true",
  cursor="rayOrigin: mouse"
)
  Assets
  Scenario
    Slide

  //- a-entity(fps-counter)

  //- a-entity(
  //-   vive-controls="hand: right",
  //-   json-model="src:#gun"
  //- )
  //- a-entity(
  //-   vive-controls="hand: left"
  //- )

  a-entity#leftHand(
    shoot-controls="hand: left",
    weapon,
    shoot
  )

  a-entity#rightHandPivot
    a-entity#rightHand(
      shoot-controls="hand: right",
      weapon,
      shoot
    )

  //- a-entity(
  //-   id="leftHand",
  //-   shoot-controls="hand: left",
  //-   weapon,
  //-   shoot,
  //-   json-model="src:#gun"
  //- )
  //-
  //- a-entity(
  //-   id="rightHand",
  //-   shoot-controls="hand: right",
  //-   weapon,
  //-   shoot,
  //-   json-model="src:#gun"
  //- )

  a-entity(
    rotation="0 0 0"
  )
    a-entity#player(
      camera="userHeight: -0.5",
      vuex-watcher=`
        attributes: rotation, position;
        actions: setCameraRotation, setCameraPosition;
      `,
      wasd-controls,
      look-controls,
      restrict-position
    )
    //- a-camera(
    //-   look-controls,
    //-   wasd-controls
    //- )
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
