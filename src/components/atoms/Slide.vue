<template lang="pug">
  a-entity(
    position="0 -4 0",
    rotation="30 0 0"
  )
    a-plane(
      color="#CCC",
      height="9",
      width="16",
      position="0 5 -10",
      opacity="0.6"
    )
    a-entity#rightArrow(
      text-geometry=`
        value: ;
        font: #fontAwesomeSolid;
        height: 0.1;
        size: 1;
      `,
      position="6 4 -8",
      material="color: white;"
    )

    a-entity#leftArrow(
      text-geometry=`
        value: ;
        font: #fontAwesomeSolid;
        height: 0.1;
        size: 1;
      `,
      position="-7.4 4 -8",
      material="color: white;"
    )

    a-entity#title(
      text-geometry=`
        value: VR com Vue!;
        font: #permanentMarkerRegularFont;
        height: 0.1;
        size: 1.4;
      `,
      position="-5.8 4.5 -9",
      material="color: white;"
    )

    a-entity#subTitle(
      text-geometry=`
        value: Realidade Virtual já é Realidade;
        font: #RobotoRegularFont;
        height: 0.05;
        size: 0.6;
      `,
      position="-5.8 3.5 -9",
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
    ])
  },
  methods: {
    ...mapActions([])
  },
  filters: {},
  watch: {
    getCameraInfo (change) {
      console.log('position', change.position.x, change.position.y, change.position.z)
      console.log('rotation', change.rotation.x, change.rotation.y, change.rotation.z)
    }
  }
}
</script>

<style lang="sass">
  // @import ../../static/sass/imports/_extend
</style>
