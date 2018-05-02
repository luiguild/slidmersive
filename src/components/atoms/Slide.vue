<template lang="pug">
  a-entity(
    position="0 6 -9",
    :rotation="cameraRotation",
    height="9",
    width="16"
    material="color: #000; opacity: 0;"
    geometry="primitive: plane; height: 9; width: 16;"
  )
    a-plane(
      color="#CCC",
      height="9",
      width="16",
      position="0 0 0",
      rotation="0 0 0",
      opacity="0.6"
    )
    a-entity#rightArrow(
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
      text-geometry=`
        value: ;
        font: #fontAwesomeSolid;
        height: 0.1;
        size: 1;
      `,
      position="-8 -1.1 2",
      material="color: white;"
    )

    a-entity#title(
      text-geometry=`
        value: VR com Vue!;
        font: #permanentMarkerRegularFont;
        height: 0.1;
        size: 1.4;
      `,
      position="-5.8 -0.8 1",
      material="color: white;"
    )

    a-entity#subTitle(
      text-geometry=`
        value: Realidade Virtual já é realidade;
        font: #RobotoRegularFont;
        height: 0.05;
        size: 0.6;
      `,
      position="-5.8 -1.7 1",
      material="color: white;"
    )
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

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
  created: function () {},
  mounted: function () {},
  updated: function () {},
  destroyed: function () {},
  components: {},
  computed: {
    ...mapGetters('aframe', [
      'getCameraInfo'
    ]),
    cameraRotation () {
      if (this.getCameraInfo.position) {
        const rotation = this.getCameraInfo.rotation
        let x =
          rotation.x >= 1.6
            ? rotation.x
            : 1.6
        let y = rotation.y * -1
        let z = rotation.z || 0

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
