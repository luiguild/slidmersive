<template lang="pug">
a-scene(fog='color: #FFFFFF; near: 0; far: 65;')
  a-assets
    a-asset-item#fontAwesomeRegularFont(
      src='../static/fonts/Font_Awesome_Regular.json'
    )
    a-asset-item#fontAwesomeBrandsFont(
      src='../static/fonts/Font_Awesome_Brands.json'
    )
    a-asset-item#fontAwesomeSolid(
      src='../static/fonts/Font_Awesome_Solid.json'
    )
    a-asset-item#permanentMarkerRegularFont(
      src='../static/fonts/Permanent_Marker_Regular.json'
    )
    a-asset-item#RobotoBlackRegularFont(
      src='../static/fonts/Roboto_Black_Regular.json'
    )
    a-asset-item#RobotoRegularFont(
      src='../static/fonts/Roboto_Regular.json'
    )

  Scenario
    Slide

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
      a-entity(
        cursor="fuse: true;",
        raycaster="far: 2000; interval: 1000; objects: .clickable",
        position="0 0 -1",
        geometry="primitive: ring; radiusInner: 0.005; radiusOuter: 0.015;",
        material="color: #777; shader: flat"
      )
        a-animation(
          begin="click",
          easing="ease-in",
          attribute="scale",
          dur="50",
          fill="forwards",
          from="0.1 0.1 0.1",
          to="1 1 1",
        )
        a-animation(
          begin="cursor-fusing",
          easing="ease-in",
          attribute="scale",
          dur="1500",
          fill="backwards",
          from="1 1 1",
          to="0.1 0.1 0.1",
        )
</template>

<script>
// import {
//   mapGetters,
//   mapActions
// } from 'vuex'

import { Scenario, Slide } from '@/components/molecules'

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
  components: {
    Scenario,
    Slide
  },
  computed: {
  //   ...mapGetters([])
  },
  methods: {
  //   ...mapActions([])
  },
  filters: {},
  watch: {}
}
</script>

<style lang="sass">
  // @import ../../static/sass/imports/_extend
</style>
