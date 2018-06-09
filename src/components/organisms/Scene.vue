<template lang="pug">
a-scene(
  cursor="rayOrigin: mouse"
)
  Assets
  Scenario
    Slide

  //- a-entity(fps-counter)

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

    a-entity(
      v-if="this.getSocketType === 'spectator'",
      :rotation="getSyncRotation",
      :position="getSyncPosition"
    )
      a-entity#player(
        camera,
        wasd-controls,
        look-controls,
        restrict-position
      )

    a-entity#player(
      v-if="this.getSocketType === 'presenter'"
      camera,
      vuex-watcher=`
        attributes: rotation, position;
        actions: setCameraRotation, setCameraPosition;
      `,
      wasd-controls,
      look-controls,
      restrict-position
    )
    //- a-entity#spectator(
      camera="spectator: true;"
    //- )
</template>

<script>
import {
  mapGetters
} from 'vuex'

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
    ...mapGetters('slides', [
      'getSocketType'
    ]),
    ...mapGetters('socket', [
      'getSocketDataReceived'
    ]),
    getSyncRotation () {
      if (this.getSocketType === 'spectator' &&
          this.getSocketDataReceived.rotation) {
        const rotation = this.getSocketDataReceived.rotation
        const x = rotation.x
        const y = rotation.y
        const z = rotation.z

        return `${x} ${y} ${z}`
      }
    },
    getSyncPosition () {
      if (this.getSocketType === 'spectator' &&
          this.getSocketDataReceived.position) {
        const position = this.getSocketDataReceived.position
        const x = position.x
        const y = position.y
        const z = position.z
        // const y = position.y - 0.5
        // const z = position.z + 1

        return `${x} ${y} ${z}`
      }
    }
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
